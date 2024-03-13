<template>
  <div class="w-screen">
    <h1 class="text-3xl font-bold">Filtering</h1>
    <div class="border-b border-black border-opacity-20 w-full py-2"></div>
    <div class="pt-2">
      <h2 class="text-xl font-bold py-2 text-blue-800">Topic</h2>
      <div class="flex w-full justify-start gap-x-4 font-semibold">
        <div class="flex flex-col w-1/2">
          <label class="font-light">Input topic:</label>
          <v-select
            class="style-chooser"
            :options="filteredInputTopic"
            label="topicName"
            taggable
            v-model="topicCreate.inputTopic"
          ></v-select>
        </div>
        <div class="flex flex-col w-1/2">
          <label class="font-extralight">Output topic:</label>
          <v-select
            class="style-chooser"
            :options="
              topics.filter(
                (topic) => topic.topicName !== topicCreate.inputTopic.topicName,
              )
            "
            label="topicName"
            taggable
            v-model="topicCreate.outputTopic"
          ></v-select>
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
      <div class="flex flex-col gap-y-2">
        <div class="flex gap-x-4" v-for="(item, index) in filters">
          <div class="flex flex-col w-50">
            <label class="font-extralight">Type:</label>
            <v-select
              class="style-type font-semibold"
              :options="typeOptions"
              :reduce="(type) => type.val"
              label="type"
              v-model="item.type"
            ></v-select>
          </div>
          <div class="flex flex-col w-96">
            <label class="font-extralight">Key:</label>
            <input
              class="w-full rounded px-3 py-1 font-semibold"
              v-model="item.key"
            />
          </div>
          <div
            class="flex flex-col w-full"
            v-if="item.type === 'STRING' || item.type === 'NUMBER'"
          >
            <label class="font-extralight">Value:</label>
            <input
              class="w-full rounded px-3 py-1 font-semibold"
              v-model="item.value"
            />
          </div>
          <div v-else class="flex gap-x-4 w-full">
            <div class="w-1/2">
              <label class="font-extralight">Start value:</label>
              <input
                class="w-full rounded px-3 py-1 font-semibold"
                v-model="item.rangeStart"
              />
            </div>
            <div class="w-1/2">
              <label class="font-extralight">End value:</label>
              <input
                class="w-full rounded px-3 py-1 font-semibold"
                v-model="item.rangeEnd"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
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
    const topics = ref([]);
    axios
      .get("/topic")
      .then((res) => {
        topics.value = res.data.sort((a, b) =>
          a.topicName.localeCompare(b.topicName),
        );
      })
      .catch((err) => {
        console.log(err);
      });

    const filteredInputTopic = computed(() => {
      return topics.value.filter(
        (topic) => topic.topicName !== topicCreate.value.outputTopic.topicName,
      );
    });

    const filteredOutputTopic = computed(() => {
      return topics.value.filter(
        (topic) => topic.topicName !== topicCreate.value.inputTopic.topicName,
      );
    });

    return {
      type,
      filters,
      topicCreate,
      topics,
      filteredInputTopic,
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
      axios
        .post("/topic/newtopic", {
          inputTopic: this.topicCreate.inputTopic.topicName,
          outputTopic: this.topicCreate.outputTopic.topicName,
          filtering: this.filters,
        })
        .then((res) => {
          console.log(res.data);
          this.$toast.success("Excecute Filter Succesful");
          this.topicCreate = {
            inputTopic: "",
            outputTopic: "",
          };
          this.filters = [
            {
              type: "NUMBER",
              key: "",
              value: "",
              rangeStart: "",
              rangeEnd: "",
            },
          ];
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

<style>
@import "vue-select/dist/vue-select.css";
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: white;
  border: none;
  color: black;
}

.style-type .vs__search::placeholder,
.style-type .vs__dropdown-toggle,
.style-type .vs__dropdown-menu {
  background: white;
  border: none;
  color: black;
  width: 9rem;
}
</style>
