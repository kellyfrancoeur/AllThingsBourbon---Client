import { Route, Routes } from "react-router-dom"
import { BooksOnBourbon } from "../articles/BooksOnBourbon"
import { HistoryOfBourbon } from "../articles/HistoryOfBourbon"
import { HowBourbonIsMade } from "../articles/HowBourbonMade"
import { HowToServe } from "../articles/HowToServe"
import { BourbonList } from "../bourbons/BourbonList"
import { TypesOfBourbons } from "../bourbonTypes/BourbonTypes"
import { DistilleryContainer } from "../distilleries/DistilleryContainer"
import { MemberHomePage } from "../homepage/MemberHomePage"
import { AddBourbon } from "../members/AddBourbon"
import { AddCocktail } from "../members/AddCocktail"
import { AddDistillery } from "../members/AddDistillery"
import { EditBourbon } from "../members/EditBourbon"
import { EditCocktail } from "../members/EditCocktail"
import { EditDistillery } from "../members/EditDistillery"
import { MembersPage } from "../members/MembersPage"
import { BlendedContainer } from "../userViewBourbons/BlendedContainer"
import { BottledContainer } from "../userViewBourbons/BottledContainer"
import { HighRyeContainer } from "../userViewBourbons/HighRyeContain"
import { KentuckyContainer } from "../userViewBourbons/KentuckyContainer"
import { SmallSingleContainer } from "../userViewBourbons/SmallSingleContainer"
import { SourContainer } from "../userViewBourbons/SourContainer"
import { StraightContainer } from "../userViewBourbons/StraightContainer"
import { ClassicContainer } from "../userViewCocktails/ClassicContainer"
import { CreativeContainer } from "../userViewCocktails/CreativeContainer"
import { SummerContainer } from "../userViewCocktails/SummerContainer"
import { WinterContainer } from "../userViewCocktails/WinterContainer"

 
 
export const MemberViews = () => {
    return (
        <Routes>
            <Route path="/" element={<MemberHomePage />} />

            <Route path="distilleries" element={<DistilleryContainer />} />
            <Route path="bourbons" element={<BourbonList />} />
            <Route path="creativetwist" element={<CreativeContainer />} />
            <Route path="summercocktails" element={<SummerContainer />} />
            <Route path="wintercocktails" element={<WinterContainer />} />
            <Route path="classiccocktails" element={<ClassicContainer />} />
            <Route path="mybourbons" element={<MembersPage />} />
            <Route path="cocktailstried/add" element={<AddCocktail />} />
            <Route path="cocktailstried/:cocktailTriedId/edit" element={<EditCocktail />} />
            <Route path="distilleriesvisited/add" element={<AddDistillery />} />
            <Route path="distilleriesvisited/:distilleryVisitedId/edit" element={<EditDistillery />} />
            <Route path="bourbonstried/add" element={<AddBourbon />} />
            <Route path="bourbonstried/:bourbonTriedId/edit" element={<EditBourbon />} />
            <Route path="bourbontypes" element={<TypesOfBourbons />} />
            <Route path="history" element={<HistoryOfBourbon />} />
            <Route path="howitsmade" element={<HowBourbonIsMade />} />
            <Route path="howtoserve" element={<HowToServe />} />
            <Route path="booksonbourbon" element={<BooksOnBourbon />} />
            <Route path="kentuckybourbon" element={<KentuckyContainer />} />
            <Route path="straightbourbon" element={<StraightContainer />} />
            <Route path="smallsinglebourbon" element={<SmallSingleContainer />} />
            <Route path="sourmashbourbon" element={<SourContainer />} />
            <Route path="bottledbourbon" element={<BottledContainer />} />
            <Route path="blendedbourbon" element={<BlendedContainer />} />
            <Route path="ryewheatedbourbon" element={<HighRyeContainer />} />
        </Routes>
    )
}
