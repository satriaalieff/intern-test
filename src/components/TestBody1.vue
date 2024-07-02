<script setup>
import { ref } from 'vue';
import { useCandidateStore } from "../stores/candidate"
import { useRouter } from 'vue-router';
import { quizzes1 } from '@/data/quizzes1';
import PreviousButton from './buttons/PreviousButton.vue';
import NextButton from './buttons/NextButton.vue';
import SubmitButton from './buttons/SubmitButton.vue';

const candidate = useCandidateStore()
const router = useRouter()

const nomorSoal = ref(1)
const jawabanSoal = ref([])

const checkAnswer = () => {
    let points = 0

    if (jawabanSoal.value[0] === quizzes1[0].answer[1]) points += 10
    if (jawabanSoal.value[1] === quizzes1[1].answer[2]) points += 10
    if (jawabanSoal.value[2] === quizzes1[2].answer[1]) points += 10
    if (jawabanSoal.value[3] === quizzes1[3].answer[0]) points += 10
    if (jawabanSoal.value[4] === quizzes1[4].answer[1]) points += 10
    if (jawabanSoal.value[5] === quizzes1[5].answer[2]) points += 10
    if (jawabanSoal.value[6] === quizzes1[6].answer[3]) points += 10
    if (jawabanSoal.value[7] === quizzes1[7].answer[2]) points += 10
    if (jawabanSoal.value[8] === quizzes1[8].answer[2]) points += 10
    if (jawabanSoal.value[9] === quizzes1[9].answer[3]) points += 10
    if (jawabanSoal.value[10] === quizzes1[10].answer[2]) points += 10
    if (jawabanSoal.value[11] === quizzes1[11].answer[2]) points += 10
    if (jawabanSoal.value[12] === quizzes1[12].answer[2]) points += 10
    if (jawabanSoal.value[13] === quizzes1[13].answer[2]) points += 10
    if (jawabanSoal.value[14] === quizzes1[14].answer[1]) points += 10
    if (jawabanSoal.value[15] === quizzes1[15].answer[2]) points += 10
    if (jawabanSoal.value[16] === quizzes1[16].answer[2]) points += 10
    if (jawabanSoal.value[17] === quizzes1[17].answer[2]) points += 10
    if (jawabanSoal.value[18] === quizzes1[18].answer[1]) points += 10
    if (jawabanSoal.value[19] === quizzes1[19].answer[0]) points += 10

    return points
}

const submitAnswer = () => {
    candidate.score += checkAnswer()
    if (candidate.score >= 200) candidate.succeed = true

    if (!(candidate.level > 1)) candidate.level++
    router.push('/result')
}
</script>

<template>
    <form @submit.prevent="submitAnswer" class="container max-w-xl mx-auto px-4">
        <div class="bg-main w-full rounded-t-lg text-white px-4 py-1.5">
            <h3>{{ nomorSoal }}/20</h3>
        </div>

        <div v-for="(quiz, index) in quizzes1" v-show="index === nomorSoal - 1" :key="index"
            class="relative bg-white rounded-b-lg px-4 py-3 pb-8 flex flex-col gap-2 font-medium">
            <span class="absolute right-4 text-sm text-black text-opacity-30">10 Poin</span>
            <h4 class="mb-2 mr-14">{{ nomorSoal }}. {{ quiz.question }}<span class="text-red-500">*</span></h4>

            <div class="flex flex-col gap-4 text-sm">
                <!-- A -->
                <div class="flex items-center gap-3">
                    <input class="w-7 h-7 text-main" type="radio" :id="quiz.answer[0]" :name="'option' + index"
                        :value="quiz.answer[0]" required v-model="jawabanSoal[index]">
                    <label :for="quiz.answer[0]">{{ quiz.answer[0] }}</label>
                </div>

                <!-- B -->
                <div class="flex items-center gap-3">
                    <input class="w-7 h-7 text-main" type="radio" :id="quiz.answer[1]" :name="'option' + index"
                        :value="quiz.answer[1]" required v-model="jawabanSoal[index]">
                    <label :for="quiz.answer[1]">{{ quiz.answer[1] }}</label>
                </div>

                <!-- C -->
                <div class="flex items-center gap-3">
                    <input class="w-7 h-7 text-main" type="radio" :id="quiz.answer[2]" :name="'option' + index"
                        :value="quiz.answer[2]" required v-model="jawabanSoal[index]">
                    <label :for="quiz.answer[2]">{{ quiz.answer[2] }}</label>
                </div>

                <!-- D -->
                <div class="flex items-center gap-3">
                    <input class="w-7 h-7 text-main" type="radio" :id="quiz.answer[3]" :name="'option' + index"
                        :value="quiz.answer[3]" required v-model="jawabanSoal[index]">
                    <label :for="quiz.answer[3]">{{ quiz.answer[3] }}</label>
                </div>
            </div>
        </div>

        <!-- Button -->
        <div class="container mt-6 grid grid-cols-2 gap-6">
            <PreviousButton @click.prevent="nomorSoal--" v-if="nomorSoal !== 1" />
            <NextButton @click.prevent="nomorSoal++" v-if="nomorSoal !== 20" />
            <SubmitButton v-if="nomorSoal === 20" />
        </div>
    </form>
</template>