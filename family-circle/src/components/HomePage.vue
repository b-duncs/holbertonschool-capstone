<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="mx-auto">
    <div class="grid grid-cols-3">
      <div class="w-[300px] h-[300px] relative">
        <div class="w-[300px] h-[300px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[50px] shadow-inner border-4 border-indigo-800"></div>
        <div class="w-[308px] h-[308px] left-[-4px] top-[-4px] absolute bg-white bg-opacity-0 rounded-[54px] shadow-inner border-4 border-blue-950"></div>
        <div class="w-[300px] h-[47px] left-0 top-[191px] absolute text-center text-blue-950 text-[40px] font-normal font-['Roboto Serif']">Ben Sbanotto</div>
        <div class="w-[300px] h-[47px] left-0 top-[238px] absolute text-center text-blue-950 text-3xl font-extralight font-['Inter']">grandson</div>
        <img class="object-cover w-[150px] h-[150px] left-[75px] top-[28px] absolute rounded-full" src="../assets/profiles/ben.jpg"  alt="profile-pic"/>
      </div>
      <div><!--grid spacing--></div>
      <div class="w-[300px] h-[300px] relative">
        <div class="w-[300px] h-[300px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[50px] shadow-inner border-4 border-indigo-800"></div>
        <div class="w-[308px] h-[308px] left-[-4px] top-[-4px] absolute bg-white bg-opacity-0 rounded-[54px] shadow-inner border-4 border-blue-950"></div>
        <div class="w-[300px] h-[47px] left-0 top-[191px] absolute text-center text-blue-950 text-[40px] font-normal font-['Roboto Serif']">Baylee Bowen</div>
        <div class="w-[300px] h-[47px] left-0 top-[238px] absolute text-center text-blue-950 text-3xl font-extralight font-['Inter']">daughter</div>
        <img class="object-cover w-[150px] h-[150px] left-[75px] top-[28px] absolute rounded-full" src="../assets/profiles/baylee.jpg"  alt="profile-pic"/>
      </div>
      <div><!--grid spacing--></div>
      <div>
        <img src="../assets/logo.svg" class="mx-auto object-scale-down h-40" alt="logo">
      </div>
      <div><!--grid spacing--></div>
      <div class="w-[300px] h-[300px] relative">
        <div class="w-[300px] h-[300px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[50px] shadow-inner border-4 border-indigo-800"></div>
        <div class="w-[308px] h-[308px] left-[-4px] top-[-4px] absolute bg-white bg-opacity-0 rounded-[54px] shadow-inner border-4 border-blue-950"></div>
        <div class="w-[300px] h-[47px] left-0 top-[191px] absolute text-center text-blue-950 text-[40px] font-normal font-['Roboto Serif']">Alex Leeper</div>
        <div class="w-[300px] h-[47px] left-0 top-[238px] absolute text-center text-blue-950 text-3xl font-extralight font-['Inter']">nephew</div>
        <img class="object-cover w-[150px] h-[150px] left-[75px] top-[28px] absolute rounded-full" src="../assets/profiles/alex.jpg"  alt="profile-pic"/>
      </div>
      <div class="pt-8 flex items-end">
        <img src="../assets/gear.svg" class="mx-auto" alt="settings">
      </div>
      <div class="w-[300px] h-[300px] relative">
      </div>
    </div>
  </div>
</template>
