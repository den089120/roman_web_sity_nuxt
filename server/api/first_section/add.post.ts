// @ts-ignore
import {$fetch} from "ofetch";
// @ts-ignore
import { Repo } from '../../../typesMy'

export default defineEventHandler(async (event: any) => {

    const {title, content} = await readBody(event)

    const data = await $fetch<Repo[]>(' http://localhost:8000/api/first_section/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            title: title,
            content: content
        }
    })

    return data
})