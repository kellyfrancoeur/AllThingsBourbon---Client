import { useState } from "react"
import { StraightBourbons } from "./Straight"
import { StraightSearch } from "./StraightSearch"


export const StraightContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <StraightSearch setterFunction={setSearchTerms} />
        <StraightBourbons searchTermState={searchTerms} />
    </>
}