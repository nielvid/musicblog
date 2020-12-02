import thumbs from "../img/thumbs.jpg"
import { useState, useRef } from "react"
import axios from 'axios'
import code from "../package/config"
//import Lyrics from "./Lyrics"
import styled from "styled-components"




function Tracks(props) {

    const [lyric, setLyric] = useState(null)


    const [Open, setOpen] = useState('false')



    const displayBlock = () => {
        setOpen(!Open)
    }

    let btn = useRef(null)



    const handleClick = (id) => {

        id = btn.current.value
        axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=' + id + '&' + code.pass + code.code)
            .then((response) => {

                setLyric(response.data.message.body.lyrics.lyrics_body)

                setOpen(!Open)

            })
    }


    return (




        <div className="container">


            {/*image-thumbnail start*/}
            <div className="call_to_action">

                <div className="thumbs tracks_thumbs">
                    <img src={thumbs} alt="thumbs" />
                    <div>
                        <h4><a href="/">{props.title}</a></h4>
                        <h5 >{props.id}</h5>
                        <h6>{props.artist}</h6>

                    </div>

                </div>
                {/*<Lyrics lyrics={lyric} />*/}

                <div className="user-action">


                    <button {props.handleClick} ref={btn} id="myBtn" value={props.id}>Show Lyrics</button>



                    {/* The Modal */}
                    <Container className={Open ? 'modal' : 'show-modal'}  >

                        {/* Modal content*/}
                        <Lyrics className={`modal-content ${Open ? 'modal' : 'show-modal'} `} >
                            <span className="close" onClick={displayBlock}>&times;</span>
                            <h3>Tracks Lyrics</h3>
                            <h2>Track Id: {props.id}</h2>
                            <div >{lyric}</div>
                        </Lyrics>

                    </Container>

                    <button><a href={props.share}>Share</a></button>
                </div>

            </div>


            <hr id="track-divider" />
            {/*image-thumbnail ends*/}



        </div>

    )
}
export default Tracks;



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

  .show-modal{
    display: block;
  }
  `

const Lyrics = styled.div`
  width: 80%
  `