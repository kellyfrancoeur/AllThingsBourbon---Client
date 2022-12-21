import { useState } from "react"
import { HighRyeSearch } from "./HighRyeSearch"
import { HighRyeWheatedBourbons } from "./HighRyeWheated"


export const HighRyeContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <HighRyeSearch setterFunction={setSearchTerms} />
        <HighRyeWheatedBourbons searchTermState={searchTerms} />
    </>
}