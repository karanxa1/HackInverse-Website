import './VenueSection.css';
import tvBackground from '../../assets/VenueBg.png';

const Venue = () => {
  return (
    <div 
      className="venue-container"
      style={{ backgroundImage: `url(${tvBackground})` }}
    >
      <div className="venue-content">
        <div className="venue-text">
          <div className="venue-header">
            <h1 className="venue-logo">VENUE</h1>
            <div className="venue-underline"></div>
          </div>
          
          <div className="venue-details">
            <h2 className="venue-name">Vedic Village</h2>
            <address className="venue-address">
              Shikharpur P.O, Bagu, Sikharpur,<br />
              Kolkata, West Bengal 700135
            </address>
          </div>

          <div className="venue-button">
            Get Directions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;