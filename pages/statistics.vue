<template>
  <div class="bg-purple-dark flex flex-col">
    <div class="container flex flex-col" style="height: 30%">
      <p class="font-semibold text-xl text-white mb-4">Statistics</p>
      <div class="flex items-center text-purple-darker bg-purple-light h-12 p-2 mb-6" style="border-radius: 50px;">
        <p
          @click="location = 'my-country'"
          class="text-sm font-semibold h-full flex-grow flex items-center justify-center transition duration-150"
          :class="{ 'bg-white': location === 'my-country', 'text-white': location !== 'my-country' }"
          style="border-radius: 50px;"
        >
          My Country
        </p>
        <p
          @click="location = 'global'"
          class="text-sm font-semibold h-full flex-grow flex items-center justify-center transition duration-150"
          :class="{ 'bg-white': location === 'global', 'text-white': location !== 'global' }"
          style="border-radius: 50px;"
        >
          Global
        </p>
      </div>
      <div class="flex justify-center text-white">
        <p v-for="time in times" :key="time" @click="currentTime = time" class="mx-8 text-sm capitalize font-semibold" :class="{ 'opacity-75': time !== currentTime }">{{ time }}</p>
      </div>
    </div>
    <div class="container flex flex-col justify-center" style="height: 35%">
      <div class="flex mb-4">
        <div class="flex flex-col flex-1 bg-orange h-24 rounded-lg mr-6 text-white justify-between p-2">
          <p class="font-semibold text-sm">Affected</p>
          <p class="text-2xl">336,851</p>
        </div>
        <div class="flex flex-col flex-1 bg-red h-24 rounded-lg text-white justify-between p-2">
          <p class="font-semibold text-sm">Death</p>
          <p class="text-2xl">9,620</p>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col flex-1 bg-green h-24 rounded-lg mr-6 text-white justify-between p-2">
          <p class="font-semibold text-sm">Recovered</p>
          <p class="text-2xl">9,620</p>
        </div>
        <div class="flex flex-col flex-1 bg-blue-light h-24 rounded-lg mr-6 text-white justify-between p-2">
          <p class="font-semibold text-sm">Active</p>
          <p class="text-2xl">9,620</p>
        </div>
        <div class="flex flex-col flex-1 bg-purple-light h-24 rounded-lg text-white justify-between p-2">
          <p class="font-semibold text-sm">Serious</p>
          <p class="text-2xl">9,620</p>
        </div>
      </div>
    </div>
    <div class="bg-white container" style="border-radius: 40px 40px 0px 0px; height: 35%">
      <div class="flex flex-col items-center justify-between h-full">
        <p class="font-semibold text-xl text-purple-darker self-start mt-1">Daily New Cases</p>
        <graph> </graph>
      </div>
    </div>
  </div>
</template>

<script>
import Graph from "@/components/Graph";

export default {
  components: { Graph },
  data() {
    return {
      location: "my-country",
      times: ["total", "today", "yesterday"],
      currentTime: "total"
    };
  }
};
</script>

<style></style>
