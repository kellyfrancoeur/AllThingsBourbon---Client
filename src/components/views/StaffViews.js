import { Route, Routes } from "react-router-dom"
import { UpdateBourbon } from "../bourbons/UpdateBourbon"
import { BourbonList } from "../bourbons/BourbonList"
import { NewBourbonForm } from "../bourbons/NewBourbonForm"
import { DistilleryList } from "../distilleries/DistilleryList"
import { NewDistilleryForm } from "../distilleries/NewDistilleryForm"
import { UpdateDistillery } from "../distilleries/UpdateDistillery"
import { UpdateCocktail } from "../cocktails/UpdateCocktail"
import { CocktailList } from "../cocktails/CocktailList"
import { NewCocktailForm } from "../cocktails/NewCocktailForm"
import { MemberList } from "../users/ManageBourbonMembers"
import { StaffHomePage } from "../homepage/StaffHomePage"
import { BourbonContainer } from "../bourbons/BourbonContainer"



export const StaffViews = () => {
	return (
        <Routes>
                <Route path="/" element={<StaffHomePage/>} />

                <Route path = "distilleries" element = {<DistilleryList/>}/>
				<Route path="distilleries/add" element={ <NewDistilleryForm /> } />
                <Route path = "distilleries/:distilleryId/update" element = {<UpdateDistillery/>}/>
                <Route path = "bourbons" element = {<BourbonContainer/>}/>
				<Route path="bourbons/add" element={ <NewBourbonForm /> } />
                <Route path = "bourbons/:bourbonId/update" element = {<UpdateBourbon/>}/>
                <Route path = "cocktails" element = {<CocktailList/>}/>
				<Route path="cocktails/add" element={ <NewCocktailForm /> } />
                <Route path = "cocktails/:cocktailId/update" element = {<UpdateCocktail/>}/>
                <Route path = "bourbonusers" element = {<MemberList/>}/>

        </Routes>
    )
}