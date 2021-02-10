const url ='https://proxy-itunes-api.glitch.me/search?term='
const resultsContainer = document.querySelector(".display-results")
let searchMusic = document.querySelector('.music-search')

//event listeners.
searchMusic.addEventListener('submit', event => { 
        event.preventDefault()
        
        // let newArtist = document.querySelector('.search-artist').value
        // console.log('search request function called', newArtist)
        clearResults()
        searchRequest()

        
}) 
function clearResults() {
    let songs = document.querySelectorAll(".    results")
        for (let song of songs) {
            song.remove();
        }

    }
//request the artist
function searchRequest() {
    let newArtist = document.querySelector('.search-artist').value
        console.log('search request function called', newArtist)
fetch(`${url}+${newArtist}`)
        .then(function (response){
        return response.json()

    })         
        .then(function (data){
        console.log(data)
        for (let song of data.results)
        renderResults(song)
    })
   
}
// results I want displayed: artistName, collectionName, trackCensoredName
// create div(s) for where results will be displayed

function renderResults(song) {
//     let resultsEl = document.createElement('div)
let resultsEl = document.createElement('div')
    resultsEl.className = "results"

let coverArt = document.createElement('img')
    coverArt.className = "cover-image"
    coverArt.src = song.artworkUrl100
// addEvent listener to img element; use a click; put a data attribute on the button..

let artistName = document.createElement('h2')
    artistName.className = "artist"
    artistName.innerText = song.artistName

 let collectionName = document.createElement('h2')
    collectionName.className = "album"
    collectionName.innerText = song.collectionName
    
let trackCensoredName = document.createElement('h2')
    trackCensoredName.className = "track"
    trackCensoredName.innerText = song.trackCensoredName    

    resultsContainer.appendChild(resultsEl)

    resultsEl.appendChild(coverArt)
    resultsEl.appendChild(artistName)
    resultsEl.appendChild(trackCensoredName)
    
}    

