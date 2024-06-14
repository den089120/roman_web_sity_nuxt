// @ts-ignore
import { defineStore } from 'pinia'
import {TypeFirstSectionStore} from "./typesStores/typeFirstSectionStore";
// @ts-ignore
import {typeFirstSection, typeFirstSectionSmall} from "#build/typesMy";

export const useFirstSectionStore = defineStore(
    {
        id:'FirstSectionStore',
        state: (): TypeFirstSectionStore => {
            return {
                firstSectionElement: {
                    id: 0,
                    title: '',
                    content: '',
                    createdAt: '',
                    updatedAt: ''
                },
                listFirstSection: [
                    {
                        id: 11,
                        title: 'first object',
                        content: 'first content string',
                        createdAt: '01.02.2024',
                        updatedAt: '01.02.2024'
                    },
                    {
                        id: 22,
                        title: 'second object',
                        content: 'second content string',
                        createdAt: '01.02.2024',
                        updatedAt: '01.02.2024'
                    },
                    {
                        id: 33,
                        title: 'three object',
                        content: 'three content string',
                        createdAt: '01.02.2024',
                        updatedAt: '01.02.2024'
                    }
                ]
            }
        },
        actions: {
            addFirstSection( el: typeFirstSection) {
                // @ts-ignore
                this.$patch({firstSectionElement: el})
                // this.firstSectionElement = el
            },
            async first_sectionAll() {
                try {
                    const list: Array<typeFirstSection> = await $fetch('/api/first_section/all')
                    if(list) {
                        // @ts-ignore
                        this.$patch({listFirstSection: list})
                        // this.listFirstSection = list
                    }
                }
                catch (e) {
                    console.log(e)
                }
            },
            async first_sectionUpdate(el: typeFirstSection) {
                try {
                    await $fetch(`/api/first_section/${el.id}`,{
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        params: {
                            id: el.id
                        },
                        body: {
                            title: el.title,
                            content: el.content
                        }
                    })
                } catch (e) {
                    console.log(e)
                }
            },
            async first_sectionAdd(el: typeFirstSectionSmall) {
                const bodyMy = new FormData();
                bodyMy.append("title", el.title);
                bodyMy.append("content", el.content);
                bodyMy.append("file", el.fileValue, el.fileName);

                console.log(bodyMy)
                console.log(el)

                try {
                    await $fetch('/api/first_section/add',{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                        body: bodyMy
                    })
                } catch (e) {
                    console.log(e)
                }
            },
            async first_sectionDelete(el: typeFirstSection) {
                try {
                    await $fetch(`/api/first_section/${el.id}`,{
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        params: {
                            id: el.id
                        }
                    })
                } catch (e) {
                    console.log(e)
                }
            },
        }
    }
)