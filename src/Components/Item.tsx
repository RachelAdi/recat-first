import React, { useState } from "react";

interface cardItem {
  title: string;
  img: string;
}

export default function Item(props: cardItem) {
  return (
    <div className="card_item">
      <img src={props.img} alt="a" />
      <h1>{props.title}</h1>
    </div>
  );
}
