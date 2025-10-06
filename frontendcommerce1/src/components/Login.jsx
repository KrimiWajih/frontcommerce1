import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate, useRevalidator } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState({ email: "", password: "" });
  const { revalidate } = useRevalidator();
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const nameRef = useRef();
  const SemailRef = useRef();
  const SpasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRef.current.value || !passwordRef.current.value) {
      toast.error("Please fill out all required fields");
      return;
    }

    const newUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/Signin",
        newUser , { withCredentials: true }
      );
      // to get cookies , we need first to change the signin function in backend to instead of token , use cookies ,after installing cookie-parser
      // then we add with credentials to the newuser passed for login , and go to api getcurrent and add withcredentials to the request. then go and change the 
      // isAuth and change it to  const token = req.cookies.token
      console.log("Login response:", response);
      toast.success("Logged in successfully");

      // localStorage.setItem("token", response.data.token);
     
      navigate("/");
      revalidate();

    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          toast.error("User not found");
        } else if (error.response.status === 500) {
          toast.error(error.response.data.Msg || "Wrong Password");
        } else {
          toast.error("Failed to login");
        }
      } else {
        toast.error("Server not reachable");
      }
    }
  };

  const handlesignup = async (e) => {
    e.preventDefault();

    if (
      !SemailRef.current.value ||
      !nameRef.current.value ||
      !SpasswordRef.current.value ||
    !confirmPasswordRef.current.value
    ) {
      toast.error("Make sure to fill the Sing Up form");
      // return;
    } else if(SpasswordRef.current.value  !== confirmPasswordRef.current.value){
      toast.error("Password doesn't match");
    }
     else{


    const SignupUser = {
      name: nameRef.current.value,
      email: SemailRef.current.value,
      password: SpasswordRef.current.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/Signup",
        SignupUser
      );
      console.log("Signup response:", response);
      toast.success(response.data.Msg);
      navigate("/verifyaccount");
    } catch (error) {
      console.error("Signup error:", error.response?.data?.Msg || error?.Msg);
      error?.response?.data?.Msg?.forEach((el) => toast.error(el));
    }
  }
  };
  return (
    <div>
      {login ? (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline focus:outline-indigo-600"
              >
                Sign in
              </button>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <button
                onClick={() => setLogin(false)}
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
          <div className="text-center mb-12">
            <h4 className="text-gray-600 text-base mt-6">
              Sign up for an account
            </h4>
          </div>
          <form>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-600 text-sm mb-2 block">
                  Full Name
                </label>
                <input
                  type="text"
                  ref={nameRef}
                  className="bg-gray-100 w-full px-4 py-3 rounded focus:outline-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="text-gray-600 text-sm mb-2 block">
                  Email Id
                </label>
                <input
                  type="email"
                  ref={SemailRef}
                  className="bg-gray-100 w-full px-4 py-3 rounded focus:outline-blue-500"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div>
                <label className="text-gray-600 text-sm mb-2 block">
                  Password
                </label>
                <input
                  type="password"
                  ref={SpasswordRef}
                  className="bg-gray-100 w-full px-4 py-3 rounded focus:outline-blue-500"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div>
                <label className="text-gray-600 text-sm mb-2 block">
                  Confirm Password
                </label>
                <input
                  type="password"
                  ref={confirmPasswordRef}
                  className="bg-gray-100 w-full px-4 py-3 rounded focus:outline-blue-500"
                  placeholder="Confirm password"
                  required
                />
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-12">
              <button  onClick={() => setLogin(true)}className="py-3 px-6 text-sm rounded text-white bg-blue-600 hover:bg-blue-700 " >Sign in </button>
              <button
                type="submit"
                onClick={handlesignup}
                className="py-3 px-6 text-sm rounded text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
