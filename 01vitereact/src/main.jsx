import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>MyApp Div !</h1>
        </div>
    )
}


// *Create Own React Element

// const ReactElement = {
//     type: "a",
//     props: {
//         href: "http://google.com",
//         target: "_blank"
//     },
//     children: "Click me to visit Google"
// }

const anotherElement = (
    <a href="http://google.com" target='_blank'>Google Search</a>
)

const userOne = "Abcd"

const reactElement = React.createElement(
    'a',
    {href: "http://google.com", target: "_blank"},  // Attribute set in curly braces{}
    "Click to search on Google ",
    userOne
);

createRoot(document.getElementById('root')).render(
  
    <App/>
    // <MyApp />  // not executed
    // MyApp()
    // <ReactElement/>
    // anotherElement
    // reactElement

)
