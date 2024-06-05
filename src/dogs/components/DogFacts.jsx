export const DogFacts = ({ title, dog }) => {
  return (
    <>
      <div className={`flex gap-2 ${title === "Personality:" || title === "Difficulty:" ? "flex-col gap-0" : ""}`}>
        <h2 className="font-bold">{title}</h2>
        <p>{dog}</p>
      </div>
    </>
  );
};
