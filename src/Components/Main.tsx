import React, { useState } from "react";
import Item from "./Item";
export function Main() {
  let item_list = [
    {
      id: 1,
      title: "candy",
      img: "https://cdn.cashcow.co.il/images/a01300fb-fb01-401a-aebc-1ebd6c43c284.jpg",
    },
    {
      id: 2,
      title: "candy",
      img: "https://d3m9l0v76dty0.cloudfront.net/system/photos/2522434/original/362d4e9349c224e26f1048e2a70c1a06.jpg",
    },
    {
      id: 3,
      title: "candy",
      img: "https://kanyonmamtakim.co.il/wp-content/uploads/2024/11/%D7%92%D7%9C-%D7%97%D7%9E%D7%95%D7%A5-%D7%91%D7%98%D7%A2%D7%9D-%D7%A4%D7%98%D7%9C-.png",
    },
    {
      id: 4,
      title: "candy",
      img: "https://cdna.wobily.com/images/106c489c-4bb6-4e1f-bd8c-94a2fcf12afa_500.jpg",
    },
    {
      id: 5,
      title: " candy",
      img: "https://www.he-she.co.il/media/catalog/product/cache/73e8520368cebcf6b97f868580ec92ed/h/e/heshe4104126.jpg",
    },
    {
      id: 6,
      title: "candy",
      img: "https://kfargiladi.co.il/460149_3924.jpg",
    },
  ];
  return (
    <div className="main">
      {item_list.map((item) => (
        <Item key={item.id} title={item.title} img={item.img} />
      ))}
    </div>
  );
}
