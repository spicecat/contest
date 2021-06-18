import superagent from 'superagent'

const url = 'https://server.exozy.me' // '127.0.0.1:6000/upload'

export async function upload(files) {
    const uploadUrl = url + '/submission'
    console.log('files:', files)
    try {
        const response = await superagent.get(uploadUrl, files)
        console.log('res:', response)
    } catch (err) {
        console.log('error uploading files', err)
        alert(err)
    }
}