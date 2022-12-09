<template>
  <div class="container-fluid">
    <h1 class="text-center text-primary">
      Houses
    </h1>
    <section class="row justify-content-center">
      <div class="col-8 bg-white p-2 elevation-2 rounded">
        <HouseForm />
      </div>
    </section>

    <section class="row">
      <div v-for="h in houses" class="col-4 p-4">
        <HouseCard :house="h" />
      </div>

    </section>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { housesService } from '../services/HousesService.js';
export default {
  setup() {
    async function getHouses() {
      try {
        await housesService.getHouses()
      } catch (error) {
        Pop.error(error)
        logger.error(error)
      }
    }
    onMounted(() => {
      getHouses()
    })
    return {
      houses: computed(() => AppState.houses)
    }
  }
};
</script>


<style lang="scss" scoped>

</style>
