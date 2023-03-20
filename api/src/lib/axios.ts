import axios from "axios"

export const getMovies = async () => {
    const { data } = await axios.get("/api/movies")
    return data
}