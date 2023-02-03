import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import dark from "../assets/darkbg.jpg";

function SignIn() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleForm = (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      firstname,
      lastname,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    e.preventDefault();
    // on créé et on redirige
    fetch("http://localhost:5000/api/register", requestOptions)
      .then(() => {
        navigate("/login");
      })
      .catch(console.error);
  };

  return (
    <form onSubmit={handleForm}>
      <div
        className=" flex flex-col justify-center h-screen w-screen bg-gray-900bg-cover bg-center"
        style={{ backgroundImage: `url(${dark})` }}
      >
        <h1 className="text-3xl text-center text-white">Créez votre compte</h1>
        <div className="mt-16 mx-12  bg-gray-800 rounded-lg py-4 px-4 h-1/2 md:w-1/4 md:mx-auto">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="md:mt-12">
              <label htmlFor="Nom" className="block font-medium text-sm mb-2">
                Nom
              </label>
              <input
                onChange={(e) => setLastname(e.target.value)}
                id="lestname"
                type="text"
                required
                pattern=".+"
                placeholder="Nom"
                className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg p-4 w-full h-10"
              />
            </div>
            <div>
              <label
                htmlFor="Prénom"
                className="block font-medium text-sm mb-2"
              >
                Prénom{" "}
              </label>
              <input
                onChange={(e) => setFirstname(e.target.value)}
                id="prénom"
                type="text"
                required
                pattern=".+"
                placeholder="Prénom"
                className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg  p-4 w-full h-10 mb-6"
              />
            </div>
            <div>
              <label htmlFor="Email" className="block font-medium text-sm mb-2">
                Email{" "}
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="e-mail"
                type="email"
                required
                pattern=".+"
                placeholder="E-mail"
                className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg  p-4 w-full h-10 mb-6"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-medium text-sm mb-2"
              >
                Mot de passe
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                required
                pattern=".+"
                placeholder="Mot de passe"
                className=" border-gray-400 bg-gray-100 rounded-bl-lg rounded-br-lg  p-4 w-full h-10 mb-6"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="h-14 w-1/2 md:w-1/6 mt-4 bg-green-600 opacity-90 hover:opacity-100 hover:text-white  text-white  rounded-lg hover:scale-105 duration-1000"
          >
            Inscription
          </button>
        </div>
        <div className="mt-8">
          {" "}
          <Navbar />
        </div>
      </div>
    </form>
  );
}

export default SignIn;
