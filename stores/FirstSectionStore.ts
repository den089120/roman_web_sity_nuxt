// @ts-ignore
import { defineStore } from 'pinia'
import {TypeFirstSectionStore} from "./typesStores/typeFirstSectionStore";
import {typeFirstSection} from "#build/typesMy";

export const useFirstSectionStore = defineStore(
    'FirstSectionStore',
    {
        state: (): TypeFirstSectionStore => {
            return {
                title: '',
                content: '',
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
            async first_sectionAll() {
                try {
                    const list: Array<typeFirstSection> = await $fetch('/api/first_section/all')
                    if(list) {
                        this.listFirstSection = list
                    }
                }
                catch (e) {
                    console.log(e)
                }
            }
        }
    }
)