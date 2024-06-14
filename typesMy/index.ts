// @ts-ignore
import {UnwrapRef} from "vue";

export interface typeFirstSection {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

export interface typeFirstSectionSmall {
    title: string;
    content: string;
    fileValue: {
        lastModified: UnwrapRef<File["lastModified"]>;
        name: UnwrapRef<File["name"]>;
        webkitRelativePath: UnwrapRef<File["webkitRelativePath"]>;
        size: UnwrapRef<File["size"]>;
        type: UnwrapRef<File["type"]>;
        arrayBuffer: UnwrapRef<File["arrayBuffer"]>;
        slice: UnwrapRef<File["slice"]>;
        stream: UnwrapRef<File["stream"]>;
        text: UnwrapRef<File["text"]>;
    } | null;
    fileName: UnwrapRef<File["name"]>;
}

