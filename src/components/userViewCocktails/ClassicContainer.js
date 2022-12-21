import { useState } from "react"
import { ClassicCocktails } from "./ClassicCocktails"
import { ClassicSearch } from "./ClassicSearch"


export const ClassicContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <ClassicSearch setterFunction={setSearchTerms} />
        <ClassicCocktails searchTermState={searchTerms} />
    </>
}