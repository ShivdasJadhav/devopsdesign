import React from "react";
import './App.css';
import Contact from "./components/Contact";
import Header from "./components/Header";
import Prising from "./components/Pricing";
import Main from "./components/Main"
function App(){
	return(
	<>
	<Header/>
	<Main/>
	<Prising/>
	<Contact/>
	</>
	);
}
export default App;