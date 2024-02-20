<template>
  <div class="hello">
    <h4>Participants</h4>
    <p class="text-muted">Participants Information</p>
    <div class="container">
      <div class="row">
        <div class="col">
          <table class="table table-striped table-sm small">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Bio</th>
                <th scope="col">Created</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody v-for="participant in participants" :key="participant.id">
              <tr>
                <th scope="row">{{ participant.id }}</th>
                <td>{{ participant.attributes.name }}</td>
                <td>{{ participant.attributes.email }}</td>
                <td>{{ participant.attributes.phone_number }}</td>
                <td>{{ participant.attributes.bio }}</td>
                <td>{{ participant.attributes.created_at }}</td>
                <td>
                  <router-link
                    class="btn btn-info"
                    :to="{
                      name: 'ParticipantsEditView',
                      params: { id: participant.id },
                    }"
                    >Edit
                  </router-link>
                  <button
                    class="btn btn-danger"
                    @click="destroy(participant.id)"
                  >
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
  name: "ParticipantsApp",
  data() {
    return {
      participants: [],
    };
  },
  mounted() {
    this.loadRecords();
  },
  methods: {
    loadRecords() {
      axios
        .get("http://127.0.0.1:8000/api/participants")
        .then((response) => {
          this.participants = response.data.data;
        })
        .catch((err) => console.log(err.message));
    },
    destroy(id) {
      axios
        .delete(`http://127.0.0.1:8000/api/participants/${id}`)
        .then(() => {
          this.loadRecords();
        })
        .catch((err) => console.log(err.message));
    },
  },
};
</script>
