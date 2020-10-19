const express = require('express')

const path = require('path')
const app = express()
const hbs = require('hbs')
const publicDirPath = path.join(__dirname, '../public')
const viewsDirPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const movieData = require('../src/utils/moviedata')
const port = process.env.PORT || 3000

console.log(partialsPath)
app.use(express.static(publicDirPath))

//console.log(__dirname)
app.set('view engine', 'hbs')

app.set('views', viewsDirPath)
hbs.registerPartials(partialsPath)

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Movie',
        name: 'Sridhar Jatla'
    })
})



app.get('/movie', (req, res) => {

    if (!req.query.title) {
        return res.send({ error: 'must provide a title ' })
    }

    movieData(req.query.title, (error, { movie, country, imdbrating, language, director, Story, poster } = {}) => {

        if (error) {

            return res.send({ error })

        }

        res.send({
            movie,
            country,
            imdbrating,
            language,
            director,
            Story
        })
    })

})



app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Sridhar Jatla'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Sridhar Jatla',

    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Sridhar Jatla',
        errormsg: 'Help article not found'

    })
})


app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Sridhar Jatla',
        errormsg: 'Page not found'

    })
})


app.listen(port, () => {
    console.log('server is running ...' + port)
})








