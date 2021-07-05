function fetchMovieData(search = 'thor', type = 'movie'){
    let url = `http://www.omdbapi.com/?s=${search}&?type=${movie}&apikey=dc6b1e5d`
    return fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
}

$('body').on('click', '#form button', function(e){
    search()
})

function search(){
    let search_text = $('#title').val()
    fetchMovieData(search_text);
}



// <div class="film">
//         <h2 class="film__title">
//             <span class="film__text">
                    
//             </span>
//         </h2>
//         <div class="film__air-date">
                
//         </div>
//         <div class="film__info">
//             <button class="btn">Show information</button>
//         </div>
// </div>