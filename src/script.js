import Amplify, { Storage } from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

/*
document.getElementById('upload-form').addEventListener('submit', e => {
  e.preventDefault()
  const file = document.getElementById('file-upload').files[0]
  // will be able to view the file uploaded through the console
  console.log(file)

// need to upload the file to the S3 bucket
// once file is uploaded, a key is returned with the name of the file, so the file is successfully uploaded to S3
  Storage.put(file.name, file)
    .then(item => {
      console.log(item)
    })
    .catch(err => {
      console.error(err)
    })
})

// retrieve all songs and display it on the page
// loop through each item, console.log each item and if there's any errors, catch it
// will be able to show you all of the files uploaded through the console
Storage.list('')
  .then(result => {
    // get item from S3 and display it on the page
    result.forEach(item => {
      // grabs the individual item from S3 based off of its key
      Storage.get(item.key).then(result => {
        const audio = document.createElement('audio')
        const source = document.createElement('source')
        audio.appendChild(source)
        audio.setAttribute('controls', '')
        source.setAttribute('src', result)
        source.setAttribute('type', 'audio/mpeg')

        document.querySelector('.tracks').appendChild(audio)
      })
    })
  })
  .catch(err => console.error(err))
*/





// from sample
const createAudioPlayer = track => {
  Storage.get(track.key).then(result => {
    const audio = document.createElement('audio')
    const source = document.createElement('source')
    audio.appendChild(source)
    audio.setAttribute('controls', '')
    source.setAttribute('src', result)
    source.setAttribute('type', 'audio/mpeg')
    document.querySelector('.tracks').appendChild(audio)
  })
}

document.getElementById('upload-form').addEventListener('submit', e => {
  e.preventDefault()
  const file = document.getElementById('file-upload').files[0]
  Storage.put(file.name, file)
    .then(result => {
      createAudioPlayer(result)
    })
    .catch(err => console.error(err))
})

Storage.list('')
  .then(result => {
    result.forEach(item => createAudioPlayer(item))
  })
  .catch(err => console.error(err))