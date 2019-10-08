<template>
    <tr>
        <th scope="row">{{index}}</th>
        <td class="text-left">
            <img :src="icon + bm.url" alt="ico" class="mr-2">
            <a :href="bm.url">{{bm.name}}</a>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "Bookmark",
        data() {
            return {
                icon: 'http://www.google.com/s2/favicons?domain=',
            }
        },
        props: {
            index: {
                type: Number,
                required: true
            },
            bm: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
