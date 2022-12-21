import "./ManageBourbonUsers.css"

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
                className="input"  name="txt" onmouseout="this.value = ''; this.blur();" />
        </form>
        <i class="fas fa-search"></i></div>
    )
}