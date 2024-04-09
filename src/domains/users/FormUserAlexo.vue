<script setup lang="ts">

import {FORM_VALIDATIONS_RULES} from "~/constants/formValidationsRules.const";
</script>

<template>
  <VCard width="40%" class="mx-auto" variant="flat">
    <h2>Add User</h2>
    <VTextField variant="outlined" append-inner-icon="mdi-close-circle-outline" label="Login"
                :rules="[FORM_VALIDATIONS_RULES.required]"/>
    <VTextField variant="outlined" append-inner-icon="mdi-close-circle-outline" label="Password"
                :rules="[FORM_VALIDATIONS_RULES.required, FORM_VALIDATIONS_RULES.passwordValid]"/>
    <VTextField variant="outlined" append-inner-icon="mdi-close-circle-outline" label="Confirm Password"
                :rules="[FORM_VALIDATIONS_RULES.required]"/>
    <VTextField variant="outlined" append-inner-icon="mdi-close-circle-outline" label="Permissions"
                :rules="[FORM_VALIDATIONS_RULES.required]"/>
  </VCard>

  <div class="btnGroup">
    <VBtn variant="text" color="primary" text="Cancel"/>
    <VBtn variant="flat" color="primary" text="Add"/>
  </div>
</template>

<style scoped>
.btnGroup {
  position: fixed;
  bottom: 10px;
  right: 10px;
}
</style>