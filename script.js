fetch('./words.json')
.then(function(response) {
    return response.json();
})
.then(function(words) {
    let random_word = random(words);
    document.getElementsByTagName("h2")[0].innerHTML = words[random_word].quote;
    document.getElementsByTagName("p")[0].innerHTML = words[random_word].author;
})
.catch(function(e) {
    console.log(e)
})

function random(list) {
    return Math.floor(Math.random() * list.length);
}

window.onload = function() {
    document.querySelector('video').playbackRate = 0.5;
}

