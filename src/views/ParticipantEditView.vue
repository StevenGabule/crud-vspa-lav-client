<template>
  <div class="location_create">
    <EditParticipantsApp />
  </div>
</template>
<script>
// @ is an alias to /src
import EditParticipantsApp from "@/components/EditParticipantsApp.vue";

export default {
  name: "ParticipantsEditView",
  components: {
    EditParticipantsApp,
  },
};
</script>
