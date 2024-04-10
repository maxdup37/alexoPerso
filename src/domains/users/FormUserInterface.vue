<script setup lang="ts">

  const userDialog = ref(false)

  const createUser = () => {
    userDialog.value = true
    console.log("Ajout d'un utilisateur")
  }
</script>

<template>
  <VCard style="width: 75%">
    <VCardTitle class="text-right">
      <VBtn
        color="primary"
        prepend-icon="mdi-plus"
        text="ADD"
        variant="flat"
        @click="createUser"
      />
    </VCardTitle>
    <VTextField label="Login"/>
    <VTextField label="Password"/>
    <VTextField label="Confirm Password"/>
    <VTextField label="Permissions"/>
  </VCard>

</template>
