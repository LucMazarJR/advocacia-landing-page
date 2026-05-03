import type { MetadataRoute } from 'next'

const baseUrl = 'https://mazaraoadvocacia.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date()

    return [
        {
            url: `${baseUrl}/`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/sobre`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]
}
