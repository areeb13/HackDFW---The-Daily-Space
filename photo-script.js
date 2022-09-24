// javascript
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=kYmxb63Vryzw6oSnmnv6HSilPSYeBnjHppKqa5VH', true);

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    var el = document.getElementById("image")
    console.log(data)
    el.src = data['url'];
    console.log(data['url']);
    el = document.getElementById("explanation")
    el.innerHTML = data['explanation']
}

// Send request
request.send()