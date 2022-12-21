import { useState } from "react"
import { SmallSingleBourbons } from "./SmallSingle"
import { SmallSingleSearch } from "./SmallSingleSearch"


export const SmallSingleContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <SmallSingleSearch setterFunction={setSearchTerms} />
        <SmallSingleBourbons searchTermState={searchTerms} />
    </>
}