<template>
  <div
    :class="classes(n('action-item'), className, [disabled, n('--disabled')])"
    v-ripple="{ disabled }"
    v-hover:desktop="handleHovering"
    :style="{ color }"
  >
    <var-icon
      var-action-sheet-cover
      :class="n('action-icon')"
      :namespace="namespace"
      :name="icon"
      :size="iconSize"
      v-if="icon"
    />
    <div :class="n('action-name')">{{ name }}</div>

    <var-hover-overlay :hovering="disabled ? false : hovering" :focusing="disabled ? false : isEffectFocusing" />
  </div>
</template>

<script lang="ts">
import Ripple from '../ripple'
import VarIcon from '../icon'
import VarHoverOverlay, { useHoverOverlay } from '../hover-overlay'
import Hover from '../hover'
import { computed, defineComponent, ref } from 'vue'
import { createNamespace } from '../utils/components'
import { inMobile } from '@varlet/shared'

const { name, n, classes } = createNamespace('action-sheet')

export default defineComponent({
  name,
  components: {
    VarHoverOverlay,
    VarIcon,
  },
  directives: { Ripple, Hover },
  props: {
    name: String,
    className: String,
    disabled: Boolean,
    color: String,
    namespace: String,
    iconSize: [String, Number],
    icon: String,
  },
  setup() {
    const isEffectFocusing = inMobile() ? computed(() => false) : ref(false)
    const { hovering, handleHovering } = useHoverOverlay()

    return {
      isEffectFocusing,
      hovering,
      n,
      classes,
      handleHovering,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../icon/icon';
@import '../ripple/ripple';
@import '../popup/popup';
@import './actionSheet';
</style>
