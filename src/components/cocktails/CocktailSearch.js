import "./CocktailList.css"

export const CocktailSearch = ({ setterFunction }) => {
    return (
        <div className="cocktailSearch">
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