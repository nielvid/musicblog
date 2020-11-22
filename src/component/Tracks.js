import thumbs from "../img/thumbs.jpg"




function Tracks(props){

    

    return (
        <div>
       
            <div className="tracks">
                <h3>Tracks</h3>
                <div className="m-thumbs">
                    <div className="top_charts">
                    <div className="thumbs_holder">


                    
                    {/*image-thumbnail start*/}
                        <div className="call_to_action">

                        <div className="thumbs tracks_thumbs">
                        <img src={thumbs} alt="thumbs" />
                        <div>
                        <h4><a href="#">{props.tracks}</a></h4>
                        <h5><a href="#">{props.tracks}</a></h5>
                            <h6>Artist: {props.tracks}</h6>
                            <p><span>Rating: {props.tracks}</span> |<span>Track Id: {props.tracks}</span> </p>
                       
                        </div>
                        
                        </div>

                        <div className="user-action">
                            <a href="#">Lyrics</a>
                            <a href="#">Share</a>
                        </div>

                        </div>
                       {/*image-thumbnail ends*/}

                       
                       
                       </div>
                      
                        

                    </div>
                </div>
               
            </div>
            </div>
        
    )
}
export default Tracks;