import React from "react";

export default function Cards(props) {

  return (
    <div class="card mt-2" style={{width: "18rem"}}>
      <img src={props.imageUrl} class="card-img-top" alt="..." style={{height: "200px"}} />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">
            {props.des}
        </p>
        <a href="#" class="btn btn-primary">
            See More
        </a>
      </div>
    </div>
  );
}
