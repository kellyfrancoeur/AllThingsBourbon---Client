import { Outlet, Route, Routes } from "react-router-dom"
import { BourbonList } from "../bourbons/BourbonList"
import { CocktailList } from "../cocktails/CocktailList"
import { DistilleryList } from "../distilleries/DistilleryList"



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
            </Route>
        </Routes>
    )
}