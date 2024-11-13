<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 30px;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 15px;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
  color: var(--color-heading);
}


</style>
