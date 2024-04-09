<script setup lang="ts">
  import {FORM_VALIDATIONS_RULES} from '~/constants/formValidationsRules.const'
  /** CONFIG **/
  const listSelect = [
    'A400M Refueler',
  ]

</script>

<template>
  <VContainer style="width: 500px">

    <VTextField variant="outlined" append-inner-icon="mdi-close-circle-outline" label="Callsign" />

    <v-select
      variant="outlined"
      :items="listSelect"
      item-title="text"
      item-value="value"
      label="Type"
      :rules="[FORM_VALIDATIONS_RULES.required]"
    />

    <VTextField variant="outlined" append-inner-icon="mdi-close-circle-outline" label="Type of supply" />

    <VTextField variant="outlined" append-inner-icon="mdi-map-marker" label="Takeoff coordinates"/>

    <VTextField variant="outlined" append-inner-icon="mdi-map-marker" label="Landing coordinates"/>

    <VTextField variant="outlined" append-inner-icon="mdi-close-circle-outline" label="Capacity"/>

    <VTextField variant="outlined" append-inner-icon="mdi-fuel" label="Fuel consumption"/>

    <VTextField variant="outlined" append-inner-icon="mdi-speedometer-slow" label="Speed"/>

    <VTextField variant="outlined" append-inner-icon="mdi-wrench-clock-outline" label="Maintenance time"/>

    <VTextField variant="outlined" append-inner-icon="mdi-airplane-clock" label="Refueling configuration changeover time"/>

    <VTextField variant="outlined" append-inner-icon="mdi-flag-plus-outline" label="Compatible countries"/>

    <VTextField variant="outlined" append-inner-icon="mdi-close-circle-outline" label="Maximum number of uses"/>

  </VContainer>

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
