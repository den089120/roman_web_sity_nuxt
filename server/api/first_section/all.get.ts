// @ts-ignore
import {$fetch} from "ofetch";
// @ts-ignore
import {Repo, typeFirstSection} from '~/typesMy'

export default defineEventHandler(async () => {
    const data = await $fetch<Repo[typeFirstSection]>(' http://localhost:8000/api/first_section/all', {
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