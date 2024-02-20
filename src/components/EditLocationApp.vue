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
              <h2>Edit Location</h2>
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
                <input type="submit" value="Update" class="btn btn-primary" />
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
  name: "EditLocation",
  data() {
    return {
      success: false,
      errors: {},
      locationId: "",
      fields: {
        participant_id: "",
        latitude: "",
        longitude: "",
        address: "",
        city: "",
        country: "",
      },
      location: {},
    };
  },
  created() {
    // Access the id parameter when the component is created
    this.locationId = this.$route.params.id;
  },
  methods: {
    submit() {
      axios
        .patch(
          `http://127.0.0.1:8000/api/locations/${this.locationId}`,
          this.fields
        )
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
  mounted() {
    axios
      .get(`http://127.0.0.1:8000/api/locations/${this.locationId}`)
      .then((response) => {
        const data = response.data.data;
        this.fields.participant_id = data.id;
        this.fields.latitude = data.attributes.latitude;
        this.fields.longitude = data.attributes.longitude;
        this.fields.address = data.attributes.address;
        this.fields.city = data.attributes.city;
        this.fields.country = data.attributes.country;
      })
      .catch((err) => console.log(err.message));
  },
};
</script>
