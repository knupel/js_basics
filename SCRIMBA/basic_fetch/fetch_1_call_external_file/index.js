fetch('example.txt')
    .then( response => {
        return response.text()
    })
    .then( text => {
        console.log(text)
    })