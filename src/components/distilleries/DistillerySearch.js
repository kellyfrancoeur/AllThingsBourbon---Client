import "./DistilleryList.css"

export const DistillerySearch = ({ setterFunction }) => {
    return (
        <div className="distillerySearch">
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
