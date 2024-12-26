import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ScoreCarousels from './Page/ScoreCarousels';

function App() {
 
 
    // const carouselData = [
    //   {
    //     image: 'https://via.placseholder.com/600',
    //     title: 'Slide 1',
    //     description: 'This is the first slide description.'
    //   },
    //   {
    //     image: 'https://via.placeholder.com/600',
    //     title: 'Slide 2',
    //     description: 'This is the second slide description.'
    //   },
    //   {
    //     image: 'https://via.placeholder.com/600',
    //     title: 'Slide 3',
    //     description: 'This is the third slide description.'
    //   }
    // ];
    //   const [currentIndex, setCurrentIndex] = useState(0);
    
    //   const handlePrevious = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
    //   };
    
    //   const handleNext = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
    //   };
    
      return (
        // <div className="relative w-full h-screen flex items-center justify-center bg-gray-800 overflow-hidden">
        //   <button
        //     className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        //     onClick={handlePrevious}
        //   >
        //     &#8592;
        //   </button>
    
        //   <div className="w-11/12 md:w-3/4 lg:w-4/4 flex items-center justify-between bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        //     {/* Image Section */}
        //     <div className="w-1/2 h-full">
        //       <img
        //         src={carouselData[currentIndex].image}
        //         alt={carouselData[currentIndex].title}
        //         className="w-full h-full object-cover"
        //       />
        //     </div>
    
        //     {/* Information Section */}
        //     <div className="w-1/2 p-8">
        //       <h2 className="text-2xl font-bold mb-4">{carouselData[currentIndex].title}</h2>
        //       <p className="text-gray-700">{carouselData[currentIndex].description}</p>
        //     </div>
        //   </div>
    
        //   <button
        //     className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        //     onClick={handleNext}
        //   >
        //     &#8594;
        //   </button>
        // </div>
        <ScoreCarousels/>
      );
    };



export default App;
