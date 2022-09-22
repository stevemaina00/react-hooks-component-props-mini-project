import React from "react";

// const image = 'https://via.placeholder.com/215';
// const alt = "blog logo";

function About({image = 'https://via.placeholder.com/215',alt = "blog logo",about}) {
    return(
        <aside>
        <img src={image} alt={alt}/>
        <p>{about}</p>

    </aside>
    )

}

export default About;