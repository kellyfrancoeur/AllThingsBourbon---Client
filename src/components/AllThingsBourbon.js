import { Route, Routes } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { StaffRegister } from "./auth/StaffRegister"
import { Authorized } from "./views/Authorized"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./views/ApplicationViews"
import "./AllThingsBourbon.css"


export const AllThingsBourbon = () => {

  return <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/registerstaff" element={<StaffRegister />} />

  <Route path="*" element={
    <Authorized>
      <>
        <NavBar />
        <ApplicationViews />
      </>
    </Authorized>

  } />
</Routes>
  
}
