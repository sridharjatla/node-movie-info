
const movieForm = document.querySelector('form')

const search = document.querySelector('input')

const messageOne = document.querySelector('#m1')
const messageTwo = document.querySelector('#m2')




movieForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const movie = search.value

    messageOne.textContent = "....loading "
    messageTwo.textContent = " "


    fetch('/movie?title=' + movie).then((response) => {

        response.json().then((data) => {
            if (data.error) {
                return messageOne.textContent = data.error
            }

            else {
                const data1 = 'The movie name is ' + data.movie + '   Filmed in ' + data.language + '   by   ' + data.director

                const data2 = 'The IMDB rating is ' + data.imdbrating + ' and the main plot is ' + data.Story

                messageOne.textContent = data1
                messageTwo.textContent = data2
            }
        })

    })

})