const getId = (id,value) => {
    document.getElementById(id).innerHTML = value;
}

const getMovieInfo = () => {

    let inputValue = document.getElementById('input').value;

    if(inputValue) {
        fetch(`http://www.omdbapi.com/?t=${inputValue}&apikey=d6dae3f1&plot=full`)
        .then(function(resp){
            return resp.json()
        })
        .then(data => {
           document.getElementById('poster').src = data.Poster;
           document.getElementById('myFilm').style.display = 'flex';
           if(data.Title) {
            getId('title',data.Title);
            getId('director', data.Director);
            getId('actors',data.Actors);
            getId('genre',data.Genre);
            getId('awards', data.Awards);
            getId('country',data.Country);
            getId('language', data.Language);
            getId('plot',data.Plot);
            getId('runtime',data.Runtime);
            getId('year',data.Year);
           }else {
            getId('title','');
            getId('director', '');
            getId('actors','');
            getId('genre','');
            getId('awards', '');
            getId('country','');
            getId('language', '');
            getId('plot','');
            getId('runtime','');
            getId('year','');
            document.getElementById('poster').src ="images//poster-template-movie-poster.jpg";
            alert(`Sorry. ${inputValue} was not found`)
           }
        })
        
        }
        else {
        alert('You have to enter a movie name!');
    }
}

const enter = (event) => {
    if(event.key === 'Enter') {
         getMovieInfo()
    }
  }

