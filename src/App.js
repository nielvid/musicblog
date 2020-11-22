
import './App.css';
import {useState} from 'react'
import Header from "./component/Header"
import Search from "./component/Search"
import Footer from "./component/Footer"
import Sidebar from "./component/Sidebar"
import Tracklist from "./component/Tracklist"
import Tracks from "./component/Tracks"




function App() {
  const [value, setValue]= useState(null)
  return (
    <div className="page_wrapper">
     <Header />
     <Search />
  
     <div className="container-fluid content-wrap">
     <div className="container">
     <div className="content">
     <Tracklist />
     </div>
     <Tracks />
     </div>
     </div>
    <Footer />
    </div>
  );
}

export default App;

