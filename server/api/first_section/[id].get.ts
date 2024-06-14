// @ts-ignore
import {$fetch} from "ofetch";
// @ts-ignore
import { Repo } from '../../../typesMy'

export default defineEventHandler(async (event: any) => {

    const id = event.context.params.id

    const data = await $fetch<Repo[]>(`http://localhost:8000/api/first_section/${id}`, {
        method: 'GET'
    })

    return data
})