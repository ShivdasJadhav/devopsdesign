import React from "react";
import './App.css';
import './assets/css/output.css';
import Prising from "./components/Pricing";
import Main from "./components/Main"
import Services from "./components/Services";
import Review from "./components/Review";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
function App(){
	// bg-gradient-to-br from-blue-300 to-purple-300
	return(
	<div className="mx-auto bg-gray-400">
	<Main/>
	<Services/>
	<Review/>
	<Prising/>
	<Newsletter/>
	<Footer/>
	</div>
	);
}
export default App;

