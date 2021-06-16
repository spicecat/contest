import superagent from 'superagent'

const url = 'https://server.exozy.me'

export async function upload(files) {
    console.log('files:', files)
    try {
        const response = await superagent.post(url, files)
        console.log('res:', response)
    } catch (err) {
        console.log('error uploading files', err)
        alert(err)
    }
}