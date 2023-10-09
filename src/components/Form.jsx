import googleLogo from "../assets/googleLogo.png";
import { BiSolidDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";

const Form = ({ handleEmail }) => {
  const [email, setEmail] = useState("");
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  function handleInputEmail(e) {
    setErrorMessage("");
    setEmail(e.target.value);
    handleEmail(e.target.value);
  }

  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = () => {
  
    // Regular expression to check for a valid email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.match(emailPattern) && email !== "") {
      setErrorMessage("Please enter a valid email address.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div>
        <div className="px-10 py-10 rounded-md text-black border border-gray-300 bg-white flex flex-col items-center md:w-[450px] md:h-[500px] mx-2 md:mx-auto ">
          <div className="text-center ">
            <div className="w-[120px] mx-auto mb-4">
              <img src={googleLogo} alt="google_logo" />
            </div>
            <h2 className="font-semibold text-2xl mb-3">Sign in</h2>
            <p>to continue to Google form</p>
          </div>
          <div className="w-full mt-12">
            {/* <input
              type="email"
              className="p-3 rounded border border-gray-300 outline-none w-full"
              placeholder="Email or Phone"
              onChange={handleInputEmail}
              value={email}
              onBlur={validateEmail}
            /> */}
            <TextField
              type="email"
              id="outlined-basic"
              label="Email or Phone"
              placeholder={showPlaceholder ? "Email or Phone": " "}
              variant="outlined"
              fullWidth
              onChange={handleInputEmail}
              value={email}
              onBlur={validateEmail}
              onClick={() => setShowPlaceholder(false)}
            />

            <small className="w-full text-xs text-red-600 h-2">
              {errorMessage && (
                <p className=" flex gap-2 items-center mt-1.5">
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
                  {errorMessage}
                </p>
              )}
            </small>

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

            <Link to="/signin/challenge">
              <button
                className="bg-blue-500 rounded-md text-white font-semibold px-5 py-1.5 hover:bg-blue-700"
                disabled={errorMessage === "" && email !== "" ? false : true}
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
