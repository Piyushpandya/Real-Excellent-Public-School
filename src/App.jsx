import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";

import StudentAchievements from "./components/StudentAchievements";
import ParentFeedback from "./components/ParentFeedback";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import FixedCallButton from "./components/FixedCallButton";
import PopupAlert from "./components/PopupAlert";

const App = () => {
  return (
    <>
      <Navbar />
      <PopupAlert />
      <About />
      <FixedCallButton />
      <StudentAchievements />
      <ParentFeedback />
      <Facilities />
      <Footer />
    </>
  );
};
export default App;
