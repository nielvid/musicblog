import thumbs from "../img/thumbs.jpg"




function Tracks(props){

    

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
                           <button><a href="#">Lyrics</a></button> 
                           <button><a href={props.share}>Share</a></button> 
                        </div>

                        </div>
                        <hr  id="track-divider" />
                       {/*image-thumbnail ends*/}

                       
                    
            </div>
        
    )
}
export default Tracks;