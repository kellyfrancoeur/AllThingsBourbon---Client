import { Link } from "react-router-dom"

export const Staff = ({id, fullName, bio}) =>{
    return <section className ="bourbonstaff" >
                <div>
                <Link to ={`/bourbonstaffs/${id}`}> Name: {fullName}</Link> 
                </div>
                <div> Bio: {bio}</div>
            </section>
    }