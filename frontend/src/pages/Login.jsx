import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

import Navbar from "../components/Navbar";
import { useCurrentUserContext } from "../contexts/UserContext";
import dark from "../assets/darkbg.jpg";

const { VITE_BACKEND_URL } = import.meta.env;

function Login() {
  const { setUser, setToken } = useCurrentUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const notifyError = () => {
    toast("Vos informations de connexion sont incorrectes", {
      icon: "🚫",
    });
  };

  const notifySuccess = (firstname) => {
    toast(`Bonjour ${firstname}!`, {
      icon: "👋",
    });
  };

  const notifySuccessAdmin = (firstname) => {
    toast(`Bonjour cher admin ${firstname}!`, {
      icon: "👋",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      /* It's an object that will be sent in the body of request */
      const body = JSON.stringify({
        email,
        password,
      });

      /* function push user and token in the localstorage */
      const response = await fetch(`${VITE_BACKEND_URL}/api/login`, {
        method: "POST",
        redirect: "follow",
        body,
        headers: myHeaders,
      });
      /* then I get the response to json. If response == 401 console log error else .then result */
      if (response.status !== 401) {
        const result = await response.json();
        if (result.token) {
          setUser(result.user);
          setToken(result.token);
          if (result.user.isAdmin === 1) {
            console.warn("L'utilisateur est administrateur");
            notifySuccessAdmin(result.user.firstname);
            setTimeout(() => {
              navigate("/dashboard");
            }, 1500);
          } else {
            console.warn("L'utilisateur n'est pas administrateur");

            notifySuccess(result.user.firstname);
            setTimeout(() => {
              navigate("/offers");
            }, 1500);
          }
        } else {
          notifyError();
        }
      } else {
        notifyError();
        setPassword("");
      }
    } catch (error) {
      console.warn(error);
      notifyError();
    }
  };
  const onClick = () => {
    localStorage.clear();
    setUser({});
    navigate("/");
  };

  return (
    <div
      className=" flex flex-col justify-center  h-screen w-screen bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${dark})` }}
    >
      <h1 className="text-center text-white text-3xl">Connectez-vous</h1>
      <div className="flex justify-center mt-12">
        <div className="mt-16 mx-12 flex flex-col rounded-lg bg-gray-800 py-4 px-4 h-1/2 md:w-1/4 md:h-full md:mx-auto">
          <Toaster position="top-center" reverseOrder />
          <form onSubmit={handleSubmit} className="m-auto mt-5">
            <div className="mb-3">
              <p>Adresse e-mail</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email"
                className="form-control border-solid border-black border-2 rounded-lg h-10 p-4"
                id="email"
              />
            </div>
            <div className="mb-3">
              <p>Mot de passe</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="mot de passe"
                className="form-control border-solid border-black border-2 rounded-lg h-10 p-4 mb-24"
                id="password"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                type="submit"
                className="h-14 w-2/5 mr-2 mb-8 bg-green-600  hover:opacity-100 hover:text-white  text-white border-solid border-2 rounded-lg hover:scale-105 duration-300 border-black"
              >
                Connexion
              </button>
              <button
                type="button"
                onClick={onClick}
                className="bg-black h-14 w-2/5  text-white text-center font-medium rounded-lg  px-1 py-1 md:w-1/2 hover:scale-105 duration-300 border-black hover:opacity-100 border-2"
              >
                Déconnexion
              </button>{" "}
            </div>
          </form>
        </div>
      </div>
      <div className="mt-44">
        <Navbar />
      </div>
    </div>
  );
}
export default Login;
