import { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-lg text-center mx-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome To Paradise Nursery</h1>
          <p className="text-xl font-light italic text-gray-300 mb-6">Where Green Meets Serenity</p>
          <p className="text-md md:text-lg text-gray-200 mb-6">
            At Paradise Nursery, we are passionate about bringing greenery to your life. Our goal is to provide a wide
            range of high-quality plants that not only beautify your surroundings but also contribute to a healthier and
            more peaceful environment.
          </p>
          <button 
            onClick={handleGetStartedClick}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded transition duration-300 mb-6">
            Get Started
          </button>
          <AboutUs />
        </div>
      ) : (
        <div className="w-full">
          <ProductList />
        </div>
      )}
    </div>
  );
}

export default App;
