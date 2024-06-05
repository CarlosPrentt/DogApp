import { dogs } from "../data/dogs";

export const getDogById = (id) => {
  return dogs.find(dog => dog.id === id);
};
