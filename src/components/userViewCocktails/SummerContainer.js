import { useState } from "react"
import { SummerCocktails } from "./SummerCocktails"
import { SummerSearch } from "./SummerSearch"



export const SummerContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <SummerSearch setterFunction={setSearchTerms} />
        <SummerCocktails searchTermState={searchTerms} />
    </>
}