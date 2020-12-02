
import { useState } from "react"

import styled from "styled-components"

function Lyrics(props) {


  const [Open, setOpen] = useState('false')



  const displayBlock = () => {
    setOpen(!Open)
  }




  return (

    <div>

      <button onClick={displayBlock} id="myBtn"  >Display Lyrics</button>

      {/* The Modal */}
      <Container className={Open ? 'modal' : 'show-modal'}  >

        {/* Modal content*/}
        <div className={`modal-content ${Open ? 'modal' : 'show-modal'} `} >
          <span className="close" onClick={displayBlock}>&times;</span>
          <h3>Tracks Lyrics</h3>
          <h2>{props.id}</h2>
          <div >{props.lyrics}</div>
        </div>

      </Container>
    </div>

  )
}
export default Lyrics;




const Container = styled.div`
 
  position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    color: #000000;


h3{
    color: #000000;
  }

  .modal{
     display: none; /* Hidden by default */
  
  }

  .show-Modal{
    display: block;
  }
  `