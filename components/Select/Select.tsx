import React from "react"
import { 
  SelectStyle, 
  SelectLabel,
  SelectWrapper 
} from "./Select.styles"
import { SelectProps } from "./Select.d"

import { OPTIONS_NUMBER_VALUE } from "./selectConstants"

const Select: React.FC<SelectProps> = ({
  placeholder,
  defaultValue,
  defaultOptions,
  numberOptionsValue,
  label,
  onChange,
  onBlur,
  onFocus,
  onSubmit,
  onKeyDown,
  onKeyPress,
  onKeyUp
}) => {
  const options = (numberOptionsValue ? OPTIONS_NUMBER_VALUE : defaultOptions).map(option => {
    return <option key={option.value} value={option.value}>{option.label}</option>
  })
  return (
    <SelectWrapper>
      <SelectLabel>{label}</SelectLabel>
      <SelectStyle
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onSubmit={onSubmit}
        onKeyDown={onKeyDown}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        >
          {options}
        </SelectStyle>
    </SelectWrapper>
  )
}

export default Select;