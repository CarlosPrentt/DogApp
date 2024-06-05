import { useNavigate, useParams } from "react-router-dom";
import { DogFacts } from "../components/DogFacts";
import { getDogById } from "../helpers/getDogById";
import Slider from "../components/Slider";

export const DogPage = () => {
  const navigate = useNavigate();
  const { dogId } = useParams();
  const dog = getDogById(dogId);

  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-center w-full bg-black">
      <div className="flex flex-col items-center mt-10 mb-10 bg-black rounded-md md:flex md:items-start md:flex-row md:w-7/12 md:bg-black xl:bg-white">
        <div className="w-3/5 overflow-hidden flex items-center md:w-1/2 border-white/[0.1]">
          <Slider dog={dog} dogId={dogId} />
        </div>
        <div className="w-3/5 overflow-hidden p-5 flex flex-col items-center justify-center md:w-1/2 text-black border-y border-r rounded-tr rounded-br bg-white bg-opacity-95 backdrop-blur-md border-white/[0.1]">
          <div className="animate__animated animate__fadeInLeft">
            <div className="text-end">
              <button onClick={onBack}>
                <i className="fas fa-times hover:cursor-pointer" />
              </button>
            </div>
            <div className="mb-8">
              <h1
                className="text-4xl font-title"
                style={{ textShadow: "2px 2px 5px rgba(0,0,0, 0.89" }}
              >
                {dog.breed}
              </h1>
            </div>
            <div className="text-black font-text">
              <h2 className="font-bold">Description:</h2>
              <p className="mb-2">{dog.description}</p>
              <DogFacts title="Personality:" dog={dog.personality} />
              <DogFacts title="Difficulty:" dog={dog.difficulty} />
              <DogFacts title="Size:" dog={dog.size} />
              <DogFacts title="Weight:" dog={dog.weight} />
              <DogFacts title="Life Expectancy:" dog={dog.lifeExpectancy} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
