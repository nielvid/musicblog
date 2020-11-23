function Lyrics(props){

    // Get the modal
    var modal = document.getElementById("myModal");
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    const displayBlock = ()=>{
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    const noneDisplay = ()=>{
      modal.style.display = "none";
    }
    
    /* When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    */
    
        return (
            
                <div>
    
    <button  onClick= { displayBlock} id="myBtn" >Display Lyrics</button>
    
    {/* The Modal */}
    <div id="myModal" className="modal">
    
      {/* Modal content*/}
      <div className="modal-content">
        <span onClick={noneDisplay} className="close">&times;</span>
        <h3>Tracks Lyrics</h3>
        <div>{props.lyrics}</div>
      </div>
    
    </div>
    </div>
            
        )
    }
    export default Lyrics;