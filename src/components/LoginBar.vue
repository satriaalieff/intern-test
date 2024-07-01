<script setup>
import { computed } from 'vue'
import { useCandidateStore } from "../stores/candidate"
import DisabledLoginButton from './buttons/DisabledLoginButton.vue';
import LoginButton from './buttons/LoginButton.vue';

const candidate = useCandidateStore()

const isCandidateCodeValid = computed(() => candidate.name.trim() !== '')
const isCandidateNameValid = computed(() => candidate.code.trim() !== '')
const isFormValid = computed(() => isCandidateCodeValid.value && isCandidateNameValid.value)
</script>

<template>
    <div
        class="fixed h-1/2 w-full max-w-xl place-self-center bottom-0 bg-white rounded-t-[3rem] py-14 px-5 text-xl font-medium">
        <form class="flex flex-col h-full justify-between">
            <div class="flex flex-col gap-3">
                <!--  -->
                <label for="candidateCode">Kode Kandidat</label>
                <input v-model="candidate.code" id="candidateCode" name="candidateCode" type="text"
                    class="bg-input rounded-lg px-4 py-3 focus:outline focus:outline-main placeholder:text-black placeholder:text-opacity-15 mb-3"
                    placeholder="Masukkan kode kandidat">

                <!--  -->
                <label for="candidateName">Nama Lengkap</label>
                <input v-model="candidate.name" id="candidateName" name="candidateName" type="text"
                    class="bg-input rounded-lg px-4 py-3 focus:outline focus:outline-main placeholder:text-black placeholder:text-opacity-15"
                    placeholder="Masukkan nama Anda">
            </div>

            <DisabledLoginButton v-if="!isFormValid" />
            <LoginButton v-else />
        </form>
    </div>
</template>