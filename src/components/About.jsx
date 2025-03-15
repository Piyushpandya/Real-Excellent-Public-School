const About = () => {
  return (
    <div id="about" className="about">
      <div className="upper-about-image">
        <img src="slider1.jpg" alt="image not found" className="about-image" />
      </div>
      <div className="lower-about-content">
        <p className="about-intro">Very proud to introduce</p>
        <h2 className="about-heading">Excellent Public School</h2>
        <p className="about-school">
          An excellent public school provides a nurturing and inclusive
          environment where every student is encouraged to reach their full
          potential. It offers a high-quality education with dedicated teachers,
          modern facilities, and diverse extracurricular activities. Strong
          community involvement and a focus on holistic development ensure that
          students not only excel academically but also grow emotionally,
          socially, and creatively.
        </p>

        <button className="about-btn">Read more.</button>
      </div>
    </div>
  );
};
export default About;
