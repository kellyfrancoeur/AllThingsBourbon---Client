import { useState } from "react"
import { SourMashBourbons } from "./Sour"
import { SourSearch } from "./SourSearch"


export const SourContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <SourSearch setterFunction={setSearchTerms} />
        <SourMashBourbons searchTermState={searchTerms} />
    </>
}