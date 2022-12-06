import { MemberViews } from "./MemberViews"
import { StaffViews } from "./StaffViews"

export const ApplicationViews = () =>{
	const localBourbonUser = localStorage.getItem("bourbon_user")
	const bourbonUserObject = JSON.parse(localBourbonUser)
	
	if(bourbonUserObject.staff){
		return <StaffViews/>
	}
		else{
	return <MemberViews/>
	}
}