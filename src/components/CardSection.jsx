import React from "react";
import Cards from "./Cards";
import product from "./product";

export default function CardSection(props) {


  return (
    <>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-around align-items-center ">
          {props.data.map((items, index) => {
            return (
              <>
                <Cards
                  title={items.title}
                  des={items.des}
                  imageUrl={items.imageUrl}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
