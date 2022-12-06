export const isStaff = () => {
    const auth = localStorage.getItem("bourbon_user")
    const userType = JSON.parse(auth)
    return userType?.staff
}