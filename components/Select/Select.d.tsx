interface Options {
  value: number,
  label: string
}

export interface SelectProps {
  placeholder?: string
  defaultValue?: string
  label: string
  defaultOptions?: Options[]
  numberOptionsValue?: boolean
  onChange: (event: React.FormEvent<HTMLSelectElement>) => void
  onBlur?: (event: React.FormEvent<HTMLSelectElement>) => void
  onFocus?: (event: React.FormEvent<HTMLSelectElement>) => void
  onSubmit?: (event: React.FormEvent<HTMLSelectElement>) => void
  onKeyDown?: (event: React.FormEvent<HTMLSelectElement>) => void
  onKeyPress?: (event: React.FormEvent<HTMLSelectElement>) => void
  onKeyUp?: (event: React.FormEvent<HTMLSelectElement>) => void
}