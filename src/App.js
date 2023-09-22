import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Index from "./Pages/Index";
import ImageGallery from "./Pages/ImageGallery"
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} /> 
          <Route path="/gallery" element={<ImageGallery />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
