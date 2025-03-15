import { useState } from "react";
import StudentAchieved from "./StudentAchieved";

const Facilities = () => {
  const schoolFacilities = [
    {
      id: 1,
      image: "/swimmingpool.jpg",
      title: "Swimming Pool",
      descriptions:
        "Large and clean Swimming pool for learning swimming for students.",
    },
    {
      id: 2,
      image: "/annualfunction.jpg",
      title: "Annual Function",
      descriptions:
        "Students participated in various sports and games, showing great enthusiasm and teamwork.",
    },
    {
      id: 3,
      image: "/republic.jpg",
      title: "Events",
      descriptions:
        "Students showcased innovative projects, demonstrating their creativity and scientific skills.",
    },
    {
      id: 4,
      image: "/sports.jpg",
      title: "Sports",
      descriptions:
        "Our playground provides a safe and fun space for students to engage in outdoor activities.",
    },
    {
      id: 5,
      image: "/culture.jpg",
      title: "Cultural Activities",
      descriptions:
        "Students actively participate in cultural programs, enhancing their creativity and confidence.",
    },
    {
      id: 6,
      image: "/artgallery.jpg",
      title: "Art Gallery",
      descriptions:
        "Our students' artistic creations are showcased in the school’s art gallery.",
    },
  ];
  const [isFacility, setFacility] = useState(true);
  return (
    <div id="facility" className="facility-section">
      <h2 className="AchieveHeading">School Activities and Facilities</h2>
      <div className="facilities">
        {schoolFacilities.map((card) => (
          <StudentAchieved
            key={card.id}
            isFacility={isFacility}
            image={card.image}
            title={card.title}
            descriptions={card.descriptions}
          />
        ))}
      </div>
    </div>
  );
};
export default Facilities;
