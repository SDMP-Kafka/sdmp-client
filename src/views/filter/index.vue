<template>
  <div class="w-screen">
    <h1 class="text-3xl font-bold">Create Filter</h1>
    <div class="border-b border-black border-opacity-20 w-full py-2"></div>
    <div class="pt-2">
      <h2 class="text-xl font-bold py-2 text-blue-800">Topic</h2>
      <div class="flex w-full justify-start gap-x-4 font-semibold">
        <div class="flex flex-col w-1/2">
          <label>Input topic:</label>
          <input
            class="w-full rounded px-3 py-1"
            v-model="topicCreate.inputTopic"
          />
        </div>
        <div class="flex flex-col w-1/2">
          <label>Output topic:</label>
          <input
            class="w-full rounded px-3 py-1"
            v-model="topicCreate.outputTopic"
          />
        </div>
      </div>
    </div>
    <div class="pt-4">
      <div class="flex justify-between items-end">
        <h2 class="text-xl font-bold text-blue-800 py-2">Filter</h2>
        <div class="pt-4 flex gap-x-2">
          <button
            class="text-blue-800 hover:text-blue-500 py-2 rounded-full font-semibold underline transition-all duration-500"
            @click="addFilter"
          >
            + filter
          </button>
          <button
            class="text-green-600 hover:text-blue-500 py-2 rounded-full font-semibold underline transition-all duration-500"
            @click="executeFilter"
          >
            execute
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-y-2 overflow-scroll">
        <div class="flex gap-x-4" v-for="(item, index) in filters">
          <div class="flex flex-col w-50">
            <label class="font-semibold">Type:</label>
            <select class="rounded p-1 font-semibold" v-model="item.type">
              <option
                v-for="(option, index) in typeOptions"
                :value="option.val"
              >
                {{ option.type }}
              </option>
            </select>
          </div>
          <div class="flex flex-col w-96">
            <label class="font-semibold">Key:</label>
            <input class="w-full rounded px-3 py-1" v-model="item.key" />
          </div>
          <div
            class="flex flex-col w-full"
            v-if="item.type === 'STRING' || item.type === 'NUMBER'"
          >
            <label class="font-semibold">Value:</label>
            <input class="w-full rounded px-3 py-1" v-model="item.value" />
          </div>
          <div v-else class="flex gap-x-4 w-full">
            <div>
              <label class="font-semibold">Start value:</label>
              <input
                class="w-full rounded px-3 py-1"
                v-model="item.rangeStart"
              />
            </div>
            <div>
              <label class="font-semibold">End value:</label>
              <input class="w-full rounded px-3 py-1" v-model="item.rangeEnd" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const type = "NUMBER";
    const filters = ref([
      { type: "NUMBER", key: "", value: "", rangeStart: "", rangeEnd: "" },
    ]);
    const topicCreate = ref({
      inputTopic: "",
      outputTopic: "",
    });
    return {
      type,
      filters,
      topicCreate,
    };
  },
  methods: {
    addFilter() {
      this.filters.push({
        type: "NUMBER",
        key: "",
        value: "",
        rangeStart: "",
        rangeEnd: "",
      });
    },
    executeFilter() {
      console.log(this.filters);
      console.log(this.topicCreate);
      axios
        .post("/topic/newtopic", {
          inputTopic: this.topicCreate.inputTopic,
          outputTopic: this.topicCreate.outputTopic,
          filtering: this.filters,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  data() {
    return {
      typeOptions: [
        { type: "Number", val: "NUMBER" },
        { type: "String", val: "STRING" },
        { type: "Range", val: "RANGE" },
      ],
    };
  },
};
</script>
