import React from "react";

const Card = () => {
    return (
        <div class="card border" style={{ width: "18rem" }}>
            <img src="https://dummyimage.com/500x325" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">Card Title</h5>
                <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                </p>
            </div>
            <div class="d-flex justify-content-center bg-light border-top py-3">
                <a href="#" class="btn btn-primary">
                    Find Out More
                </a>
            </div>
            
        </div>
    );
};

export default Card;