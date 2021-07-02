import superagent from 'superagent'

import { serverUrl } from '../var.js'

const baseUrl = serverUrl

export async function upload(files) {
    const url = baseUrl + '/submit'
    try {
        const data = { username: 'user1', token: 'token1', contest: 'con1', problem: 'prob1', lang: files.type, program: await files.text() }
        const response = await superagent.post(url, data)
        console.log('res:', response)
        return response
    } catch (err) { console.log('Error uploading files') }
}