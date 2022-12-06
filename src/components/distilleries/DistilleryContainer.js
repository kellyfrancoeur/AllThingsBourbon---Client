import { useState } from "react"
import { DistilleryList } from "./DistilleryList"
import { DistillerySearch } from "./DistillerySearch"



export const DistilleryContainer =()=>{
    const [searchTerms, setSearchTerms] = useState ("")
    
    return <>
        <DistillerySearch setterFunction = {setSearchTerms}/>
        <DistilleryList searchTermState= {searchTerms}/>
    </>
}