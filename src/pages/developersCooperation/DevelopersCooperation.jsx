import React from "react";
import "./DevelopersCooperation.css";

function DevelopersCooperation() {
  const devCoop = [
    {
      name: "abdul",
      discription: "css for button",
      code: "{color: `red`}",
      img: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/10/Beautiful-Material-Design-Button-UI-Template-In-Pure-CSS.png?fit=425%2C312&ssl=1",
    },
    {
      name: "affaf",
      discription: "css for button",
      code: "{color: `blue`}",
      img: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/10/Beautiful-Material-Design-Button-UI-Template-In-Pure-CSS.png?fit=425%2C312&ssl=1",
    },
    {
      name: "jorge",
      discription: "css for button",
      code: "{color: `green`}",
      img: "https://templateyou.com/wp-content/uploads/2022/01/Bubbly-Button.jpg",
    },
    {
      name: "mouloud",
      discription: "css for button",
      code: "{color: `green`}",
      img: "https://templateyou.com/wp-content/uploads/2022/01/Bubbly-Button.jpg",
    },
    {
      name: "carmen",
      discription: "css for button",
      code: "{color: `green`}",
      img: "https://i.ytimg.com/vi/du0ebhwu6fY/mqdefault.jpg",
    },
  ];
  return (
    <div className="cooperation-card-list">
      {devCoop.map((item, index) => {
        return (
          <div className="cooperation-card">
            <img className="cooperation-card-img" src={item.img} />
            <p>{item.discription}</p>
            <p>Created by: {item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DevelopersCooperation;
