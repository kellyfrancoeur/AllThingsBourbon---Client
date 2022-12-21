import { useState } from "react"
import { KentuckyBourbons } from "./Kentucky"
import { KentuckySearch } from "./KentuckySearch"

export const KentuckyContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <KentuckySearch setterFunction={setSearchTerms} />
        <KentuckyBourbons searchTermState={searchTerms} />
    </>
}