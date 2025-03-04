import { useState } from "react";

function ToggleSwitch() {
    const [toggle, setToggle] = useState("OFF")

    const toggleSwitch = () => {
        setToggle(toggle === "OFF" ? "ON" : "OFF")
    }

    return (
        <button onClick={toggleSwitch}>{toggle}</button>
    )
}

export default ToggleSwitch;