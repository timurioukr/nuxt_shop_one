<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink class="font-bold text-xl" to="/">Home project</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink class="btn" to="/products">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot/>
        </div>
    </div>
</template>

<style scoped>
li .router-link-exact-active {
    color: #555195;
}
</style>