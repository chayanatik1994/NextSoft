import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedApp = data.find((item) => item.id === Number(id));
        setApp(selectedApp);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading app data:", err);
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-10 items-start">
        <div className="md:w-2/5 w-full">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-72 object-cover rounded-xl"
          />
        </div>

        <div className="md:w-3/5 w-full">
          <h1 className="text-3xl font-bold mb-3">{app.title}</h1>
          <p className="text-gray-600 mb-4">{app.description}</p>
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Downloads:</span>{" "}
              {app.downloads.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Average Rating:</span>{" "}
              {app.ratingAvg.toFixed(1)}
            </p>
          </div>
          <div className="mt-6">
            <button className="px-20 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Install App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
