<template>
  <div class="side-bar">
    <div :class="{ 'side-element': true, selected: isSelected(0) }" @click="activeTab = 0">
      <img class="box-icon" src="/img/icons/box.png" />
    </div>
    <div :class="{ 'side-element': true, selected: isSelected(1) }" @click="activeTab = 1">
      <img class="users-icon" src="/img/icons/users.png" />
    </div>
    <div :class="{ 'side-element': true, selected: isSelected(2) }" @click="activeTab = 2">
      <img class="card-icon" src="/img/icons/MyCards.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1
    };
  },
  methods: {
    isSelected(index) {
      if (this.activeTab == index) return true;
      return false;
    }
  }
};
</script>