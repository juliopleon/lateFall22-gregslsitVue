<template>
    <div class="card text-center elevation-2 selectable" @click="goTo">
        <img class="img-fluid rounded square-bottom" :src="house.imgUrl" alt="">
        <h5>{{ house.bedrooms }} | {{ house.bathrooms }} | {{ house.year }}</h5>
        <h5>${{ house.price }}</h5>
        <div class="p-2 text-start">{{ house.description }}</div>
        <button v-if="(house.creatorId == account.id)" @click="removeHouse(house.id)"
            class="btn btn-danger delete-btn rounded-pill"><i class="  px-2 mdi mdi-delete-forever"></i></button>
        <div v-if="house.creator" class="creator text-end p-1">
            <img :src="house.creator.picture" alt="">
            <span>{{ house.creator.name }}</span>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    props: { house: { type: Object } },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>

</style>