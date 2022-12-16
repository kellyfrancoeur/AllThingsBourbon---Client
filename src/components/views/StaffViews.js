import { Route, Routes } from "react-router-dom"
import { UpdateBourbon } from "../bourbons/UpdateBourbon"
import { NewBourbonForm } from "../bourbons/NewBourbonForm"
import { NewDistilleryForm } from "../distilleries/NewDistilleryForm"
import { UpdateDistillery } from "../distilleries/UpdateDistillery"
import { UpdateCocktail } from "../cocktails/UpdateCocktail"
import { NewCocktailForm } from "../cocktails/NewCocktailForm"
import { StaffHomePage } from "../homepage/StaffHomePage"
import { BourbonContainer } from "../bourbons/BourbonContainer"
import { CocktailContainer } from "../cocktails/CocktailContainer"
import { DistilleryContainer } from "../distilleries/DistilleryContainer"
import { MemberContainer } from "../users/BourbonMemberContainer"



export const StaffViews = () => {
    return (
        <Routes>
            <Route path="/" element={<StaffHomePage />} />

            <Route path="distilleries" element={<DistilleryContainer />} />
            <Route path="distilleries/add" element={<NewDistilleryForm />} />
            <Route path="distilleries/:distilleryId/update" element={<UpdateDistillery />} />
            <Route path="bourbons" element={<BourbonContainer />} />
            <Route path="bourbons/add" element={<NewBourbonForm />} />
            <Route path="bourbons/:bourbonId/update" element={<UpdateBourbon />} />
            <Route path="cocktails" element={<CocktailContainer />} />
            <Route path="cocktails/add" element={<NewCocktailForm />} />
            <Route path="cocktails/:cocktailId/update" element={<UpdateCocktail />} />
            <Route path="bourbonusers" element={<MemberContainer />} />

        </Routes>
    )
}