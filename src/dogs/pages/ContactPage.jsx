import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const ContactPage = () => {
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [fieldsNotFilled, setFieldsNotFilled] = useState(false);

  const { onInputChange, name, email, description, formState } = useForm({
    name: "",
    email: "",
    description: "",
  });

  const sendForm = () => {
    const expRegEmail =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const emailIsValid = expRegEmail.test(email);
    if (name.length > 0 && email.length > 0 && description.length > 0) {
      setFieldsNotFilled(false);
      if (emailIsValid) {
        setInvalidEmail(false);
        window
          .open(
            `https://wa.me/${573142306778}?text=*Name:*%20${name}%0a*Email:*%20${email}%0a*I%20want%20to%20know%20about:*%20${description}`,
            "_blank"
          )
          .focus();
      } else {
        setInvalidEmail(true);
      }
    } else {
      setFieldsNotFilled(true);
    }
  };

  return (
    <div className="flex-col items-center justify-center h-full pb-20 bg-black md:flex md:flex-row font-text">
      <div className="flex flex-col items-center justify-center w-full pt-20 md:w-1/2 md:pt-0 md:h-screen">
        <form className="flex flex-col items-center w-3/5 gap-2">
          <div className="flex justify-center w-full gap-2">
            <input
              className="w-1/2 p-2 text-white bg-black border border-gray-600 rounded-sm outline-none"
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={onInputChange}
            />
            <input
              className="w-1/2 p-2 text-white bg-black border border-gray-600 rounded-sm outline-none"
              type="text"
              placeholder="Enter your email"
              name="email"
              onChange={onInputChange}
            />
          </div>
          <div className="w-full">
            <textarea
              className="w-full p-2 text-white bg-black border border-gray-600 rounded-sm outline-none resize-none auto-growing scro"
              name="description"
              placeholder="Let us a message!"
              onChange={onInputChange}
            />
          </div>
        </form>
        <div className="w-3/5">
          <button
            onClick={sendForm}
            className="p-1.5 active:scale-95 hover:bg-orange-400 bg-orange-600 border-none rounded-sm"
          >
            Submit
          </button>
          {fieldsNotFilled && (
            <div className="flex justify-center p-5 font-bold text-red-600 font-text">
              All fields are mandatory.
            </div>
          )}
          {invalidEmail && (
            <div className="flex justify-center p-5 font-bold text-red-600 font-text">
              The email is not valid.
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center w-full h-screen gap-5 px-5 md:w-1/2 items-left">
        <h1 className="text-orange-600 text-7xl font-title">Contact us</h1>
        <p className="text-white font-text">
          We would like to hear from you! Here you can tell us how we can help
          you if you have some advices you can share with us about the site, if
          you know about another breed we can add or if simply you want to give
          us a greeting. It would be a pleasure to know your opinions!
        </p>
      </div>
    </div>
  );
};
