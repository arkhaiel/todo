<script setup>
import { createId } from '@paralleldrive/cuid2'

const test = createId()
</script>

<template>
  <div class="centered">
    {{ test }}
  </div>
</template>
