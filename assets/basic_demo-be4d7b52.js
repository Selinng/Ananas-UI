const e=`<template>
    <an-checkbox v-model="selectedHobbies" :options="hobbies" />
    <p>🐔：{{ selectedHobbies }}</p>
</template>

<script setup>
import { ref } from 'vue'

const selectedHobbies = ref()

const hobbies = [
  { label: '唱', value: 'sing' },
  { label: '跳', value: 'dance' },
  { label: 'Rap', value: 'rap' },
  { label: '篮球', value: 'basketball' },
  { label: 'Music', value: 'music' }
]
<\/script>
`;export{e as default};
