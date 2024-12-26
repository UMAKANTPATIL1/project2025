import React, { useState, useEffect } from 'react';

const ScoreCarousels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setCarouselData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
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
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
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
      <div className="relative w-4/5 md:w-3/4 lg:w-4/5 h-[450px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateValue}%)` }}
        >
          {carouselData.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full h-full flex items-center justify-center ${
                index === currentIndex ? 'z-20 scale-100' : 'z-10 scale-90 blur-sm opacity-70'
              } transition-all duration-500 ease-in-out`}
            >
              {/* Carousel Card */}
              <div className="relative w-[600px] md:w-[800px] h-[400px] bg-gray-900 shadow-xl rounded-lg overflow-hidden flex">
                {/* Image Section */}
                <div className="w-1/2 h-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out filter grayscale"
                  />
                </div>

                {/* Text Section */}
                <div className="w-1/2 p-5 flex-col justify-center">
                  <h2 className="text-3xl font-bold text-white text-center">
                    {item.name}
                  </h2>
                  <p className="text-sm font-bold my-6 mb-0 text-white">
                    Previous Score: {item.pre_score}
                  </p>
                  <p className="text-sm font-bold my-3 text-white">
                    Current Score: {item.score_count}
                  </p>
                  <p className="text-sm font-bold my-3 text-white">
                    Previous Team: {item.prev_team}
                  </p>
                  <div>
                    <h3 className="text-sm font-bold text-white my-3">Courses:</h3>
                    <ul className="list-disc pl-5">
                      {item.courses.map((course, idx) => (
                        <li
                          key={idx}
                          className="text-sm font-bold text-white my-2"
                        >
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
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

      {/* Image Thumbnail Navigation */}
      <div className="absolute bottom-8 flex justify-center w-full space-x-3">
        {carouselData.map((item, index) => (
          <div
            key={index}
            className={`w-10 h-10 rounded-full border-4 cursor-pointer transition-all duration-300 ${
              currentIndex === index
                ? 'border-gray-200 scale-110'
                : 'border-transparent '
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-full filter grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreCarousels;
