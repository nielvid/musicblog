import img_3 from "../img/img_3.jpg"
import {useState, useEffect} from 'react'
import axios from 'axios'


function Tracklist(){

const [tracks, setTracks] = useState(null)




    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=12&country=us&f_has_lyrics=1&apikey=fabf9d090014865874293c935b2d344b' )
        .then((response)=>{

            setTracks(response.data.message.body.track_list)
            
        }).catch(err=>console.log(err))

        /*
        fetch('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=us&f_has_lyrics=1&apikey=fabf9d090014865874293c935b2d344b')
        .then((res)=>{
             let  data =   res.json()
           return data
        }).then((data)=>{
            setTracks( data.message.body.track_list)
        
            
        
             /* data.map((item)=>{
                  let ul = document.createElement('ul')
                 let li = document.createElement('li')
                    li.innerHTML = item.track.track_id
                    ul.append(li)
                    document.body.append(ul)
              // return item.track.track_id
               
            })
            document.body.append(response)
            
        }).catch(err=>console.log(err))*/




    }, [])

    return (
        <div>
            <div className="main">
                <h2>Track List</h2>
                <div className="trending">
                    <h3>Top Tracks in the USA</h3>
                    <div className="songs">



                        { tracks ? tracks.map((item)=>{ return (
                     <div className="cards">
                            <img src={img_3} alt="Artist" className="img_thumb" />
                            <h5><a href="#">{item.track.track_name}</a></h5>
                            <h6>Artist: {item.track.artist_name}</h6>
                            <p><span>Rating: {item.track.track_rating}</span> |<span>Track Id: {item.track.track_id}</span> </p>
                        </div> )}): <><label for="file">Play above track while you wait!</label>
                                            <progress id="file" value="32" max="100">53%</progress></>}

                    </div>  
                    <div className='btn-div'>
                <button>Browse More</button>
                </div>
                </div>
                
            
            </div>
        </div>
    )
}
export default Tracklist;