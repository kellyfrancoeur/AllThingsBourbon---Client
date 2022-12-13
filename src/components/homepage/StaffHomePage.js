export const StaffHomePage = () => {

    const localBourbonUser = localStorage.getItem("bourbon_user")
    const bourbonUserObject = JSON.parse(localBourbonUser)

    return (
        <body>
            <main className="staffHomePage">
                <section>
                    <form>
                        <h1>All Things Bourbon</h1>
                        <section className="staffHome">
                            <h2>Welcome {bourbonUserObject.first_name}</h2>
                            <div><img src="https://media.istockphoto.com/id/1293410245/photo/whiskey-pouring-into-glass.jpg?s=612x612&w=0&k=20&c=h24smNNDXbg3aQyH8Q1flq5Go8a-AORTfhbq19w9-IM=" height="350" width="300"></img></div>
                            <div><img src="https://www.foodandwine.com/thmb/utyRCBrRSRJMPbON9QphpaDVJ4M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rum-and-orange-cocktail-FT-RECIPE1221-f514caf427914bbcb813223ef244547d.jpg" height="350" width="300"></img></div>
                            <div><img src="https://s3.amazonaws.com/ae-lane-report/wp-content/uploads/2019/07/02102726/Exploring-KY_Willett-Distillery.jpg" height="350" width="300"></img></div>
                            <div><img src="https://www.jimbeam.com/sites/default/files/2019-06/jim-beam-cocktails-banner.jpg" height="350" width="300"></img></div>
                        </section>
                    </form>
                </section>
            </main>
        </body>)
}