import React, { useEffect, useState } from "react"
import { getBourbons } from "../../managers/BourbonManager"
import "./userViewBourbon.css"

export const StandardBourbons = (props) => {
    const [bourbons, setBourbons] = useState([])


    useEffect(() => {
        getBourbons().then(data => setBourbons(data))
    }, []
    )

    return (<>
        <h1 id="bTitle2">Standard Bourbons</h1>
        <article className="bourbons">
            {
                bourbons.map((bourbon) => {
                    if (bourbon.type_of_bourbon.id === 1) {
                        return <section key={`bourbon--${bourbon.id}`} className="bourbon">
                          <div className="bourbonView">
                        <div className="bourbonImg">
                            <img src={bourbon.bourbon_img} height="400" width="275"/>
                        </div>
                        <div className="bourbonInfo"> 
                        <h3 id="bTitle3"><u><b>{bourbon.name}</b></u></h3>
                        <div className="bourbonProof"><b><u>Proof:</u></b></div> 
                        <div>{bourbon.proof}</div>
                        <div className="bourbonAroma"><b><u>Aroma:</u></b></div> 
                        <div>{bourbon.aroma}</div>
                        <div className="bourbonTaste"><b><u>Taste:</u></b></div> 
                        <div>{bourbon.taste}</div>
                        <div className="bourbonFinish"><b><u>Finish:</u></b></div> 
                        <div>{bourbon.finish}</div>
                        <div className="bourbonDescription"><b><u>Description:</u></b></div> 
                        <div>{bourbon.description}</div>
                        <div className="bourbonMadeIn"><b><u>Made In:</u></b></div> 
                        <div>{bourbon.made_in}</div>
                        <div className="buyBourbon"><a target="_blank" href={bourbon.link_to_buy}>Buy Bourbon</a></div>
                        </div>
                        </div>
                        </section>
                    }
                })
            }
        </article>
    </>
    )
}