function CustomRender(reactElement , container) {

    /** 
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement) */
    document.createElement(reactElement.type)
    domElement.InnerHTML = reactElement.Children

    for (const prop in reactElement.props) {
        if (prop=== children) continue;
        domElement.setAttribute(prop, reactElement.props[props])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props : {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}


const mainContainer = document.querySelector(('#root'))

CustomRender(reactElement, mainContainer)