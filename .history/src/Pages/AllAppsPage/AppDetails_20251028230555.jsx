import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import RatingChart from "../../Components/RatingChart"; // import chart
import ratingIcon from "../../assets/icon-ratings.png";
import downloadIcon from "../../assets/icon-downloads.png";
import reviewIcon from "../../assets/icon-review.png";

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

  if (loading) return <p className="text-center mt-10">Loading details...</p>;

  if (!app)
    return (
      <div className="text-center mt-10">
        <p className="text-lg text-gray-600 mb-4">App not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );

  // You can replace this with real rating data from your JSON
  const ratingData = app.ratingData || [
    { name: "5★", count: 120 },
    { name: "4★", count: 80 },
    { name: "3★", count: 40 },
    { name: "2★", count: 15 },
    { name: "1★", count: 5 },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-10 items-start">
        {/* LEFT: APP IMAGE */}
        <div className="md:w-2/5 w-full">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-72 object-cover rounded-xl"
          />
        </div>

        {/* RIGHT: APP INFO */}
        <div className="md:w-3/5 w-full">
          <h1 className="text-3xl font-bold mb-3">{app.title}</h1>
          <p className="text-gray-600 mb-4">{app.description}</p>

          {/* STATS GRID */}
          <div className="grid grid-cols-3 gap-6 mt-8 text-center">
            <div>
              <img
                src={downloadIcon}
                alt="Downloads"
                className="w-8 h-8 mx-auto mb-2"
              />
              <p className="font-semibold">{app.downloads.toLocaleString()}</p>
              <p className="text-gray-500 text-sm">Downloads</p>
            </div>
            <div>
              <img
                src={ratingIcon}
                alt="Average Rating"
                className="w-8 h-8 mx-auto mb-2"
              />
              <p className="font-semibold">{app.ratingAvg.toFixed(1)}</p>
              <p className="text-gray-500 text-sm">Rating</p>
            </div>
            <div>
              <img
                src={reviewIcon}
                alt="Total Reviews"
                className="w-8 h-8 mx-auto mb-2"
              />
              <p className="font-semibold">{app.reviews.toLocaleString()}</p>
              <p className="text-gray-500 text-sm">Reviews</p>
            </div>
          </div>

          {/* INSTALL BUTTON */}
          <div className="mt-8">
            <button className="px-20 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Install App
            </button>
          </div>
        </div>
      </div>

      {/* RATING CHART */}
      <div className="bg-white rounded-2xl mt-10 p-6">
        <h2 className="text-2xl font-semibold mb-4">Rating</h2>
        <RatingChart data={ratingData} />
      </div>
    </div>
  );
};

export default AppDetails;
