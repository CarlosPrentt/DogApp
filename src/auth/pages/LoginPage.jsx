import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../dogs/hooks/useForm";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { onInputChange, name, lastName } = useForm({
    name: "",
    lastName: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const onLogin = () => {
    if (name.length > 0 && lastName.length > 0) {
      navigate("/home", {
        replace: true,
      });
      return;
    }
    setShowAlert(true);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-800">
      <div className="flex w-1/2 rounded shadow-lg shadow-gray-900">
        <div className="hidden w-1/2 rounded md:block">
          <img
            className="rounded-tl rounded-bl"
            src="/assets/background/Husky.jpg"
            alt="German Shepherd"
          />
        </div>
        <div className="flex flex-col justify-between w-full gap-10 p-5 rounded-tr rounded-br md:w-1/2 bg-slate-900">
          <div>
            <h1 className="text-4xl text-white font-title">
              <span className="text-orange-600">L</span>ogin
            </h1>
            <hr className="border-gray-500" />
          </div>
          <form>
            <label htmlFor="name" className="text-gray-300 font-title">
              Name
            </label>
            <input
              id="name"
              className="w-full p-3 bg-transparent text-slate-400 placeholder-slate-700 outline-0 font-text focus:border-b focus:border-gray-500 focus:placeholder-slate-400"
              type="text"
              name="name"
              onChange={onInputChange}
              placeholder="Carlos"
              autoComplete="off"
            />
          </form>
          <div>
            <label htmlFor="last-name" className="text-gray-300 font-title">
              Last name
            </label>
            <input
              id="last-name"
              className="w-full p-3 mb-5 bg-transparent text-slate-400 placeholder-slate-700 outline-0 font-text focus:border-b focus:border-gray-500 focus:placeholder-slate-400"
              type="text"
              name="lastName"
              onChange={onInputChange}
              placeholder="Ferro"
              autoComplete="off"
            />
          </div>
          <button className="flex justify-center" onClick={onLogin}>
            <div className="w-1/3 p-2 transition-all duration-300 ease-linear bg-orange-600 border border-orange-600 rounded-full text-slate-900 active:scale-95 font-title hover:border hover:border-orange-600 hover:bg-slate-900 hover:text-orange-500">
              Login
            </div>
          </button>
          {showAlert && (
            <div className="flex justify-center font-bold text-red-600 font-text">
              All fields are mandatory.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
