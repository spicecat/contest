import superagent from 'superagent'
import Cookies from 'universal-cookie'

import { serverUrl } from '../var.js'

const baseUrl = serverUrl
const cookies = new Cookies()

export async function upload(files) {
    const url = baseUrl + '/submit'
    try {
        const data = { username: 'user1', contest: 'con1', problem: 'prob1', lang: files.type, program: await files.text() }
        const auth = Buffer.from(cookies.get('token'), 'ascii').toString('base64')
        const response = await superagent.post(url, data).set('Authorization', 'Basic ' + auth)
        console.log('res:', response)
        return response.text
    } catch (err) { console.log('Error uploading files') }
}