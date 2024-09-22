<template>
  <div>
    <div
      class="main-menu menu-fixed menu-light menu-accordion menu-shadow"
      data-scroll-to-active="true"
      data-img="theme-assets/images/backgrounds/02.jpg"
    >
      <div class="navbar-header">
        <ul class="nav navbar-nav flex-row">
          <li class="nav-item mr-auto">
            <a class="navbar-brand" href="index.html"
              ><img
                class="brand-logo"
                alt="Chameleon admin logo"
                src="../../../public/theme-assets/images/logo/logo.png"
              />
              <h3 class="brand-text">Chameleon</h3></a
            >
          </li>
          <li class="nav-item d-md-none">
            <a class="nav-link close-navbar"><i class="ft-x"></i></a>
          </li>
        </ul>
      </div>
      <div class="main-menu-content">
        <ul
          class="navigation navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
        >
          <li class="active" @click.prevent="pagePrecedent">
            <a href="" @click.prevent="pagePrecedent"
              ><i class="la la-reply-all"></i
              ><span class="menu-title" data-i18n="" @click.prevent="pagePrecedent">Retour Module</span></a
            >
          </li>
          <li
            class="nav-item"
            @click.prevent="activedOptionMenu(2, '/role')"
          >
            <a href=""
              ><i class="ft-pie-chart"></i
              ><span class="menu-title" data-i18n="">Role</span></a
            >
          </li>

          <li class="nav-item" @click.prevent="activedOptionMenu(2, '/utilisateur')">
            <a href=""
              ><i class="la la-user"></i
              ><span class="menu-title" data-i18n="">Utilisateur</span></a
            >
          </li>

          <li class="nav-item">
            <a href="buttons.html"
              ><i class="la la-exchange"></i
              ><span class="menu-title" data-i18n=""
                >Affectation Module</span
              ></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const menu_active = ref<number | null>(null);
function pagePrecedent() {
  router.push({ name: "presentationModule" });
}

function activedOptionMenu(value: number, route_name: string) {
  console.log(value);
  menu_active.value = value;
  router.replace(route_name);
  setTimeout(() => {
    window.location.reload();
  }, 5);
}
</script>

<style scoped>
.sidebar-closed {
  display: none;
  /* ou utiliser transform, opacity, etc. selon l'effet souhaité */
}
</style>
