export default defineEventHandler(async () => {
    // const { name } = getQuery(event)
    // const { age } = await readBody(event)
    const { results } = await $fetch(`https://api.themoviedb.org/3/tv/popular?api_key=eb8b2919c096d8d62b34de060679c699`)
    return results
    
})