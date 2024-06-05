import { dogs } from "../data/dogs";

export const getDogByName = (name = "") => {
  name = name.toLocaleLowerCase().trim();
  if (name.length === 0) return [];

  return dogs.filter((dog) => dog.breed.toLocaleLowerCase().includes(name));
};
