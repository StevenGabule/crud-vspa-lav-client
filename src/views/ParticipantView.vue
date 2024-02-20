<template>
  <div class="home">
    <ParticipantsApp />
  </div>
</template>

<script>
// @ is an alias to /src
import ParticipantsApp from "@/components/ParticipantsApp.vue";

export default {
  name: "ParticipantsApp",
  components: {
    ParticipantsApp,
  },
};
</script>
