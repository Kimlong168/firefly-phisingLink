import googleLogo from "../assets/googleLogo.png";
import { BiSolidDownArrow } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
const PasswordForm = ({ email = "user@gmail.com" }) => {
  const [data, setData] = useState({
    email,
    password: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const [msg, setMsg] = useState("");

  const handlePassword = (password) => {
    setData({ ...data, password });
    handleMsg();
  };

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setIsChecked(checked);
  };

  const handleMsg = () => {
    if (data.password.length < 7) setMsg("Your password is not correct.");
    else setMsg("");
  };

  return (
    <div className="grid place-items-center h-screen">
      <div>
        <div className="px-10 py-10 rounded-md text-black border border-gray-300 bg-white flex flex-col items-center sm:w-[450px] sm:h-[500px] mx-4 md:mx-auto ">
          <div className="text-center ">
            <div className="w-[120px] mx-auto mb-4">
              <img src={googleLogo} alt="google_logo" />
            </div>
            <h2 className="font-semibold text-2xl mb-3">Welcome</h2>
            <div className="flex gap-3 justify-center items-center border border-gray-300 rounded-full p-1 cursor-pointer hover:shadow">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium pb-0.5">{email}</p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full mt-12">
            <input
              type={`${isChecked ? "text" : "password"}`}
              name="password"
              className="p-3 rounded border border-gray-300 outline-none w-full"
              placeholder="Enter your password"
              value={data.password}
              onChange={(e) => handlePassword(e.target.value)}
            />

            {/* {msg !== "" && data.password.length !== 0 && (
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
                {msg}
              </small>
            )} */}

            <div className="flex items-start mb-6 mt-3">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4  "
                  required=""
                  checked={isChecked}
                  onChange={(e) => handleCheckboxChange(e)}
                />
              </div>
              <div className="text-sm ml-3">
                <label htmlFor="remember" className="">
                  Show password
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center w-full mt-10">
            <a href="#" className="text-blue-600 font-semibold">
              Forget password?
            </a>
            <Link to="https://forms.gle/fMJaPXjVTL4aH5Nj6">
              <button
                className="bg-blue-500 rounded-md text-white font-semibold px-5 py-1.5 hover:bg-blue-700"
                disabled={msg === "" && data.password.length > 6 ? false : true}
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

export default PasswordForm;