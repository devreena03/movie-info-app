function getMovieDeatil(){
    let movieId = sessionStorage.getItem('movieId');
    console.log(movieId);
    $.ajax({
        url : "http://www.omdbapi.com?i="+movieId+"&apikey=4ae8dbd5",
        type: 'GET',
        success: function(response){   
            printDetail(response);
        }
    });
}

function printDetail(movie) {
    console.log(movie);
    let output = `
    <div class="row">
      <div class="col-md-3">
          <img src="${movie.Poster}" class="thumbnail"/>
          
      </div>
      <div class="col-md-7">
         <h2>${movie.Title}</h2>
         <ul class="list-group">
            <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
            <li class="list-group-item"><strong>Language:</strong> ${movie.Language}</li>
            <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
            <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>       
            <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
            <li class="list-group-item"><strong>ImdbRating:</strong> ${movie.imdbRating}</li>
            <li class="list-group-item"><strong>Awards:</strong> ${movie.Awards}</li>
         </ul>
      </div>
    </div>
    <div class="row">
      <div class="well">
         <h3>Plot</h3>
         ${movie.Plot}
         <hr>
         <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
         <a href="index.html" class="btn btn-default">Go back to search</a>
      </div>
    </div>
  `;
  $('#movie').html(output);
}