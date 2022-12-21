import { useState } from "react"
import { CreativeSearch } from "./CreativeSearch"
import { CreativeTwists } from "./CreativeTwists"



export const CreativeContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <CreativeSearch setterFunction={setSearchTerms} />
        <CreativeTwists searchTermState={searchTerms} />
    </>
}