import { useRef, useState } from "react";
import { LeftArrow } from "./LeftArrow";
import { RightArrow } from "./RightArrow";

const Slider = ({ dog }) => {
  const slideshow = useRef(null);
  const [disabled, setDisabled] = useState(false);

  const next = () => {
    if (slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0];
      slideshow.current.style.transition = `1000ms ease-out all`;

      const slideSize = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      const transition = () => {
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = "translateX(0)";
        slideshow.current.appendChild(firstElement);

        slideshow.current.removeEventListener("transitionend", transition);
      };

      slideshow.current.addEventListener("transitionend", transition);
    }
  };

  const previous = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const lastElement = slideshow.current.children[index];
      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

      const slideSize = slideshow.current.children[0].offsetWidth;
      setDisabled(true);

      slideshow.current.style.transition = "none";
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = "1000ms ease-out all";
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
      //Waiting the left btn transition until it ends
      setTimeout(() => {
        setDisabled(false);
      }, 1000);
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex" ref={slideshow}>
        <img className="" src={dog.slider} alt={dog.breed} />
        <img className="" src={dog.slider2} alt={dog.breed} />
        <img className="" src={dog.slider3} alt={dog.breed} />
      </div>
      <div className="absolute flex justify-between w-full top-1/2">
        <button
          disabled={disabled ? true : false}
          onClick={previous}
          className="transition-all cursor-pointer hover:scale-110 fill-slate-400 hover:fill-white"
        >
          <LeftArrow />
        </button>
        <button
          onClick={next}
          className="transition-all hover:scale-110 fill-slate-400 hover:fill-white"
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default Slider;
