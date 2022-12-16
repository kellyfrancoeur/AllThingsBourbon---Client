import "./ManageBourbonUsers.css"

export const MemberSearch = ({setterFunction}) => {
    return (
        <div className="memberSearch">
        <input id="search"
            onChange ={
                (changeEvent) => {
                setterFunction(changeEvent.target.value)
            }
        }
            type="text" placeholder= "Enter Search Terms"/>
        </div>
    )
}