import { Link } from "react-router-dom"

export const Member = ({ id, fullName, birthday }) => {
    return <section className="bourbonuser" >
        <div>
            <Link to={`/bourbonusers/${id}`}> Name: {fullName}</Link>
        </div>
        <div> Birthday: {birthday}</div>
    </section>
}