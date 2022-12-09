import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class HousesService {

    async getHouses() {
        const res = await api.get('api/houses')
        logger.log('[getHouses]', res.data)
        AppState.houses = res.data
    }

    async getHouseById(id) {
        const res = await api.get('api/houses/' + id)
        logger.log('[getHouseById]', res.data)
        AppState.activeHouse = res.data
    }

    async createHouse(houseData) {
        const res = await api.post('api/houses', houseData)
        logger.log('[createHouse]', res.data)
        AppState.houses.push(res.data)
    }

    async editHouse() {

    }

    async removeHouse() {

    }
}

export const housesService = new HousesService()