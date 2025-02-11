import React from "react";
import Card from "./Card.jsx"
//create your first component
const Home = () => {
	return (
		<div class="container-fluid" style={{ maxWidth: "80rem" }}>
			<div class="jumbotron jumbotron-fluid bg-light p-4" >
				<div class="container">
					<h1 class="display-4">A Warm Welcome</h1>
					<p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam suscipit similique quaerat tempora excepturi laborum doloremque nihil quia possimus vitae, doloribus temporibus quos, est maiores hic a nobis sunt nesciunt!</p>
				</div>
				<a href="#" class="btn btn-primary my-3">
                    Call to action!
                </a>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-3 col-sm-6 col-12 mb-4"><Card /></div>
				<div class="col-md-3 col-sm-6 col-12 mb-4"><Card /></div>
				<div class="col-md-3 col-sm-6 col-12 mb-4"><Card /></div>
				<div class="col-md-3 col-sm-6 col-12 mb-4"><Card /></div>
			</div>
		</div>
		
	);
};

export default Home;