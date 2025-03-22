import React, { useState } from "react"
import Mealcard from "./mealcard"
const Mainpage = () =>{
    const[state,setState] = useState("")
    const[search,setSearch] = useState()

    const handleinput = (e) =>{
        setSearch(e.target.value)


    }



    const myfunc = async () =>{


        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const jsondata = await get.json()
        // console.log(jsondata.meals)
        setState(jsondata.meals)
    }

    // console.log(state)
 

    return(<>
    <div className="container">
        <div className="searchbar">
            <input type="text" placeholder="🤤🍽️ Enter your dishes 🤤🍽️" onChange={handleinput} />
            <button onClick =  {myfunc}>Search</button>
        </div>
        <div>
        <Mealcard details = {state}/>
        </div>
    </div>
    </>)
}

export default Mainpage;