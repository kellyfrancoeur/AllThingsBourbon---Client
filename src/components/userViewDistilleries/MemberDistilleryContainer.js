import { useState } from "react"
import { MemberDistilleryList } from "./MemberDistilleryList"
import { MemberDistillerySearch } from "./MemberDistillerySearch"




export const MemberDistilleryContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <MemberDistillerySearch setterFunction={setSearchTerms} />
        <MemberDistilleryList searchTermState={searchTerms} />
    </>
}