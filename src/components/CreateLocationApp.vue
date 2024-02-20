<template>
  <div class="hello">
    <h4>Locations</h4>
    <p class="text-muted">Locations Information</p>
    <div class="container">
      <div class="row">
        <div class="card text-left">
          <div
            class="card-body"
            style="width: 600px; margin: auto; text-align: left"
          >
            <div class="col">
              <h2>Create New Location</h2>
              <form @submit.prevent="submit">
                <div class="mb-3">
                  <label for="participation">Participants:</label>
                  <input
                    class="form-control"
                    type="text"
                    name="participant_id"
                    id="participant_id"
                    v-model="fields.participant_id"
                  />
                </div>
                <div class="mb-3">
                  <label for="latitude">Latitude:</label>
                  <input
                    class="form-control"
                    type="text"
                    name="latitude"
                    id="latitude"
                    v-model="fields.latitude"
                  />
                </div>
                <div class="mb-3">
                  <label for="longitude">Longitude:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="longitude"
                    id="longitude"
                    v-model="fields.longitude"
                  />
                </div>
                <div class="mb-3">
                  <label for="address">Address:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="address"
                    id="address"
                    v-model="fields.address"
                  />
                </div>
                <div class="mb-3">
                  <label for="city">City:</label>
                  <input
                    class="form-control"
                    type="text"
                    name="city"
                    id="city"
                    v-model="fields.city"
                  />
                </div>
                <div class="mb-3">
                  <label for="country">Country:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="country"
                    id="country"
                    v-model="fields.country"
                  />
                </div>
                <input type="submit" value="create" class="btn btn-primary" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
<script>
import axios from "axios";

export default {
  name: "CreateLocationApp",
  data() {
    return {
      success: false,
      errors: {},
      fields: {
        participant_id: "",
        latitude: "",
        longitude: "",
        address: "",
        city: "",
        country: "",
      },
    };
  },
  methods: {
    submit() {
      axios
        .post("http://127.0.0.1:8000/api/locations", this.fields)
        .then(() => {
          this.fields = {};
          this.success = true;
          this.errors = {};
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.success = false;
        });
    },
  },
};
</script>
