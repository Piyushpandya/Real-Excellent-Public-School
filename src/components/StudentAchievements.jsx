import StudentAchieved from "./StudentAchieved";
const StudentAchievements = () => {
  const achievementData = [
    {
      id: 1,
      image: "/photo4.jpg",
      title: "Top Scorer in Class",
      descriptions:
        "Piyush Pandya scored the highest marks in his class, demonstrating exceptional understanding and dedication.",
    },
    {
      id: 2,
      image: "/award.jpg",
      title: "Top Scorer in Class",
      descriptions:
        "Piyush Pandya scored the highest marks in his class, demonstrating exceptional understanding and dedication.",
    },
    {
      id: 3,
      image: "/sports.jpg",
      title: "Top Scorer in Class",
      descriptions:
        "Piyush Pandya scored the highest marks in his class, demonstrating exceptional understanding and dedication.",
    },
  ];
  return (
    <div id="achievements" className="achievements">
      <div className="achieveheaddiv">
        <h2 className="AchieveHeading">Students Achievements</h2>
      </div>
      <div className="achievements-grid">
        {achievementData.map((card) => (
          <StudentAchieved
            key={card.id}
            image={card.image}
            title={card.title}
            descriptions={card.descriptions}
          />
        ))}
      </div>
    </div>
  );
};
export default StudentAchievements;
