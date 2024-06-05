import { DogCard } from "./DogCard";
import { dogs } from "../data/dogs";

export const DogsList = () => {
  return (
    <div className="flex items-center justify-center w-full overflow-hidden bg-black">
      <div className="grid w-1/2 grid-cols-3 gap-5 mt-10">
        {dogs.map((dog) => (
          <DogCard key={dog.id} {...dog} />
        ))}
      </div>
    </div>
  );
};
