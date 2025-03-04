import { useState } from "react";

function RealTimeInputDisaplay() {
    const [text, setText] = useState("")

    return (
        <div>

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Type Something...'
            />
            <p>You Typed: <strong>{text}</strong></p>

        </div>
    )
}

export default RealTimeInputDisaplay;