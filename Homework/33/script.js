function fetchMovieData(search = 'thor', type = 'movie', page = 1){
    url = `https://www.omdbapi.com/?s=${search}&type=${type}&page=${page}&apikey=dc6b1e5d`
    return fetch(url)
    .then((response) => response.json())
    .then((data) => {
        renderList(data.Search)
        renderNavigation(data)
    })
}

function fetchSearchMovieData(id = 'tt3501632'){
    url = `https://www.omdbapi.com/?i=${id}&apikey=dc6b1e5d`
    return fetch(url)
    .then((response) => response.json())
    .then((data) => {
        renderDetails(data)
    })
}


$('body').on('click', '#form button', function(e){
    search()
})

$('body').on('click', '#app .list button', function(e){
    fetchSearchMovieData(($(this).data('id')))
})

let search_title = ``
let search_type = ``
function search(){
    search_title = $('#title').val()
    search_type = $('#type').val()
    fetchMovieData(search_title, search_type, undefined);
}

$('body').on('click', '#app .nav button', function(e){
    let page = $(this).text()
    fetchMovieData(search_title,search_type,page)
})

$('body').on('click', '#app .description .desc .film-main-info .close', function(e){
    $(".desc").remove();
})

const getButtonTemplate = (text) => `
    <button class="btn" >${text}</button>
`

let getFilmTemplate = (film) => `
    <div class="film">
        <div class="poster">
            <img src="${film.Poster}" alt="film-poster">
        </div>
        <h2 class="film__title">
            <span class="film__text">
                ${film.Title}
            </span>
        </h2>
        <div class="film__air-date">
                ${film.Year}
        </div>
        <div class="film__info">
            <button class="btn" data-id="${film.imdbID}">Show information</button>
        </div>
    </div>
`

function renderList(list){
    // Весь полученый список преобразовать в DOM елементы и 
    // встроить в страницу
    
    const appEl = $('#app')
    
    let listHTML = ``

    for(let film of list){
        listHTML += getFilmTemplate(film)
    }

    appEl.children('[data-app=list]').html(listHTML)
}

function renderNavigation(info){
    
    let listHTML = ``

    for(let i = 0; i < Math.ceil(Number(info.totalResults)/10); ++i){
        listHTML += getButtonTemplate(i + 1)
    }
    console.log(info)
    $('#app').children('[data-app=nav]').html(listHTML)
}



function renderDetails(description){
    
    let descHTML = `
    <div class="desc">
        <div class="film-main-info">

            <div class="poster">
                <img src="${description.Poster}" alt="film-poster">
            </div>
            <div class="name-data-prod">
                <h2 class="film__title">
                    <span class="film__text">
                        ${description.Title}
                    </span>
                </h2>
                <p class="release">${description.Released}</p>
                <div class="other-desc">
                <p class="genre">Genre: ${description.Genre}</p>
                <p class="director">Director: ${description.Director}</p>
                <p class="actors">Actors: ${description.Actors}</p>
                </div>
            </div>
            <div class="close">&times</div>
        </div>
        <p class="plot">${description.Plot}</p>
    </div>`

$('#app').children('[data-app=description]').html(descHTML)

}

