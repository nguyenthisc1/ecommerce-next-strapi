type Project = {
    id: string
    attributes: {
        name: string
        image: string
        cursorImage: string
        description: string | string[]
        createdAt: string
        updatedAt: string
        images: {
            data: ProjectImages[]
        }
        cursorImage: ProjectImages
        categories: ProjectCategories
        publishedAt: string
    }
}

type ProjectCategories = {
    id: string

    attributes: {
        name: string
        createdAt: string
        updatedAt: string
        publishedAt: string
    }
}

type ProjectImages = {
    id: string
    attributes: {
        name: string
        alternativeText?: string
        caption?: string
        width: number
        height: number
        formats: [Object]
        hash: string
        ext: string
        mime: string
        size: number
        url: string
        previewUrl?: string
        provider: string
        provider_metadata?: string
        createdAt: string
        updatedAt: string
    }
}
