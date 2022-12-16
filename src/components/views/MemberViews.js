import { Route, Routes } from "react-router-dom"
import { BooksOnBourbon } from "../articles/BooksOnBourbon"
import { HistoryOfBourbon } from "../articles/HistoryOfBourbon"
import { HowBourbonIsMade } from "../articles/HowBourbonMade"
import { HowToServe } from "../articles/HowToServe"
import { BourbonList } from "../bourbons/BourbonList"
import { TypesOfBourbons } from "../bourbonTypes/BourbonTypes"
import { DistilleryList } from "../distilleries/DistilleryList"
import { MemberHomePage } from "../homepage/MemberHomePage"
import { AddBourbon } from "../members/AddBourbon"
import { AddCocktail } from "../members/AddCocktail"
import { AddDistillery } from "../members/AddDistillery"
import { EditBourbon } from "../members/EditBourbon"
import { EditCocktail } from "../members/EditCocktail"
import { EditDistillery } from "../members/EditDistillery"
import { MembersPage } from "../members/MembersPage"
import { BlendedBourbons } from "../userViewBourbons/Blended"
import { BottledBourbons } from "../userViewBourbons/Bottled"
import { HighRyeWheatedBourbons } from "../userViewBourbons/HighRyeWheated"
import { KentuckyBourbons } from "../userViewBourbons/Kentucky"
import { SmallSingleBourbons } from "../userViewBourbons/SmallSingle"
import { SourMashBourbons } from "../userViewBourbons/Sour"
import { StandardBourbons } from "../userViewBourbons/Standard"
import { StraightBourbons } from "../userViewBourbons/Straight"
import { ClassicCocktails } from "../userViewCocktails/ClassicCocktails"
import { CreativeTwists } from "../userViewCocktails/CreativeTwists"
import { SummerCocktails } from "../userViewCocktails/SummerCocktails"
import { WinterCocktails } from "../userViewCocktails/WinterCocktails"



export const MemberViews = () => {
    return (
        <Routes>
            <Route path="/" element={<MemberHomePage />} />

            <Route path="distilleries" element={<DistilleryList />} />
            <Route path="bourbons" element={<BourbonList />} />
            <Route path="creativetwist" element={<CreativeTwists />} />
            <Route path="summercocktails" element={<SummerCocktails />} />
            <Route path="wintercocktails" element={<WinterCocktails />} />
            <Route path="classiccocktails" element={<ClassicCocktails />} />
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
            <Route path="standardbourbon" element={<StandardBourbons />} />
            <Route path="kentuckybourbon" element={<KentuckyBourbons />} />
            <Route path="straightbourbon" element={<StraightBourbons />} />
            <Route path="smallsinglebourbon" element={<SmallSingleBourbons />} />
            <Route path="sourmashbourbon" element={<SourMashBourbons />} />
            <Route path="bottledbourbon" element={<BottledBourbons />} />
            <Route path="blendedbourbon" element={<BlendedBourbons />} />
            <Route path="ryewheatedbourbon" element={<HighRyeWheatedBourbons />} />
        </Routes>
    )
}
