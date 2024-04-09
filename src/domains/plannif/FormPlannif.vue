<script setup lang="ts">
const items = [
  {
    text: "ALPHA",
    date: "2023-12-06",
    bubbles: ["FL 260", "FL 190"]
  },
  {
    text: "BRAVO",
    date: "2023-12-07",
    bubbles: ["FL 190", "FL 140", "FL 260"]
  },
  {
    text: "NTM",
    date: "2023-12-08",
    bubbles: ["FL 260"]
  },
  {
    text: "RECALL 12",
    date: "2023-12-09",
    bubbles: ["FL 190", "FL 140", "FL 400", "FL 140"]
  }
];
</script>

<template>
  <VCard width="40%" class="mx-auto" variant="flat">
    <div class="square" v-for="(item, index) in items" :key="index">
      <!-- Icône et texte -->
      <div class="icon"><VIcon icon="mdi-vector-circle" size="55"/><span>{{ item.text }}</span></div>
      <!-- Date -->
      <div class="bubble date">{{ item.date }}</div>
      <!-- Bulles -->
      <div class="bubbles">
        <div class="bubble" v-for="(bubble, index) in item.bubbles" :key="index">{{ bubble }}</div>
      </div>
    </div>
  </VCard>
</template>

<style scoped>
/* Style pour le carré bleu */
.square {
  width: 250px;
  height: 250px;
  background-color: #0F2C69;
  position: relative;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  color: white;
}

/* Style pour l'icône */
.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  display: flex; /* Utilisation de flexbox */
  align-items: center; /* Alignement vertical */
  justify-content: center; /* Alignement horizontal */
}

.icon span {
  margin-left: 25px; /* Marge à gauche pour séparer l'icône du texte */
  white-space: nowrap; /* Empêcher le texte de se casser sur plusieurs lignes */
}

/* Style pour la date */
.date {
  position: absolute;
  bottom: 10px;
  right: 30%;
}

/* Style pour la bulle */
.bubbles {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex; /* Utilisation de flexbox */
  flex-direction: row; /* Alignement horizontal */
}

.bubble {
  background-color: #009CF6;
  border-radius: 15px;
  border: 2px solid white; /* Contour blanc */
  padding: 5px 10px; /* Ajustement du padding */
  margin-right: 5px; /* Marge entre les bulles */
  font-size: 12px;
}
</style>