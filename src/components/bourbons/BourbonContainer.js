import { useState } from "react"
import { BourbonList } from "./BourbonList"
import { BourbonSearch } from "./BourbonSearch"



export const BourbonContainer =()=>{
    const [searchTerms, setSearchTerms] = useState ("")
    
    return <>
        <BourbonSearch setterFunction = {setSearchTerms}/>
        <BourbonList searchTermState= {searchTerms}/>
    </>
}