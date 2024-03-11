<template>
  <div>
    <div class="font-semibold pb-7">Clusters</div>
    <div class="">
      <table class="w-full">
        <thead class="bg-white">
          <th class="p-3 tracking-wide text-left">Active</th>
          <th class="p-3 tracking-wide text-left">Operations</th>
          <th class="p-3 tracking-wide text-left">Version</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in theadItems" class="font-semibold">
            <td class="text-sm p-3">{{ item.active }}</td>
            <td class="text-sm p-3">{{ item.operations }}</td>
            <td class="text-sm p-3">{{ item.version }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import OperationButton from "@/components/OperationButton/index.vue";
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
