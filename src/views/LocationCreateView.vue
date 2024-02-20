<template>
  <div class="location_create">
    <CreateLocationApp />
  </div>
</template>
<script>
import CreateLocationApp from "@/components/CreateLocationApp.vue";

export default {
  name: "LocationCreateView",
  components: {
    CreateLocationApp,
  },
};
</script>
