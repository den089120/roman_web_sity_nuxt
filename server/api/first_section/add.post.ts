// @ts-ignore
import {$fetch} from "ofetch";
// @ts-ignore
import { Repo } from '../../../typesMy'

// @ts-ignore
import { type MultiPartData } from "h3";

const FILE_KEYS = ['name', 'filename', 'type', 'data', 'content', 'title']

const isFile = (data: MultiPartData) => {
    return Object.keys(data).filter((key)=> FILE_KEYS.indexOf(key) !== -1).length === FILE_KEYS.length
}

const parseMultiPart = (data?: MultiPartData[]) => {
    const arr = (Array.isArray(data) ? data : []) as MultiPartData[]
    const result = arr.reduce((prev: Record<string, any>, curr) => {
        prev[String(curr.name)] = isFile(curr) ? curr : curr.data.toString('utf8')
        return prev
    }, {})
    return result
}

export default defineEventHandler(async (event: any) => {
    console.log('work')
    const obj = await readMultipartFormData(event)
    console.log(obj)
    console.log(parseMultiPart(obj))

    // const data = await $fetch<Repo[]>(' http://localhost:8000/api/first_section/add', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'multipart/form-data'
    //     },
    //     body: obj
    // })
    //
    // return data
})