<template>
  <div>
    <div class="flex sm:hidden flex-col h-screen bg-gray-600">
      <my-header style="flex-basis: 85px;"></my-header>
      <Nuxt class="flex-grow" />
      <my-footer style="flex-basis: 75px;"></my-footer>
    </div>
    <div class="hidden sm:block">
      Not yey implemented... :)
    </div>
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
