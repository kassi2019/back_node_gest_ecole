import { useRouter } from "vue-router";

export function lifeCycleOfToken() {
  // Vérifier si le hook useRouter peut être utilisé dans ce contexte
  try {
    const router = useRouter();
    if (!router) {
      throw new Error("Router is undefined");
    }
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.replace("/connexion");
  } catch (error) {
    console.error("Failed to navigate:", error);
  }
}
