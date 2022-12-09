import { Outlet, Route, Routes } from "react-router-dom"
import { UpdateBourbon } from "../bourbons/UpdateBourbon"
import { BourbonList } from "../bourbons/BourbonList"
import { NewBourbonForm } from "../bourbons/NewBourbonForm"
import { DistilleryList } from "../distilleries/DistilleryList"
import { NewDistilleryForm } from "../distilleries/NewDistilleryForm"
import { UpdateDistillery } from "../distilleries/UpdateDistillery"
import { UpdateCocktail } from "../cocktails/UpdateCocktail"
import { CocktailList } from "../cocktails/CocktailList"
import { NewCocktailForm } from "../cocktails/NewCocktailForm"
import { MemberList } from "../members/ManageBourbonMembers"



export const StaffViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    {/* <h1>All Things Bourbon</h1> */}

                    <Outlet />
                </>
            } >

                <Route path = "distilleries" element = {<DistilleryList/>}/>
				<Route path="distilleries/add" element={ <NewDistilleryForm /> } />
                <Route path = "distilleries/:distilleryId/update" element = {<UpdateDistillery/>}/>
                <Route path = "bourbons" element = {<BourbonList/>}/>
				<Route path="bourbons/add" element={ <NewBourbonForm /> } />
                <Route path = "bourbons/:bourbonId/update" element = {<UpdateBourbon/>}/>
                <Route path = "cocktails" element = {<CocktailList/>}/>
				<Route path="cocktails/add" element={ <NewCocktailForm /> } />
                <Route path = "cocktails/:cocktailId/update" element = {<UpdateCocktail/>}/>
                <Route path = "bourbonusers" element = {<MemberList/>}/>
                
            </Route>
        </Routes>
    )
}