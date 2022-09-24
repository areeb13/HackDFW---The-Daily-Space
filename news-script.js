const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
        jsonVal = JSON.parse(this.responseText);
        document.getElementById("title").innerHTML += jsonVal[0]['title'];
        document.getElementById("author").innerHTML += jsonVal[0]['author'];
        document.getElementById("description").innerHTML += jsonVal[0]['description'];
        document.getElementById("link").href = jsonVal[0]['link'];
    }
});

xhr.open("GET", "https://spacefo.p.rapidapi.com/articles");
xhr.setRequestHeader("X-RapidAPI-Key", "5d0aac7addmsh05047b1626effd9p1af969jsn949f9923268e");
xhr.setRequestHeader("X-RapidAPI-Host", "spacefo.p.rapidapi.com");

xhr.send(data);
console.log(xhr);