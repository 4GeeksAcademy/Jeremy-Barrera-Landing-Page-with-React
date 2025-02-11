import React from "react";
import Card from "./Card.jsx"
import Jumbotron from './Jumbotron.jsx';
//create your first component
const Home = () => {
	return (

		<div class="container-fluid" style={{ maxWidth: "80rem" }}>
			<Jumbotron/>
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