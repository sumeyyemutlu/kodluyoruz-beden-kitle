function Alert(type, message) {
    const HTML_Alert = document.getElementById("Alert")

    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`
    alert.textContent = message

    HTML_Alert.appendChild(alert)   
    
    setTimeout(() => {
        alert.remove()
    }, 4000)
}

export default Alert