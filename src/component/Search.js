import {useState, useEffect} from "react"


function Search(){

    let [state, setValue] = useState("Search song by title")

   

    function search(event){
        setValue((state)=>{
            console.log('rendered')
            return state = event.target.value
        })
    }

    return(
        <div className="search container">
            <input type="text" name="search" value={state}  onInput={search}/>
           
        <div>

       <audio controls>
  <source src="horse.ogg" type="audio/ogg" />
  <source src="horse.mp3" type="audio/mpeg" />
Your browser does not support the audio element.
</audio>
        
        </div>


        </div>
    )
}

export default Search;