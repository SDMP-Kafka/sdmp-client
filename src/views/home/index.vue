<template>
  <div>
    <div class="font-semibold pb-7">Clusters</div>
    <div class="w-[30rem]">
      <table class="w-full">
        <thead class="bg-white">
          <th class="p-3 tracking-wide text-left">Active</th>
          <th class="p-3 tracking-wide text-left">Operations</th>
          <th class="p-3 tracking-wide text-left">Version</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in theadItems" class="font-semibold">
            <td class="text-sm p-3 text-left">{{ item.active }}</td>
            <td class="text-sm p-3 justify-center items-center flex gap-x-2">
              <button
                class="bg-white border-[0.7px] border-black px-1 rounded text-blue-600"
              >
                modify
              </button>
              <button
                class="bg-white border-[0.7px] border-black px-1 rounded"
                :class="
                  item.operations === 'enable'
                    ? 'text-red-500'
                    : 'text-green-500'
                "
              >
                {{ item.operations }}
              </button>
            </td>
            <td class="text-sm p-3 text-right">{{ item.version }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theadItems: [
        { active: "wordcount-cluster", operations: "enable", version: "3.2.0" },
        { active: "wordcount-cluster", operations: "enable", version: "3.2.0" },
        {
          active: "wordcount-cluster",
          operations: "disable",
          version: "3.2.0",
        },
      ],
    };
  },
};
</script>
