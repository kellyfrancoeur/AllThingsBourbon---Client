import "./userView.css"

const clearInput = (event) => {
    event.target.value = '';
    event.target.blur();
};

export const WinterSearch = ({ setterFunction }) => {
    return (
        <div className="cocktailSearch">
            <form name="search">
                <input type="text"
                    onChange={
                        (changeEvent) => {
                            setterFunction(changeEvent.target.value)
                        }
                    }
                    className="input" name="txt" onMouseOut={clearInput} />
            </form>
            <i className="fas fa-search"></i>
        </div>
    )
}   