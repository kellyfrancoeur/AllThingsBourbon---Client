import { useState } from "react"
import { MemberList } from "./ManageBourbonMembers"
import { MemberSearch } from "./BourbonMemberSearch"



export const MemberContainer =()=>{
    const [searchTerms, setSearchTerms] = useState ("")
    
    return <>
        <MemberSearch setterFunction = {setSearchTerms}/>
        <MemberList searchTermState= {searchTerms}/>
    </>
}