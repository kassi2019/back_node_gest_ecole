<template>
  <div  :class="{ 'sidebar-open': isSidebarVisible, 'sidebar-closed': !isSidebarVisible }">
    <component :is="layout">
      <transition
        name="fade"
        mode="out-in"
        @beforeleave="beforeLeave"
        @enter="enter"
        @afterenter="afterEnter"
      >
      <router-view />
      </transition>
      
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useSidebar } from "../src/config/useSidebar"; // Importer le composable useSidebar

// import ConnectionStatus from "@/views/ConnexionState/ConnexionStatus.vue";
// import SpeedCheck from "@/views/ConnexionState/SpeedCheck.vue";

export default defineComponent({
  components: {},
  setup() {
    const route = useRoute();
    const prevHeight = ref<string | null>(null);

    const defaultLayout = "default";
    const layout = computed(() => {
      return (route.meta.layout || defaultLayout) + "-layout";
    });

    const { isSidebarVisible } = useSidebar(); // Utiliser isSidebarVisible du composable

    const beforeLeave = (element: HTMLElement) => {
      prevHeight.value = getComputedStyle(element).height;
    };

    const enter = (element: HTMLElement) => {
      const { height } = getComputedStyle(element);

      if (prevHeight.value) {
        element.style.height = prevHeight.value;
      }

      setTimeout(() => {
        element.style.height = height;
      });
    };

    const afterEnter = (element: HTMLElement) => {
      element.style.height = "auto";
    };

    const handleOnlineStatusChanged = (isOnline: boolean) => {};

    watch(
      () => route.fullPath,
      () => {
        setTimeout(() => {}, 900);
      }
    );

    return {
      layout,
      beforeLeave,
      enter,
      afterEnter,

      handleOnlineStatusChanged,

      isSidebarVisible, // Retourner l'état du sidebar pour l'utiliser dans le template
    };
  },
});
</script>

<style scoped>
/* Styles par défaut lorsque le sidebar est ouvert */
.sidebar-open {
  margin-left: 0; /* Par exemple, ajustez cette valeur selon la largeur du sidebar */
  transition: margin-left 0.3s ease;
}

/* Styles lorsque le sidebar est fermé */
.sidebar-closed {
  margin-left: -300px;
  transition: margin-left 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
