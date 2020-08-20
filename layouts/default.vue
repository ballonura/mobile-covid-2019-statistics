<template>
  <div class="flex flex-col h-screen bg-gray-600">
    <my-header style="flex-basis: 85px;"></my-header>
    <Nuxt class="flex-grow" />
    <my-footer style="flex-basis: 75px;"></my-footer>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";

export default {
  components: { MyHeader, MyFooter }
};
</script>

<style>
* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
