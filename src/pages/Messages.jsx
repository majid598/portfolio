import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const Messages = () => {
  const [isOwner, setIsOwner] = useState(false);
  const [key, setKey] = useState("w147-xjm9-zq87-92s6-89ev");
  const [messages, setMessages] = useState([null]);
  const myKey = "code_with_raju";

  const handleSubmit = () => {
    if (key !== myKey) {
      console.log("invalid");
      toast.error("Invalid key");
    } else {
      setIsOwner(true);
    }
  };

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`https://contactform-1-ty1w.onrender.com/api/auth/contact/all?key=${myKey}`)
        .then(({ data }) => {
          setMessages(data.messages);
        })
        .catch((err) => toast.error(err?.data?.message));
    };

    getData();
  }, [messages]);

  return isOwner ? (
    <div className="w-full min-h-screen grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-20 lg:px-20 md:px-16 px-10 bg-[#d1d1d1]">
      {messages.map((message) => (
        <div className="bg-white w-full rounded-xl p-5 relative">
          <div className="grid grid-cols-2 gap-2">
            <h4>Name:</h4> <h5 className="!text-zinc-800">{message?.name}</h5>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <h4>Email:</h4> <h5>{message?.email}</h5>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <h4>Subject:</h4> <h5>{message?.subject}</h5>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <h4>Message:</h4> <h5>{message?.message}</h5>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center bg-[#d1d1d1]">
      <div className="w-[30rem] p-20 rounded-2xl shadow-sm bg-[#e3e3e3]">
        <input
          type="text"
          placeholder="Enter Key To View Content"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="w-full p-2 bg-transparent border rounded-lg border-black/20 hover:border-black/30 focus:border-sky-500 transition-all duration-300 outline-none"
        />
        <button
          onClick={() => handleSubmit()}
          className="mt-5 w-full bg-sky-500 hover:bg-sky-600 p-3 rounded-lg !outline-none !border-none"
        >
          Submit
        </button>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Messages;
