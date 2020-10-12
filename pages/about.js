import React from "react";

const About = () => {
    let message = "Hello World";
    return (
        <h1>Hello About Page - {message}</h1>
    );
}
    
// export default About;

/* const About = () => {
    const message = "Hello World";
    return React.createElement('h2', null, "I am generating this element with createElement method!");
}

export default About; */

// class About extends React.Component {
//     render() {
//         return (
//             <h1>Hello, I am class Component!</h1>
//         )
//     }
// }

export default About;