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
                src="../../public/theme-assets/images/logo/logo.png"
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
          <li class="active">
            <a href="index.html"
              ><i class="ft-home"></i
              ><span class="menu-title" data-i18n=""
                >Dashboard{{ moduleApp }}</span
              ></a
            >
          </li>
          <li
            class="nav-item"
            @click.prevent="activedOptionMenu(2, '/structure')"
          >
            <a href=""
              ><i class="ft-pie-chart"></i
              ><span class="menu-title" data-i18n="">Charts</span></a
            >
          </li>
          <li class="nav-item has-sub open">
            <a href="#"
              ><i class="ft-layout"></i
              ><span class="menu-title" data-i18n="">General</span></a
            >
            <ul class="menu-content" style="">
              <li class="is-shown">
                <a class="menu-item" href="documentation-starter-kit.html"
                  >Starter Kit</a
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="icons.html"
              ><i class="ft-droplet"></i
              ><span class="menu-title" data-i18n="">Icons</span></a
            >
          </li>
          <li class="nav-item">
            <a href="cards.html"
              ><i class="ft-layers"></i
              ><span class="menu-title" data-i18n="">Cards</span></a
            >
          </li>
          <li class="nav-item">
            <a href="buttons.html"
              ><i class="ft-box"></i
              ><span class="menu-title" data-i18n="">Buttons</span></a
            >
          </li>
          <li class="nav-item">
            <a href="typography.html"
              ><i class="ft-bold"></i
              ><span class="menu-title" data-i18n="">Typography</span></a
            >
          </li>
          <li class="nav-item">
            <a href="tables.html"
              ><i class="ft-credit-card"></i
              ><span class="menu-title" data-i18n="">Tables</span></a
            >
          </li>
          <li class="nav-item">
            <a href="form-elements.html"
              ><i class="ft-layout"></i
              ><span class="menu-title" data-i18n="">Form Elements</span></a
            >
          </li>
          <li class="nav-item">
            <a
              href="https://themeselection.com/demo/chameleon-admin-template/documentation"
              ><i class="ft-book"></i
              ><span class="menu-title" data-i18n="">Documentation</span></a
            >
          </li>
        </ul>
      </div>
      <a
        class="btn btn-danger btn-block btn-glow btn-upgrade-pro mx-1"
        href="https://themeselection.com/products/chameleon-admin-modern-bootstrap-webapp-dashboard-html-template-ui-kit/"
        target="_blank"
        >Download PRO!</a
      >
      <div class="navigation-background"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const moduleApp = localStorage.getItem("module_app");
const router = useRouter();
const menu_active = ref<number | null>(null);

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
