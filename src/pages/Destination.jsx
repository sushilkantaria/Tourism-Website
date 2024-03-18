import React, { useState } from "react";
import "./Destination.css";
import colombo from "../assets/Colombo.jpg";
import galle from "../assets/galle.jpeg";
import yala from "../assets/yala.jpeg";
import kandy from "../assets/kandy.jpeg";
import ella from "../assets/ella.jpeg";
import sigiriya from "../assets/sigiriya.jpeg";
import nuwara from "../assets/nuwara.jpeg";
import anuradha from "../assets/anuradha.jpeg";
import trin from "../assets/trin.jpeg";
import jaffna from "../assets/jaffna.jpeg";
import cb from "../assets/colombobg3.jpeg";
import gb from "../assets/gallebg.jpeg";
import yb from "../assets/yalabg.webp";
import kb from "../assets/kandybg.jpeg";
import eb from "../assets/ellabg.jpeg";
import sb from "../assets/sigiriyabg.jpg";
import nb from "../assets/nuwarabg.jpeg";
import ab from "../assets/anuradhabg.jpeg";
import tb from "../assets/trinbg.jpg";
import jb from "../assets/jaffnabg.png";

const fullScreenData = [
  { id: 1, name: "Colombo", description: "The vibrant capital city, Colombo blends colonial history with modernity. From bustling markets to serene beaches, Colombo offers a rich mix of culture, shopping, and nightlife. Don’t miss the famous Galle Face Green and the bustling Pettah market.", bgImage: cb },
  { id: 2, name: "Galle", description: "Experience the colonial charm of Galle, a UNESCO World Heritage site. Explore the well-preserved Galle Fort, with its cobbled streets, historic Dutch buildings, and stunning ocean views. Galle is also home to lovely beaches, boutique cafes, and art galleries.", bgImage: gb },
  { id: 3, name: "Yala", description: "Explore the diverse wildlife of Yala National Park, one of Sri Lanka's most famous reserves. Known for its leopards, elephants, and exotic birds, Yala offers thrilling safaris and the opportunity to experience the country's natural beauty in a unique way.", bgImage: yb },
  { id: 4, name: "Kandy", description: "The cultural capital of Sri Lanka, Kandy is a city steeped in tradition and history. It’s home to the Temple of the Tooth Relic, a UNESCO World Heritage site. Surrounded by lush hills, Kandy’s serene atmosphere makes it a perfect retreat.", bgImage: kb },
  { id: 5, name: "Ella", description: "A hiking paradise nestled in Sri Lanka's hill country, Ella offers breathtaking views, waterfalls, and a peaceful atmosphere. Popular hikes like Ella Rock and the Nine Arches Bridge provide an immersive experience in nature, while the town is a haven for relaxation.", bgImage: eb },
  { id: 6, name: "Sigiriya", description: "Climb the iconic Lion Rock of Sigiriya, an ancient rock fortress and UNESCO World Heritage site. The journey to the top rewards visitors with panoramic views and insight into Sri Lanka’s rich history, while the surrounding gardens and frescoes are equally impressive.", bgImage: sb },
  { id: 7, name: "Nuwara Eliya", description: "Known as 'Little England,' Nuwara Eliya is a charming hill station in the heart of Sri Lanka’s tea country. With its cool climate, colonial architecture, and lush tea plantations, it’s a refreshing escape from the tropical heat..", bgImage: nb },
  { id: 8, name: "Anuradhapura", description: "Step back in time in Anuradhapura, one of Sri Lanka's ancient capitals and a UNESCO World Heritage site. Home to sacred Buddhist sites, including the famous Sri Maha Bodhi tree and the Ruwanwelisaya stupa, it offers a glimpse into the island’s ancient civilization.", bgImage: ab },
  { id: 9, name: "Trincomalee", description: "Trincomalee, located on the northeastern coast, is known for its pristine beaches and crystal-clear waters. Visit the famous Koneswaram Temple, explore Fort Frederick, or relax on the beautiful Nilaveli and Uppuveli beaches for an unforgettable coastal experience.", bgImage: tb },
  { id: 10, name: "Jaffna", description: "Discover the northern charm of Jaffna, a place rich in Tamil culture and history. Explore the ancient Nallur Kandaswamy Temple, Jaffna Fort, and nearby islands. With its unique cuisine and warm hospitality, Jaffna offers an authentic Sri Lankan experience off the beaten path.", bgImage: jb },
];

const cardData = [
  { id: 1, name: "Colombo", description: "Card content for Colombo.", bgImage: colombo },
  { id: 2, name: "Galle", description: "Card content for Galle.", bgImage: galle },
  { id: 3, name: "Yala", description: "Card content for Yala.", bgImage: yala },
  { id: 4, name: "Kandy", description: "Card content for Kandy.", bgImage: kandy },
  { id: 5, name: "Ella", description: "Card content for Ella.", bgImage: ella },
  { id: 6, name: "Sigiriya", description: "Card content for Sigiriya.", bgImage: sigiriya },
  { id: 7, name: "Nuwara Eliya", description: "Card content for Nuwara Eliya.", bgImage: nuwara },
  { id: 8, name: "Anuradhapura", description: "Card content for Anuradhapura.", bgImage: anuradha },
  { id: 9, name: "Trincomalee", description: "Card content for Trincomalee.", bgImage: trin },
  { id: 10, name: "Jaffna", description: "Card content for Jaffna.", bgImage: jaffna },
];

const Destinations = () => {
  const [activeId, setActiveId] = useState(1);

  const reorderedCards = cardData
    .slice(activeId - 1)
    .concat(cardData.slice(0, activeId - 1));

  const handleNext = () => {
    setActiveId((prev) => (prev === fullScreenData.length ? 1 : prev + 1));
  };

  const handlePrevious = () => {
    setActiveId((prev) => (prev === 1 ? fullScreenData.length : prev - 1));
  };

  return (
    <div
      className="destinations-container"
      style={{
        backgroundImage: `url(${fullScreenData.find((item) => item.id === activeId).bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="info-section">
        <h1 className="info-section-heading">{fullScreenData.find((item) => item.id === activeId).name}</h1>
        <p>{fullScreenData.find((item) => item.id === activeId).description}</p>
      </div>
      <div className="carousel">
        {reorderedCards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.id === activeId ? "active" : ""}`}
            style={{
              backgroundImage: `url(${card.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => setActiveId(card.id)}
          >
            <div className="card-content">
              <h2>{card.name}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrevious} className="control-button">Previous</button>
        <span className="card-counter">{activeId} / {cardData.length}</span>
        <button onClick={handleNext} className="control-button">Next</button>
      </div>
    </div>
  );
};

export default Destinations;
