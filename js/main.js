$(document).ready(() => {
   $('#searchForm').on('submit', (e) => {
       let searchText = $('#searchText').val();
       getMovies(searchText);
       e.preventDefault();
   })
});

function getMovies(text){
    console.log(text);
    $.ajax({
        url : "http://www.omdbapi.com?s="+text+"&apikey=4ae8dbd5",
        type: 'GET',
        success: function(response){
            console.log(response);
            extractMovies(response.Search);
        }
    });
}

function extractMovies(movies) {
    let output = '';
    $.each(movies, (index, movie) => {
        output += `
          <div class="col-md-3">
            <div class="text-center">
                <img src="${movie.Poster}"/>
                <h5>${movie.Title}</h5>
                <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
            </div>
          </div>
        `;
    });
    $('#movies').html(output);
}

function movieSelected(id) {
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
}