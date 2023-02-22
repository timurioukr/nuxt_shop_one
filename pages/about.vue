<template>
    <div>
        <h2>About</h2>
        <p>Test server acces</p>
        <div class="grid grid-cols-4 gap-4">
            <div v-for="item in data.results" class="shadow-2xl flex flex-col h-36 overflow-hidden p-4 rounded-md" :key="item.id">
                <div>{{ item.name }}</div>
                <div>{{ item.overview }}</div>
            </div>
        </div>

    </div>
</template>

<script setup>
    const { data } =  await useFetch('/api/currency/test')
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p {
    margin: 20px 0;
}
</style>