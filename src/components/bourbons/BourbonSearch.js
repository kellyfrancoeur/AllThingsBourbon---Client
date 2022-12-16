import "./BourbonList.css"

export const BourbonSearch = ({ setterFunction }) => {
    return (
        <div className="bourbonSearch">
            <input id="search"
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
                type="text" placeholder="Search Bourbons" />
        </div>
    )
}