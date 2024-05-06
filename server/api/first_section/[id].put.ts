// @ts-ignore
import {$fetch} from "ofetch";
// @ts-ignore
import { Repo } from '../../../typesMy'

export default defineEventHandler ? defineEventHandler(async (event: any) => {

    const id = event.context.params.id
    let res = null
    if (readBody) {
        res = await readBody(event)
    }

    if (res) {
        const data = await $fetch<Repo[]>(`http://localhost:8000/api/first_section/put`, {
            method: 'PUT',
            query: {
                id: id
            },
            body: {
                title: res.title,
                content: res.content
            }
        })
        if (data) return data
        else return '404'
    }


}) : ''