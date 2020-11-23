import img_3 from "../img/img_3.jpg"


function Tracklist(props){



    return (
        <div>
          

                        {/*songs start here*/}
                     <div className="cards">
                            <img src={img_3} alt="Artist" className="img_thumb" />
                            <h5><a href="#">{props.name}</a></h5>
                            <h6>Artist: {props.artist}</h6>
                            <p><span>Rating: {props.rating}</span> |<span>Track Id: {props.id}</span> </p>
                        </div> {/*songs ends here*/}


                
        </div>
    )
}
export default Tracklist;