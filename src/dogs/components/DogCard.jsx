import { Link } from "react-router-dom";

export const DogCard = ({
  id,
  breed,
  image,
}) => {
  return (
    <Link to={`/dog/${id}`}>
      <div className="text-white transition-all duration-500 animate__animated animate__fadeIn hover:scale-125">
        <div>
          <img src={image} alt={breed} />
        </div>
      </div>
    </Link>
  );
};
