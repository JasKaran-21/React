// a tag
function customRender(element, container) {
    // One way:
    /* const domElement = document.createElement(element.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);
    console.log(domElement);
    
    container.appendChild(domElement);
    */

    // Second way:
    const domElement = document.createElement(element.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: "a",
    props: {
        href: "http://google.com",
        target: "_blank"
    },
    children: "Click me to visit Google"
}

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
