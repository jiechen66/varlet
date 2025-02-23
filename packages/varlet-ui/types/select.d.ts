import { VarComponent, BasicAttributes, ListenerProp, Variant as SelectVariant, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const selectProps: Record<keyof SelectProps, any>

export type SelectValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onClose'

export type SelectTextAlign = 'left' | 'right' | 'center'

export type SelectSize = 'small' | 'normal'

export interface SelectProps extends BasicAttributes {
  modelValue?: any
  variant?: SelectVariant
  size?: SelectSize
  placeholder?: string
  multiple?: boolean
  offsetY?: number | string
  chip?: boolean
  line?: boolean
  hint?: boolean
  textColor?: string
  focusColor?: string
  blurColor?: string
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  separator?: string
  textAlign?: SelectTextAlign
  validateTrigger?: Array<SelectValidateTrigger>
  rules?: Array<(v: any) => any>
  onFocus?: ListenerProp<(e: Event) => void>
  onBlur?: ListenerProp<(e: Event) => void>
  onClick?: ListenerProp<(e: Event) => void>
  onClear?: ListenerProp<(value: any) => void>
  onClose?: ListenerProp<(value: any) => void>
  onChange?: ListenerProp<(value: any) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: any) => void>
}

export interface SelectArrowIconData {
  focus: boolean
  menuOpen: boolean
}

export class Select extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<SelectProps>

  $props: SelectProps

  $slots: {
    'selected'(): VNode[]
    'prepend-icon'(): VNode[]
    'clear-icon'(): VNode[]
    'append-icon'(): VNode[]
    'arrow-icon'(data: SelectArrowIconData): VNode[]
  }

  focus(): void

  blur(): void

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _SelectComponent extends Select {}
