<script setup lang="ts">
  import AppDarkModeBtn from '~/components/AppDarkModeBtn.vue'
  import AppNavigationDrawerConsult from '~/components/AppNavigationDrawerConsult.vue'
  import AppNavigationDrawerPlanif from '~/components/AppNavigationDrawerPlanif.vue'

  const darkMode = ref<'light' | 'dark'>('dark')
  const {mobile} = useDisplay()
  const drawer = ref(!mobile.value)

  /** STORES **/
  const {text, color, show} = storeToRefs(useSnackbar())

  const handleClick = () => {
    drawer.value = !drawer.value
  }
</script>

<template>
  <VApp :theme="darkMode">
    <VLayout class="rounded rounded-md">
<!--      TODO: A switcher entre AppNavigationDrawerConsult ou AppNavigationDrawerPlanif pour visuel -->
      <AppNavigationDrawerConsult v-model="drawer" />
      <VAppBar title="Application bar">
        <template
          #prepend
          v-if="mobile"
        >
          <AppNavigationDrawerBtn @click="handleClick" />
        </template>
        <template #append>
          <AppDarkModeBtn v-model="darkMode" />
        </template>
      </VAppBar>

      <VMain
        class="d-flex align-center justify-center"
        style="min-height: 300px"
      >
        <slot />
      </VMain>
      <VSnackbar
        v-model="show"
        :text="text"
        :color="color"
      />
    </VLayout>
  </VApp>
</template>

<style>
  html {
    overflow: auto;
  }
</style>
