import "./DistilleryList.css"

export const DistillerySearch = ({ setterFunction }) => {
    return (
        <div className="distillerySearch">
            <input id="search"
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
                type="text" placeholder="Enter Search Terms" />
        </div>
    )
}