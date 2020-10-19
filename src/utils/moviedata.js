
const request = require('request')


const movieData = (title, callback) => {



    const movieurl = 'http://www.omdbapi.com/?apikey=4dd2bf20&t=' + title




    request({ url: movieurl, json: true }, (error, res) => {

        if (error) {
            callback('internet issue', undefined)
        }

        else if (res.body.Error) {
            callback(' Enter correct Title  Movie not found   ', undefined)
        }

        else {
            callback(undefined, {
                movie: res.body.Title,
                country: res.body.Country,
                imdbrating: res.body.imdbRating,
                language: res.body.Language,
                director: res.body.Director,
                Story: res.body.Plot,


            })

        }

    })




}
module.exports = movieData


