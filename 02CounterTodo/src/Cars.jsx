// Props (properties):
// In React, props (short for "properties") are used to pass data from one component to another. They allow components to be reusable and dynamic.

function Car(props) {
    return (
        <li>I am a {props.brand}</li>
    )
}

function Garage() {
    const cars = ["Ford", "BMW", "Audi"];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>{cars.map((car, index) => <Car key={index} brand={car} />)}</ul>
        </>
    );
}

export default Garage

