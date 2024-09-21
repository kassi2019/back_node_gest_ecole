import { ref } from 'vue';

const isSidebarVisible = ref(true);

export function useSidebar() {
  const toggleSidebar = () => {
    isSidebarVisible.value = !isSidebarVisible.value;
  };

  return {
    isSidebarVisible,
    toggleSidebar,
  };
}