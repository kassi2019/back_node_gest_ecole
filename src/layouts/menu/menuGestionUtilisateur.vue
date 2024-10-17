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
                src="/theme-assets/images/logo/logo.png"
              />
              <h3 class="brand-text" style="font-size: 16px">PARAMETRAGE</h3></a
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
              ><span
                class="menu-title"
                data-i18n=""
                @click.prevent="pagePrecedent"
                >Retour Module</span
              ></a
            >
          </li>

          <li
            class="nav-item"
            @click.prevent="activedOptionMenu(2, '/anneeScolaire')"
          >
            <a href=""
              ><i class="la la-list-ol"></i
              ><span class="menu-title" data-i18n="">Année Scolaire</span></a
            >
          </li>
          <li
            class="nav-item"
            @click.prevent="activedOptionMenu(2, '/etablissement')"
          >
            <a href=""
              ><i class="la la-home"></i
              ><span class="menu-title" data-i18n="">Etablissement</span></a
            >
          </li>
          <li class="nav-item" @click.prevent="activedOptionMenu(2, '/bareme')">
            <a href=""
              ><i class="la la-pencil-square"></i
              ><span class="menu-title" data-i18n="">Barèmes </span></a
            >
          </li>
          <li class="nav-item" @click.prevent="activedOptionMenu(2, '/cycle')">
            <a href=""
              ><i class="la la-reorder"></i
              ><span class="menu-title" data-i18n="">Cycle</span></a
            >
          </li>
          <li class="nav-item" @click.prevent="activedOptionMenu(2, '/classe')">
            <a href=""
              ><i class="la la-university"></i
              ><span class="menu-title" data-i18n="">Classe</span></a
            >
          </li>
          <li
            class="nav-item"
            @click.prevent="activedOptionMenu(2, '/SousClasse')"
          >
            <a href=""
              ><i class="la la-university"></i
              ><span class="menu-title" data-i18n="">Sous Classe</span></a
            >
          </li>
          <li
            class="nav-item"
            @click.prevent="activedOptionMenu(2, '/typeMatiere')"
          >
            <a href=""
              ><i class="la la-book"></i
              ><span class="menu-title" data-i18n="">Type matiere</span></a
            >
          </li>
          <li
            class="nav-item"
            @click.prevent="activedOptionMenu(2, '/matiere')"
          >
            <a href=""
              ><i class="la la-pencil-square"></i
              ><span class="menu-title" data-i18n="">Matiere</span></a
            >
          </li>
          <li
            class="nav-item"
            @click.prevent="activedOptionMenu(2, '/fonction')"
          >
            <a href=""
              ><i class="la la-unsorted"></i
              ><span class="menu-title" data-i18n="">Fonction</span></a
            >
          </li>
          <!-- <li
            class="nav-item"
            @click.prevent="activedOptionMenu(2, '/emploi')"
          >
            <a href=""
              ><i class="la la-unsorted"></i
              ><span class="menu-title" data-i18n="">Emploi</span></a
            >
          </li> -->
          <li
            class="nav-item"
            @click.prevent="activedOptionMenu(2, '/economique')"
          >
            <a href=""
              ><i class="la la-bars"></i
              ><span class="menu-title" data-i18n="">Economique</span></a
            >
          </li>
          <li
            class="nav-item"
            @click.prevent="activedOptionMenu(2, '/associeStructure')"
          >
            <a href=""
              ><i class="la la-bars"></i
              ><span class="menu-title" data-i18n="">Associé structure</span></a
            >
          </li>

          <li class="nav-item" @click.prevent="activedOptionMenu(2, '/budget')">
            <a href=""
              ><i class="la la-money"></i
              ><span class="menu-title" data-i18n="">Budget</span></a
            >
          </li>
          <li class="nav-item" @click.prevent="activedOptionMenu(2, '/role')">
            <a href=""
              ><i class="la la-thumbs-o-up"></i
              ><span class="menu-title" data-i18n="">Rôle</span></a
            >
          </li>

          <li
            class="nav-item"
            @click.prevent="activedOptionMenu(2, '/utilisateur')"
          >
            <a href=""
              ><i class="la la-users"></i
              ><span class="menu-title" data-i18n="">Personnel</span></a
            >
          </li>
          <li
            class="nav-item"
            @click.prevent="activedOptionMenu(2, '/Affectation')"
          >
            <a href="buttons.html"
              ><i class="la la-exchange"></i
              ><span class="menu-title" data-i18n="" style="font-size: 13px"
                >Affectation module</span
              ></a
            >
          </li>
          <li
            class="nav-item"
            @click.prevent="activedOptionMenu(2, '/affectationClasse')"
          >
            <a href="buttons.html"
              ><i class="la la-exchange"></i
              ><span class="menu-title" data-i18n="" style="font-size: 13px"
                >Affectation Classe</span
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
