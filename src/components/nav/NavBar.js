import { StaffNav } from "./StaffNav"
import { MemberNav } from "./MemberNav"
import "./NavBar.css"

export const NavBar = () => {
    const localBourbonUser = localStorage.getItem("bourbon_user")
	const bourbonUserObject = JSON.parse(localBourbonUser)
	
	if(bourbonUserObject.staff){
		return <StaffNav/>
	}
		else{
	return <MemberNav/>
	}
}

