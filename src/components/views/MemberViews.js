import { Outlet, Route, Routes } from "react-router-dom"
import { BourbonList } from "../bourbons/BourbonList"
import { CocktailList } from "../cocktails/CocktailList"
import { DistilleryList } from "../distilleries/DistilleryList"
import { AddBourbon } from "../members/AddBourbon"
import { AddCocktail } from "../members/AddCocktail"
import { AddDistillery } from "../members/AddDistillery"
import { EditBourbon } from "../members/EditBourbon"
import { EditCocktail } from "../members/EditCocktail"
import { EditDistillery } from "../members/EditDistillery"
import { MembersPage } from "../members/MembersPage"



export const MemberViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>All Things Bourbon</h1>

                    <Outlet />
                </>
            } >

                <Route path="distilleries" element={<DistilleryList />} />
                <Route path = "bourbons" element = {<BourbonList/>}/>
                <Route path = "cocktails" element = {<CocktailList/>}/>
                <Route path = "mybourbons" element = {<MembersPage/>}/>
                <Route path="cocktailstried/add" element={ <AddCocktail /> } />                
                <Route path = "cocktailstried/:cocktailTriedId/edit" element = {<EditCocktail/>}/>
                <Route path="distilleriesvisited/add" element={ <AddDistillery /> } />                
                <Route path = "distilleriesvisited/:distilleryVisitedId/edit" element = {<EditDistillery/>}/>
                <Route path="bourbonstried/add" element={ <AddBourbon /> } /> 
                <Route path = "bourbonstried/:bourbonTriedId/edit" element = {<EditBourbon/>}/>
            </Route>
        </Routes>
    )
}