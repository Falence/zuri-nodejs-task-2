const axios = require('axios')
const fs = require('fs')

const  url = 'http://jsonplaceholder.typicode.com/posts/'
const file = './result/posts.txt'

const getPosts = () => {
    axios.get(url).then( (posts) => {
        fs.writeFile(file, JSON.stringify(posts.data),'utf8', (err) => {
            if (err){
                console.log('Error writing file: ', err)
                return
            }
            console.log('File has been saved successfully!')
        })
    }).catch(err => {
        console.log('An Error occurred: ',err)
    })
}

console.log(getPosts())