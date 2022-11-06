<template>
  <div>
    <main>
      <div class="container">
        <RouterView />
      </div>
    </main>
  </div>
</template>
<script>
  import { mapState } from "vuex";
  import { mapGetters } from "vuex";
  // 後々追加予定
  // import ResizeMixin from "./mixin/resize-handler.js";
  // import Navbar from "./components/NavbarComponent";
  // import Sidebar from "./components/SidebarComponent.vue";
  import store from './store';
</script>
