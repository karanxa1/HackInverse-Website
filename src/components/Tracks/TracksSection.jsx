import React from "react";
import "./TracksSection.css";
import TrackBg from "../../assets/TrackBg.png";

const TracksSection = () => {
  return (
    <div
      className="tracks-section"
      style={{ "--track-bg": `url(${TrackBg})` }}
    >
      <h1 className="tracks-title">TRACKS</h1>

      <div className="tracks-container">
        <div className="track-card">
          <h2 className="track-number">TRACK - 1</h2>
          <h3 className="track-heading">Artificial Intelligence</h3>
          <p className="track-description">
            Building models for prediction, classification, natural language
            processing, or computer vision.
          </p>
        </div>

        <div className="track-card bordered">
          <h2 className="track-number">TRACK - 2</h2>
          <h3 className="track-heading">Web Development</h3>
          <p className="track-description">
            Creating responsive, scalable, and interactive web applications.
          </p>
        </div>

        <div className="track-card">
          <h2 className="track-number">TRACK - 3</h2>
          <h3 className="track-heading">Cybersecurity</h3>
          <p className="track-description">
            Protecting systems and networks through innovative security
            strategies and tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TracksSection;
