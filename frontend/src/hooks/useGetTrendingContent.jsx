import { useEffect, useState } from "react"
import { useContentStore } from "../store/content"
import axios from "axios"

const useGetTrendingContent = () => {
    const [trendingContent, setTrendingContent] = useState(null)
    const { contentType } = useContentStore()

    useEffect(() => {
        const getTrendingContent = async () => {
            try {
                const response = await axios.get(`https://cinestream-kk16.onrender.com/api/v1/${contentType}/trending`, {
                    withCredentials: true,
                })
                setTrendingContent(response.data.content)
            } catch (error) {
                console.error("Error fetching trending content:", error)
            }
        }

        getTrendingContent()
    }, [contentType])

    return { trendingContent }
}

export default useGetTrendingContent
