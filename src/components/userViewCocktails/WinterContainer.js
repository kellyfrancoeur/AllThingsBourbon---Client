import { useState } from "react"
import { WinterCocktails } from "./WinterCocktails"
import { WinterSearch } from "./WinterSearch"



export const WinterContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <WinterSearch setterFunction={setSearchTerms} />
        <WinterCocktails searchTermState={searchTerms} />
    </>
}