import "./ManageBourbonUsers.css"

const clearInput = (event) => {
    event.target.value = '';
    event.target.blur();
};

export const MemberSearch = ({ setterFunction }) => {
    return (
        <div className="memberSearch">
            <form name="search">
                <input type="text"
                    onChange={
                        (changeEvent) => {
                            setterFunction(changeEvent.target.value)
                        }
                    }
                    className="input" name="txt" onMouseOut={clearInput} />
            </form>
            <i className="fas fa-search"></i></div>
    )
}