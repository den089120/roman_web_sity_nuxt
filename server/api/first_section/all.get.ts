// @ts-ignore
import {$fetch} from "ofetch";
// @ts-ignore
import { Repo } from '~/types'

export default defineEventHandler(async () => {
    const data = await $fetch<Repo[]>(' http://localhost:8000/api/first_section/all', {
        method: 'GET',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: {
        //     text: 'Hello **world**!'
        // }
    })

    return data
})