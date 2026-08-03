<script setup lang="ts">
const { mediaId, favourited } = defineProps({
  mediaId: {
    type: Number,
    required: true
  },
  favourited: {
    type: Boolean,
    required: true
  }
});
const emit = defineEmits(["retrieveCheckedValue"]);
const isChecked = ref(favourited);
const handleCheckboxChange = () => {
  emit("retrieveCheckedValue", mediaId, isChecked.value);
}
console.log(favourited);
</script>

<template>
 <div class="container">
   <input @change="handleCheckboxChange" type="checkbox" :id="`heart-${mediaId}`" v-model="isChecked"/>
   <label :for="`heart-${mediaId}`">{{ isChecked ? '💛' : '🤍' }}</label>
</div>
</template>


<style lang="scss" scoped>
.container {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 2rem;
  height: 2rem;
}
/*      CHECKBOX         */
input[type="checkbox"] {
    display: none;
}

input[type="checkbox"] + label {
    position: relative;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
}
 
input[type="checkbox"] + label:before {
    /* content: "\1F90D"; */
    top: -11px;
    left: -8px;
    border: 1px solid transparent;    
    padding: 10px;
    border-radius: 3px;
    display: block;
    position: absolute;
	transition:  .5s ease;
}


input[type="checkbox"]:checked + label:before {
    border: 1px solid transparent;
    background-color: transparent;
}

input[type="checkbox"]:checked + label:after {
    /* content: '\1F49B'; */
    font-size: 18px;
    position: absolute;
    top: -1px;
    left: 1px;
	color: gold;
	transition:  .5s ease;
}
</style>
