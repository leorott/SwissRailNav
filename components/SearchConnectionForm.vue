<template>
  <div>
    <div class="mb-3">
      <label for="from" class="form-label">Von</label>
      <input v-model="from" type="text" class="form-control" id="from">
    </div>
    <div class="mb-3">
      <label for="to" class="form-label">Nach</label>
      <input v-model="to" type="text" class="form-control" id="to">
    </div>
    <div class="mb-3">
      <label for="to" class="form-label">Nach</label>
      <input v-model="dateTime" type="datetime-local" class="form-control" id="to">
    </div>
    <button @click="$emit('search', connectionForm)" class="btn btn-primary">Verbindung suchen</button>
  </div>
</template>
<script setup lang="ts">
import { Ref, ref } from 'vue';

interface ConnectionForm {
  from?: Ref<string>
  to?: Ref<string>
  dateTime: Ref<string>
}

const from = ref<string>('')
const to = ref<string>('')
const dateTime = ref<string>(
    new Date().toISOString()
        .split(".")[0]
        .slice(0, -3)
);

const connectionForm = computed<ConnectionForm>(() => {
  return {
    from,
    to,
    dateTime
  }
})



</script>