<template>
  <div class="hello">
    <h4>Locations</h4>
    <p class="text-muted">Locations Information</p>
    <div class="container">
      <div class="row">
        <div class="col">
          <table class="table table-striped table-sm small">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Participant</th>
                <th scope="col">Country</th>
                <th scope="col">City</th>
                <th scope="col">Address</th>
                <th scope="col">Latitude</th>
                <th scope="col">Longitude</th>
                <th scope="col">Created</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody v-for="location in locations" :key="location.id">
              <tr>
                <th scope="row">{{ location.id }}</th>
                <td>{{ location.attributes.participant.name }}</td>
                <td>{{ location.attributes.country }}</td>
                <td>{{ location.attributes.city }}</td>
                <td>{{ location.attributes.address }}</td>
                <td>{{ location.attributes.latitude }}</td>
                <td>{{ location.attributes.longitude }}</td>
                <td>{{ location.attributes.created_at }}</td>
                <td>
                  <router-link
                    class="btn btn-info"
                    :to="{
                      name: 'LocationEditView',
                      params: { id: location.id },
                    }"
                    >Edit
                  </router-link>
                  <button class="btn btn-danger" @click="destroy(location.id)">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
<script>
import axios from "axios";

export default {
  name: "MainApp",
  data() {
    return {
      locations: [],
    };
  },
  mounted() {
    this.loadRecords();
  },
  methods: {
    loadRecords() {
      axios
        .get("http://127.0.0.1:8000/api/locations")
        .then((response) => {
          this.locations = response.data.data;
        })
        .catch((err) => console.log(err.message));
    },
    destroy(id) {
      axios
        .delete(`http://127.0.0.1:8000/api/locations/${id}`)
        .then(() => {
          this.loadRecords();
        })
        .catch((err) => console.log(err.message));
    },
  },
};
</script>
