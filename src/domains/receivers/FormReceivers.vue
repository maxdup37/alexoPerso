<script setup lang="ts">
import {FORM_VALIDATIONS_RULES} from '~/constants/formValidationsRules.const'

/** CONFIG **/
const listSelect = [
  'Rafale config 1',
]
</script>

<template>
  <VContainer>

    <VCol>

      <h2>Add a Receiver</h2>

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

      <VTextField variant="outlined" append-inner-icon="mdi-close-circle-outline" label="Priority" />

      <VTextField variant="outlined" append-inner-icon="mdi-battery-clock" label="Refueling duration"/>

      <VTextField variant="outlined" append-inner-icon="mdi-calendar-clock" label="Requested time slot"/>

      <VTextField variant="outlined" append-inner-icon="mdi-fuel" label="Volume of supply requested"/>

      <VTextField variant="outlined" append-inner-icon="mdi-flag-plus-outline" label="Compatible countries"/>

      <VTextField variant="outlined" append-inner-icon="mdi-close-circle-outline" label="Maximum number of uses"/>

    </VCol>

  </VContainer>

  <VContainer>

    <VCol>

      <h2>Add Receiver</h2>

      <VTextField variant="outlined" append-inner-icon="mdi-close-circle-outline" label="Type" />

      <VTextField variant="outlined" append-inner-icon="mdi-close-circle-outline" label="Type of supply" />

      <VTextField variant="outlined" append-inner-icon="mdi-close-circle-outline" label="Priority" />

      <VTextField variant="outlined" append-inner-icon="mdi-battery-clock" label="Refueling duration"/>

      <VTextField variant="outlined" append-inner-icon="mdi-speedometer-slow" label="Speed"/>

      <VTextField variant="outlined" append-inner-icon="mdi-calendar-clock" label="Requested time slot"/>

      <VTextField variant="outlined" append-inner-icon="mdi-fuel" label="Volume of supply requested"/>

      <VTextField variant="outlined" append-inner-icon="mdi-flag-plus-outline" label="Country"/>

    </VCol>

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