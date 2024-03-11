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
          v-for="(item, index) in mockTopic"
          class="w-52 h-24 bg-white rounded-lg font-semibold text-2xl flex justify-center items-center"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { searchIcon } from "@/assets";
export default {
  data() {
    return {
      searchIcon,
      mockTopic: [
        { title: "Topic A", id: "topica" },
        { title: "Topic B", id: "topicb" },
        { title: "Topic C", id: "topicc" },
        { title: "Topic E", id: "topicd" },
        { title: "Topic F", id: "topice" },
        { title: "Topic G", id: "topicf" },
        { title: "Topic H", id: "topicg" },
        { title: "Topic I", id: "topich" },
        { title: "Topic J", id: "topici" },
      ],
    };
  },
};
</script>
