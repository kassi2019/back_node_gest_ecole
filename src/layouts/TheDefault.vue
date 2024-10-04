<template>
  <menuGestionUtilisateur v-if="id_module==5"/>
<menuGestionInscription v-if="id_module==2"/>
  <TheHeader />
  <slot />
  <!-- <foot /> -->
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from "vue";
import menuGestionUtilisateur from "../layouts/menu/menuGestionUtilisateur.vue";
import menuGestionInscription from "../layouts/menu/menuGestionInscription.vue";
import TheHeader from "./TheHeader.vue";
// import foot from "./footer.vue";

export default defineComponent({
  components: {
    menuGestionUtilisateur,
    menuGestionInscription,
    TheHeader,
    // foot,
  },
  setup() {
      const id_module = ref<number | null>(null);

    onMounted(() => {
      const moduleApp = localStorage.getItem("module_app");
      if (moduleApp !== null) {
        id_module.value = Number(moduleApp);
      }
    });
    return { id_module };
  },
});
</script>
