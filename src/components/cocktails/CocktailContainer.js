import { useState } from "react"
import { CocktailList } from "./CocktailList"
import { CocktailSearch } from "./CocktailSearch"



export const BourbonContainer =()=>{
    const [searchTerms, setSearchTerms] = useState ("")
    
    return <>
        <CocktailSearch setterFunction = {setSearchTerms}/>
        <CocktailList searchTermState= {searchTerms}/>
    </>
}