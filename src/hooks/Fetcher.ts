import useSwr from 'swr'
import api from '../services/api'

export default function Fetcher<Config = any, Error = any>(url: string) {
    const { data, error } = useSwr<Config, Error>(url, async url => {
        const response = await api.get(url)
        const data = await response.data

        return data
    })

    return { data, error }
}