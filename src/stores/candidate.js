import { defineStore } from 'pinia'

export const useCandidateStore = defineStore('candidate', {
  state: () => {
    if (localStorage.getItem('candidate')) return JSON.parse(localStorage.getItem('candidate'))
    return {
      name: '',
      code: '',
      score: 0,
      level: 1,
      rank: 0,
      succeed: false,
      image: "bg-[url('./assets/profile-2.png')]"
    }
  }
})
