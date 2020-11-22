import {useState, useEffect} from "react"


function Search(){

    let [state, setValue] = useState("Chioma Jesus")

   

    function search(event){
        setValue((state)=>{
            console.log('rendered')
            return state = event.target.value
        })
    }

    return(
        <div className="search container">
            <input type="text" name="search" value={state}  onInput={search}/>
            <p>{state}</p>
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