import React, { useEffect, useState } from "react";
import "./popup.css"; // Import the external CSS file

const PopupAlert = () => {
  const [isVisible, setIsVisible] = useState(false);

  const closePopup = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    const closeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 25000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
            {/* Close Button inside the card */}
            <button onClick={closePopup} className="popup-close-btn">
              &times;
            </button>

            <div className="popup-marquee">
              <marquee behavior="scroll" direction="left">
                <span className="text-pink-500">Admission is Open ! </span>
                <span className="text-purple-500">
                  Limited seats , Apply Now !
                </span>
                <span className="text-indigo-500">
                  Take Admission for bright future of your child.
                </span>
              </marquee>
            </div>

            <div className="popup-image-container">
              <img src="/popup.jpg" alt="Popup Image" />
            </div>

            <p className="popup-text">
              Take Admission for bright future of your child.
            </p>

            <div className="popup-cta">
              <a href="tel:8085223022">Call Now !</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupAlert;
