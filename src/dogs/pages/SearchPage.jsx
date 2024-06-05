import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useLocation } from "react-router-dom/dist";
import queryString from "query-string";
import { getDogByName } from "../helpers";
import { DogCard } from "../components/DogCard";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const dogs = getDogByName(q);

  const { searchText, onInputChange } = useForm({
    //The query parameter keeps if we start searchText with q
    searchText: q,
  });

  const showSearch = q.length === 0;
  const showError = q.length > 0 && dogs.length === 0;

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length < 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <div className="flex justify-end h-screen bg-black">
      <div className="w-full flex flex-col items-center md:items-end justify-center md:w-1/2 text-white animate__animated animate__fadeIn">
        <form
          onSubmit={onSearchSubmit}
          className="relative flex flex-col w-10/12"
        >
          <input
            type="text"
            className="w-full h-10 p-3 mb-12 bg-transparent border border-gray-500 rounded-full hover:border-gray-200 text-slate-400 placeholder-slate-700 outline-0 font-text focus:border-b focus:border-gray-500 focus:placeholder-slate-400"
            placeholder="Seek"
            name="searchText"
            value={searchText}
            onChange={onInputChange}
            autoComplete="off"
          />
          <button className="absolute top-2 right-5">
            <i className="text-gray-500 cursor-pointer hover:text-slate-200 fas fa-search" />
          </button>
        </form>
        <div
          className="w-10/12 text-slate-500"
          style={{ display: showSearch ? "" : "none" }}
        >
          Search a dog!
        </div>
        <div
          className="w-10/12 text-red-600"
          style={{ display: showError ? "" : "none" }}
        >
          No dog with <b>{q}</b>!
        </div>
        <div className="flex w-full pt-10 pl-20">
          {dogs.map((dog) => (
            <div className="w-1/3">
              <DogCard key={dog.id} {...dog} />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block w-1/2 animate__animated animate__fadeIn">
        <img src="/assets/dogs-nose.jpg" alt="dog-nose" />
      </div>
    </div>
  );
};
