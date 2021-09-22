function handleSubmit(event) {
    event.preventDefault()
    const city = "cairo"
    const key = '26e319dc9f9d7981340126e8fa54f798'

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(res=>res.json())
    .then(res=>{console.log(res); return res})
    .then(res=>{
    document.getElementById('results').innerHTML += `<p> cairo weather is ${res.weather[0].description}</p>`
    
    })
}

export { handleSubmit }
