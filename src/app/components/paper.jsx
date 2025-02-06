// pass in a prop for 85 or 100vh

const Paper = () => {
  return (
    <div className="absolute top-0 left-0 bg-white w-full h-full">
      <div className="absolute bg-white bottom-0 blue-lines w-full h-[85vh]"></div>
      <div className="absolute h-screen w-[.5rem] bg-[linear-gradient(90deg,_rgba(255,18,18,0)_0%,_rgba(255,18,18,1)_50%,_rgba(255,18,18,0)_100%)] ml-[15vh]"></div>
    </div>
  );
};

export default Paper;