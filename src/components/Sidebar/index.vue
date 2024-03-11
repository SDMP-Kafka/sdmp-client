<template>
  <aside class="h-screen">
    <div
      class="h-full flex flex-col w-48 bg-white justify-start items-center py-10"
    >
      <h1 class="text-3xl font-bold py-8">Logo</h1>
      <ul class="flex flex-col justify-start items-center gap-y-6">
        <li
          v-for="(item, index) in SidebarItems"
          class="font-semibold hover:bg-blue-600 hover:text-white rounded-3xl w-28 flex px-5 py-1 duration-200 items-center justify-center"
          :class="isSidebarActive(item.path) ? 'bg-blue-600 text-white' : ''"
        >
          <router-link :to="item.path">
            {{ item.title }}
          </router-link>
          <div></div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      SidebarItems: [
        { title: "Home", path: "/" },
        { title: "Cluster", path: "/cluster" },
        { title: "Brokers", path: "/brokers" },
        { title: "Topics", path: "/topics" },
        { title: "Consumer", path: "/consumer" },
        { title: "Filter", path: "/filter" },
        { title: "+ Import", path: "/import" },
      ],
    };
  },
  methods: {
    isSidebarActive(curPath) {
      if (this.$route.path === curPath) {
        return true;
      }
      return false;
    },
  },
};
</script>
