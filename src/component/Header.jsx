
 function Header(){
  

  function toggleMenu(){
    let menu = document.getElementById('x-menu')

    menu.classList.toggle('mobile')
}

    return (
      <div>
        <div className="header">
        <div className="container">
       <div className="top-header">
       <a href="#" id="logo">Nielvid mXic</a>
           <nav className="menu ">
               <a href="#">Home</a>
               <a href="#">Features</a>
               <a href="#">Charts</a>
               <a href="#">Latest</a>
               <a href="#">Lyrics</a>
               <a href="#">Blog</a> 
               </nav>

               <div id="collapse-menu" href="#" onClick={toggleMenu} >MENU
               <nav id="x-menu" className="mobile mobile_menu">
               <a href="#">Home</a>
               <a href="#">Features</a>
               <a href="#">Charts</a>
               <a href="#">Latest</a>
               <a href="#">Lyrics</a>
               <a href="#">Blog</a> 
               </nav>
            </div>
               
       </div> 
       </div>
      

        </div>  
        <div className="title container">
       <h1>Enhancing the experience <br /> of music worldwide.</h1>
       </div>   
      
      </div>
    )
}

export default Header;