const StudentAchieved = ({ image, title, descriptions, isFacility }) => {
  return (
    <div className="oneAchivementCard">
      <img
        src={image}
        alt="not found"
        className={isFacility ? "facilityimage" : "achievedImage"}
      />
      <h4 className="AchievedTitle">{title}</h4>
      <p className="AchievedDesc"> {descriptions} </p>
    </div>
  );
};
export default StudentAchieved;
