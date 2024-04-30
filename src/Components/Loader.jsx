import { Audio } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full h-screen fixed bottom-0 left-0 flex flex-col items-center justify-center gap-4">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
        />
        <h4 className="text-2xl">Sending...</h4>
    </div>
  );
}

export default Loader;
