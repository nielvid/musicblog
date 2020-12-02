import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './App.css';

import Header from "./component/Header"
import Search from "./component/Search"
import Footer from "./component/Footer"
import code from "./package/config"
import Sidebar from "./component/Sidebar"
import Tracklist from "./component/Tracklist"
import Tracks from "./component/Tracks"
//import Lyrics from "./component/Lyrics"









function App() {




  const [tracks, setTracks] = useState(null)





  useEffect(() => {


    axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=12&country=us&f_has_lyrics=1&' + code.pass + code.code,
      {
        header: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then((response) => {

        setTracks(response.data.message.body.track_list)

      }).catch(err => console.log(err))



  }, [])






  return (
    <div className="page_wrapper">
      <Header />
      <Search />

      <div className="container-fluid content-wrap">
        <div className="container">
          <div className="content">

            <div className="main">
              <h2>Music Chart</h2>
              <div className="trending">
                <h3>Top 12 Tracks in the USA</h3>
                <div className="songs">


                  {tracks ? tracks.map((item) => { return (<Tracklist name={item.track.track_name} artist={item.track.artist_name} rating={item.track.track_rating} id={item.track.track_id} />) })
                    : <><label for="file">Play above track while you wait!</label>
                      <progress id="file" value="32" max="100">53%</progress></>}

                </div>
                <div className='btn-div'>
                  <button>Browse More</button>
                </div>
              </div>
            </div>

          </div>
          <hr />
          <div>
            <div className="tracks">
              <h3>Track List</h3>
              <div className="m-thumbs">
                <div className="top_charts">
                  <div className="thumbs_holder">

                    {tracks && tracks.map((item) => { return <Tracks title={item.track.track_name} id={item.track.track_id} artist={item.track.artist_name} share={item.track.track_share_url} /> })
                    }

                  </div>



                </div>
              </div>

            </div>

          </div>
        </div>
      </div>



      <Footer />
    </div>
  );
}

export default App;

