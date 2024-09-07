import { createClient } from "next-sanity"

import imageurlbuilder from "@sanity/image-url"


export const client = createClient({
    projectId: "47hzephu",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-25"
})


const builder = imageurlbuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}