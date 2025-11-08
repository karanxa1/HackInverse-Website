import React from "react";
import "./PrizesSection.css";
import prize1 from "../../assets/1st.png";
import prize2 from "../../assets/2nd.png";
import prize3 from "../../assets/3rd.png";
import Bg from "../../assets/Bg.png";

const PrizesSection = () => {
  const prizes = [
    { img: prize2, title: "2nd Prize", text: "coming soon" },
    { img: prize1, title: "1st Prize", text: "coming soon" },
    { img: prize3, title: "3rd Prize", text: "coming soon" },
  ];

  return (
    <section className="prizes-section"
    style={{ "--bg": `url(${Bg})` }}>
      <h1 className="prizes-heading">PRIZES</h1>

      <div className="prizes-container">
        {prizes.map((p, index) => (
          <div className="prize-card" key={index}>
            <img src={p.img} alt={p.title} className="prize-img" />
            <p className="coming-soon">{p.text}</p>
            <h3 className="prize-title">{p.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrizesSection;
