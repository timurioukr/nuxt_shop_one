export default defineEventHandler(async (event) => {
    const { code } = event.context.params
    const { currencyKey } = useRuntimeConfig()
    const uri = `https://api.themoviedb.org/3/tv/popular?query=${ code }&api_key=${currencyKey}`
    const data = await $fetch(uri)
    return data
})