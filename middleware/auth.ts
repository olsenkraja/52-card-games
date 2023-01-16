export default defineNuxtRouteMiddleware((to, from) => {
    const config = useRuntimeConfig()
    console.log(config.IPSUM)

    const token = useCookie('token')
    console.log(token.value)

    if (!token.value) {
        return navigateTo('/login')
    }
})