<template>
  <div class="location_create">
    <EditLocationApp />
  </div>
</template>
<script>
// @ is an alias to /src
import EditLocationApp from "@/components/EditLocationApp.vue";

export default {
  name: "LocationEditView",
  components: {
    EditLocationApp,
  },
};
</script>
