import React from "react";
import "./DevelopersCooperation.css";
import { useState } from "react";

function DevelopersCooperationCard({ item }) {
  const [showCard, setShowCard] = useState(true);

  const showDiscription = () => {
    return (
      <div>
        <img className="cooperation-card-img" src={item.img} />
        <p>{item.discription}</p>
        <p>Created by: {item.name}</p>
        <button
          onClick={() => {
            setShowCard(!showCard);
          }}
        >
          Check It Out
        </button>
      </div>
    );
  };

  const showContent = () => {
    return (
      <div>
        <p>{item.code}</p>
        {/* {if(item.links !== []){
            console.log('d')
        }} */}
        <a href="">Link to recorse</a>
      </div>
    );
  };

  return <div>{showCard ? showDiscription() : showContent()}</div>;
}

export default DevelopersCooperationCard;
