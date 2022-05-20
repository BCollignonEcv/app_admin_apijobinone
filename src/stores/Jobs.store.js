import { defineStore } from 'pinia'
import ApiService from '@/services/api.service.js'

const API = new ApiService();

export const useJobsStore = defineStore({
    id: 'jobs',
    state: () => ('jobs', {
        jobs: [],
    }),
    getters: {
        getJobs: (state) => {
            return state.jobs;
        },
    },
    actions: {
        searchJobs () {

        }
    }
});