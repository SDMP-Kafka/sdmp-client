<template>
  <div class="w-screen flex justify-center">
    <div class="flex flex-col items-center px-16 w-full gap-y-10">
      <div class="w-full relative">
        <img :src="searchIcon" class="w-5 h-5 absolute left-6 top-[1.1rem]" />
        <input
          class="bg-white w-full rounded-full pr-3 pl-16 py-4 flex placeholder:text-xl placeholder:text-black"
          placeholder="Search"
          type="text"
        />
      </div>
      <div class="w-full flex justify-start flex-wrap gap-8">
        <div
          v-for="(item, index) in topics"
          class="w-52 h-24 bg-white rounded-lg font-semibold text-2xl"
        >
          <h1 class="px-3 w-full h-full flex justify-center items-center">
            {{ item.topicName }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { searchIcon } from "@/assets";
import { ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const topics = ref([]);

    axios
      .get("/topic")
      .then((res) => {
        topics.value = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    return {
      topics,
    };
  },
  data() {
    return {
      searchIcon,
    };
  },
};
</script>
