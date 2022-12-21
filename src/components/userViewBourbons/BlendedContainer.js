import { useState } from "react"
import { BlendedBourbons } from "./Blended"
import { BlendedSearch } from "./BlendedSearch"


export const BlendedContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <BlendedSearch setterFunction={setSearchTerms} />
        <BlendedBourbons searchTermState={searchTerms} />
    </>
}