import React, { useState, useEffect } from "react";

const InvestigatorCarousels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setCarouselData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  if (carouselData.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading...
      </div>
    );
  }

  const translateValue = -currentIndex * 100;

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Left Button */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
        onClick={handlePrevious}
      >
        &#8592;
      </button>

      {/* Carousel Container */}
      <div className="relative w-4/5 md:w-3/4 lg:w-4/5 h-[350px] overflow-hidden">

        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateValue}%)` }}
        >
          {carouselData.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full flex items-center justify-center transition-all duration-500"
            >
              {/* Investigator Card */}

              <div className="w-full md:w-3/4 lg:w-[700px] h-[350px] bg-black shadow-xl rounded-lg overflow-hidden flex border border-gray-700 relative">

                {/* Image Section */}
                <div className="flex flex-col items-center justify-center w-[250px] h-full bg-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[200px] h-[200px] object-cover rounded-lg mb-4"
                  />
                  <p className="font-bold text-center text-white border-gray-700  border-2 text-sm  p-2 rounded-md w-[200px] tracking-widest">
                    ID: {item.emp_id}
                  </p>

                </div>

                {/* Text Section */}
                <div className="relative w-2/3 p-4  flex flex-col justify-start">
                  {/* Background Image (Centered in Text Section) */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
                    <img
                      src='/images/WaterMark.png' // Ensure this path is correct
                      alt="Background Logo"
                      className="w-[250px] h-[250px] object-contain opacity-10" // Adjusted size and opacity for watermark
                    />
                  </div>

                  {/* Investigator's Name */}
                  <h1 className="text-3xl font-bold text-white mb-2  text-center tracking-widest">
                    MPC-BUG HUNTERS
                  </h1>

                  <h2 className="text-2xl font-bold text-center text-white mb-2 my-1 z-10 tracking-widest">
                    {item.name}
                  </h2>
                  
                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 z-10 font-bold text-center tracking-widest text-black bg-transparent text-lg border-solid border-2 border-gray-700 my-2 p-3 rounded-md w-full">
                    
                    <div className="flex items-center font-bold justify-center text-sm  text-white">
                      <span className="font-bold text-white">
                        Current Score:
                      </span>{" "}
                      {item.score_count}
                    </div>
                    <div className="flex items-center justify-center text-sm text-white ">
                      <span className="font-bold text-white">
                        Previous Score:
                      </span>{" "}
                      {item.pre_score}
                    </div>
                  </div>

                  
                  {/* <div className="text-sm text-white">
                      <span className="font-semibold text-white">
                        Previous Team:
                      </span>{" "}
                      {item.prev_team}
                    </div> */}
                  {item.courses && item.courses.length > 0 && (
                    <div className="col-span-2 font-bold my-4 tracking-widest text-black bg-transparent text-lg border-solid border-2 border-gray-700 p-3 rounded-md w-full">
                      <h3 className="text-sm font-bold text-white my-1 mb-2">
                        Courses:
                      </h3>
                      <ul className="list-disc pl-5 text-sm text-white">
                        {item.courses.map((course, idx) => (
                          <li key={idx}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-700"
        onClick={handleNext}
      >
        &#8594;
      </button>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-8 flex justify-center w-full space-x-3">
        {carouselData.map((item, index) => (
          <div
            key={index}
            className={`w-10 h-10 rounded-full border-4 cursor-pointer transition-all duration-300 ${currentIndex === index
              ? "border-gray-200 scale-110"
              : "border-transparent"
              }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestigatorCarousels;
