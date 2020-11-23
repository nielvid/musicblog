import {useState, useEffect} from "react"


function Search(){

    let [state, setValue] = useState('Search music')

   

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
  <source src="https://www.jango.com/stations/312434100/tunein"  />
  <source src="https://www.jango.com/stations/312434100/tunein"  />
Your browser does not support the audio element.
</audio>
        
        </div>


        </div>
    )
}

export default Search;