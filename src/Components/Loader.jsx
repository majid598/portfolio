import { Audio } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full h-screen fixed z-[999] flex items-center justify-center top-0 left-0">
      <div className="three-dots-loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loader;
