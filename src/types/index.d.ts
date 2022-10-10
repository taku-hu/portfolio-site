// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'

// eslint-disable-next-line no-unused-vars
import type { GlobalComponents, Component } from 'vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    FaIcon: Component<FontAwesomeIconProps>
  }
}
