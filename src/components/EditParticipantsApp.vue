<template>
  <div class="hello">
    <h4>Locations</h4>
    <p class="text-muted">Participants Information</p>
    <div class="container">
      <div class="row">
        <div class="card text-left">
          <div
            class="card-body"
            style="width: 600px; margin: auto; text-align: left"
          >
            <div class="col">
              <h2>Update Participants</h2>
              <form @submit.prevent="submit">
                <div class="mb-3">
                  <label for="name">Name:</label>
                  <input
                    class="form-control"
                    type="text"
                    name="name"
                    id="name"
                    v-model="fields.name"
                  />
                </div>
                <div class="mb-3">
                  <label for="email">Email:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="email"
                    id="email"
                    v-model="fields.email"
                  />
                </div>
                <div class="mb-3">
                  <label for="phone_number">Phone Number:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="phone_number"
                    id="phone_number"
                    v-model="fields.phone_number"
                  />
                </div>
                <div class="mb-3">
                  <label for="phone_number">Bio:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="bio"
                    id="bio"
                    v-model="fields.bio"
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
  name: "EditParticipantsApp",
  data() {
    return {
      success: false,
      errors: {},
      participantId: "",
      fields: {
        name: "",
        email: "",
        phone_number: "",
        bio: "",
      },
      location: {},
    };
  },
  created() {
    // Access the id parameter when the component is created
    this.participantId = this.$route.params.id;
    console.log("this.participantId", this.participantId);
  },
  methods: {
    submit() {
      axios
        .patch(
          `http://127.0.0.1:8000/api/participants/${this.participantId}`,
          this.fields
        )
        .then(() => {
          this.fields = {};
          this.success = true;
          this.errors = {};
          this.$router.push({ name: "participantsHome" });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.success = false;
        });
    },
  },
  mounted() {
    axios
      .get(`http://127.0.0.1:8000/api/participants/${this.participantId}`)
      .then((response) => {
        const data = response.data.data;
        this.fields.name = data.attributes.name;
        this.fields.email = data.attributes.email;
        this.fields.phone_number = data.attributes.phone_number;
        this.fields.bio = data.attributes.bio;
      })
      .catch((err) => console.log(err.message));
  },
};
</script>
