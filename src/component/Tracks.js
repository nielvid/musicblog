import thumbs from "../img/thumbs.jpg"
import {useState, useEffect} from "react"
import axios from 'axios'
import code from "../package/config"
import Lyrics from "./Lyrics"





function Tracks(props){

    const [lyrics, setLyrics] = useState(props.id)
       
        
    useEffect(() => {
        
       
        axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id='+props.id+'&'+code.pass+code.code)
        .then((response)=>{

           let text = response.data.message.body.lyrics.lyrics_body
           

            setLyrics(text)
            
        }).catch(err=>console.log(err))
        
        
    }, [])

    
   
    

    return (
        <div className="container">
       
            


                    
                    {/*image-thumbnail start*/}
                        <div className="call_to_action">

                        <div className="thumbs tracks_thumbs">
                        <img src={thumbs} alt="thumbs" />
                        <div>
                        <h4><a href="#">{props.title}</a></h4>
                        <h5><a href="#"> Track Id: {props.id}</a></h5>
                            <h6>{props.artist}</h6>
                       
                        </div>
                        
                        </div>
                    

                        <div className="user-action">
                       
                          {/* <button onClick={handleClick} >Show Lyrics</button>*/} 
                            <Lyrics  lyrics = {lyrics}/>
                           <button><a href={props.share}>Share</a></button> 
                        </div>

                        </div>
                        <hr  id="track-divider" />
                       {/*image-thumbnail ends*/}

                       
                    
            </div>
        
    )
}
export default Tracks;


function Btn(clickAlert){

    return(
        <button  className="display_lyrics" >Lyrics</button> 
    )
}