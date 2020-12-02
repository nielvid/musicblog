import thumbs from "../img/thumbs.jpg"
import { useState, useEffect, useRef } from "react"
import axios from 'axios'
import code from "../package/config"
import Lyrics from "./Lyrics"




function Tracks(props) {

    const [lyric, setLyric] = useState(null)
    let btn = useRef(null)







    const handleClick = (id) => {

        id = btn.current.value
        axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=' + id + '&' + code.pass + code.code)
            .then((response) => {

                setLyric(response.data.message.body.lyrics.lyrics_body)



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
                <Lyrics lyrics={lyric} />

                <div className="user-action">


                    <button onClick={handleClick} ref={btn} value={props.id}>Show Lyrics</button>

                    <button><a href={props.share}>Share</a></button>
                </div>

            </div>


            <hr id="track-divider" />
            {/*image-thumbnail ends*/}



        </div>

    )
}
export default Tracks;


