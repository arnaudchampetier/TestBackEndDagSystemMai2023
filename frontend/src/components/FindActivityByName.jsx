import React, { useEffect, useState } from "react";

function FindActivityByName() {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/activities")
      .then((response) => response.json())
      .then((json) => {
        setDatas(json);
      })
      .catch((error) => console.error(error));
  }, []);

  console.warn("activités récupérées:", datas);

  const handleSearchTerm = (e) => {
    console.warn(e.target.value);
    const { value } = e.target;
    // eslint-disable-next-line no-unused-expressions
    value.length > 1 && setSearchTerm(value);
  };
  console.warn("searchTerm:", searchTerm);

  const filteredActivities = datas.filter((val) => {
    return val.nom.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <div className="flex justify-center items-center py-8  flex-col bg-gray-200 mt-12 mx-48 rounded-xl">
        <h1 className="text-md font-bold mb-6 text-center">
          Rechercher une activité
        </h1>
        <input
          className="w-64 px-4 py-2 rounded-xl border-r-0 bg-blue-200 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Trouver une activité"
          onChange={handleSearchTerm}
        />
      </div>
      {searchTerm.length > 2 && (
        <div>
          {filteredActivities.map((val) => (
            <div
              className="flex justify-center items-center py-8"
              key={val.nom}
            >
              {val.nom}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FindActivityByName;
