import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LocationCreateView from "../views/LocationCreateView.vue";
import LocationEditView from "@/views/LocationEditView.vue";

import ParticipantsApp from "@/components/ParticipantsApp.vue";
import CreateParticipantsApp from "@/components/CreateParticipantsApp.vue";
import ParticipantEditView from "@/views/ParticipantEditView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/locations/create",
    name: "LocationsCreate",
    component: LocationCreateView,
  },
  {
    path: "/locations/edit/:id",
    name: "LocationEditView",
    component: LocationEditView,
  },
  {
    path: "/participants",
    name: "participantsHome",
    component: ParticipantsApp,
  },
  {
    path: "/participants/create",
    name: "participantsCreate",
    component: CreateParticipantsApp,
  },
  {
    path: "/participants/edit/:id",
    name: "ParticipantsEditView",
    component: ParticipantEditView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
