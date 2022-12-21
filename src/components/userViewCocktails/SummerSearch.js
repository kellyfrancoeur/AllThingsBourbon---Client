import "./userView.css"

export const SummerSearch = ({ setterFunction }) => {
    return (
        <div className="cocktailSearch">
            <form name="search">
            <input type="text"
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
                className="input"  name="txt" onmouseout="this.value = ''; this.blur();" />
        </form>
        <i class="fas fa-search"></i>
        </div>
    )
}   