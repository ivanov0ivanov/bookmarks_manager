<template>
    <table class="table table-hover table-dark m-0">
        <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col" class="text-left">Name</th>
        </tr>
        </thead>
        <tbody>
        <Bookmark v-for="(bm, index) of bmks" :key="bm.id" :index="index" :bm="bm"/>
        </tbody>
    </table>
</template>

<script>
    import Bookmark from "./Bookmark";
    import bookmarksDB from "../../db/Bookmarks";
    export default {
        name: "BmList",
        components: {Bookmark},
        data() {
            return {
                bmks: bookmarksDB.roots.bookmark_bar.children,
            }
        },
    }
</script>

<style scoped>

</style>
