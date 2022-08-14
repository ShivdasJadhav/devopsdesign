import React from "react";
import './App.css';
import Contact from "./components/Contact";
import Header from "./components/Header";
import Prising from "./components/Pricing";
import Main from "./components/Main"
import About from "./components/About";
function App(){
	return(
	<>
	<Header/>
	<Main/>
	<About/>
	<Prising/>
	<Contact/>
	</>
	);
}
export default App;