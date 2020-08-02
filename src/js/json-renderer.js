import JSONFormatter from 'json-formatter-js'

document.querySelectorAll('code.json').forEach(el => {
    let renderedJson = new JSONFormatter(JSON.parse(el.innerHTML)).render();
    renderedJson
        .querySelectorAll(".json-formatter-boolean")
        .forEach(e => e.innerText == 'true' ? e.classList.add('true') : e.classList.add('false'))
    var parent = el.parentNode
    parent.removeChild(el)
    parent.appendChild(renderedJson)
})