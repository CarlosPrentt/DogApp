export const AboutPage = () => {
  return (
    <div className="flex h-screen bg-black">
      <div className="flex flex-col items-center justify-center w-full h-screen gap-3 px-5 md:w-1/2 animate__animated animate__fadeIn bg-zinc-800">
        <h1 className="text-3xl font-bold text-white font-text">
          Welcome to the Dog's page!
        </h1>
        <p className="text-slate-400">
          Here you will know about different breeds of dogs and some of their
          characteristics.
        </p>
      </div>
      <div className="hidden md:block animate__animated animate__fadeIn w-1/2 h.screen">
        <img className="w-full" src="/assets/background/about.jpg" alt="" />
      </div>
    </div>
  );
};
