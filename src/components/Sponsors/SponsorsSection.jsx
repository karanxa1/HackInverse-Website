import React from "react";
import "./SponsorsSection.css";
import spontext from "../../assets/sponsors/spontext.png";
import spon1 from "../../assets/sponsors/spon1.png";
import spon2 from "../../assets/sponsors/spon2.png";

const SponsorsSection = () => {
  const sponsors = [
    { id: 1, img: spon1, alt: "Sponsors Top Row" },
    { id: 2, img: spon2, alt: "Sponsors Bottom Row" },
  ];

  return (
    <section className="sponsors-section">
      <div className="sponsors-header" data-aos="fade-in" data-aos-duration="1000">
        <img src={spontext} alt="Our Sponsors" className="sponsors-header-img" />
      </div>
      
      <div className="sponsors-container">
        {sponsors.map((sponsor, index) => (
          <div 
            key={sponsor.id} 
            className="sponsors-image"
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="1000"
          >
            <img src={sponsor.img} alt={sponsor.alt} className="sponsor-img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsSection;

