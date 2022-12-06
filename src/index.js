import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AllThingsBourbon } from "./components/AllThingsBourbon"
import "./index.css"


const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <AllThingsBourbon />
    </BrowserRouter>
)

