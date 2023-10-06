import googleLogo from "../assets/googleLogo.png";
import { BiSolidDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Form = ({ handleEmail }) => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  function handleInputEmail(e) {
    setEmail(e.target.value);
    handleEmail(e.target.value);

    if (!e.target.value.includes("@") || !e.target.value.includes(".com")) {
      setMsg("Your email is invalid");
    //   setShowMsg(true);
    } else {
      setMsg("");
    }
    if (email === "") {
      setMsg("");
    }
  }

  return (
    <div className="grid place-items-center h-screen">
      <div>
        <div className="px-10 py-10 rounded-md text-black border border-gray-300 bg-white flex flex-col items-center md:w-[450px] md:h-[500px] mx-4 md:mx-auto ">
          <div className="text-center ">
            <div className="w-[120px] mx-auto mb-4">
              <img src={googleLogo} alt="google_logo" />
            </div>
            <h2 className="font-semibold text-2xl mb-3">Sign in</h2>
            <p>to continue to Google form</p>
          </div>
          <div className="w-full mt-12">
            <input
              type="email"
              className="p-3 rounded border border-gray-300 outline-none w-full"
              placeholder="Email or Phone"
              onChange={handleInputEmail}
              value={email}
            />
            {/* {showMsg && (
              <small className="w-full text-xs text-red-600 h-2 flex gap-2 items-center mt-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
                Your email is invalid
              </small>
            )} */}
            <div>
              <a href="#" className="text-blue-600 mt-1 text-sm font-semibold">
                Forgot email?
              </a>
            </div>
          </div>

          <div className="w-full mt-10 text-sm">
            <p className="text-gray-600">
              Not your computer? Use Guest mode to sign in privately.
            </p>
            <div>
              <a href="#" className="text-blue-600 font-semibold">
                Learn More
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center w-full mt-10">
            <div className="text-blue-600 cursor-pointer">Create account</div>

            <Link
              to={
                msg === "" && email !== ""
                  ? "/signin/challenge"
                  : "/signin/identifier"
              }
            >
              <button
                className="bg-blue-500 rounded-md text-white font-semibold px-5 py-1.5 hover:bg-blue-700"
             
                // disabled={msg === "" && email !== "" ? false : true}
              >
                Next
              </button>
            </Link>
          </div>
        </div>

        <div className="md:w-[450px] mx-4 md:mx-auto flex justify-between mt-5 text-[12px] ">
          <div className="cursor-pointer flex gap-6 items-center">
            English (United States)
            <BiSolidDownArrow className="inline-block w-5 h-2" />
          </div>
          <div className="flex flex-end gap-8 items-center cursor-pointer">
            <p>Help</p>
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;