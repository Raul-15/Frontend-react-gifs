const api_key = 'TvJ7D1nqV6f8mLnsQErMbLtHMsexoOAw'

export default function getGifs({ keyword = 'morty' } = {}) {  // ={}  valor por defecto un objeto vacio
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=25&offset=0&rating=g&lang=en'`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data = [] } = response  //=[] si es que viene undefined
            if (Array.isArray(data)) {
                const gifs = data.map(image => {
                    const { images, title, id } = image
                    const { url } = images.downsized_medium
                    return { title, id, url }
                })
                return gifs


            }

            //   console.log(gifs)
        })
}