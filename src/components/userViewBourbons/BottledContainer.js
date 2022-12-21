import { useState } from "react"
import { BottledBourbons } from "./Bottled"
import { BottledSearch } from "./BottledSearch"


export const BottledContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <BottledSearch setterFunction={setSearchTerms} />
        <BottledBourbons searchTermState={searchTerms} />
    </>
}