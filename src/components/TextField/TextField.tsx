import { forwardRef, type FC } from 'react'

import { FormField } from '../ui/FormField/FormField'
import { Input, type InputProps } from '../ui/Input/Input'
import { Label } from '../ui/Label/Label'

interface TextFieldProps extends InputProps {
  label: string
  InputComponent?: FC<InputProps>
  errorMessage?: string
}

export const TextField = forwardRef<
HTMLInputElement,
TextFieldProps
>(({ id: idProp, label, InputComponent = Input, isInvalid, errorMessage, ...props }, ref) => {
  const id = `text-field-${idProp ?? ''}`
  return (
        <FormField>
        <Label
            htmlFor={id}
            showError={isInvalid}
            message={errorMessage}
        >
            {label}
        </Label>
        <InputComponent
            isInvalid={isInvalid}
            ref={ref}
            id={id}
            type='text'
            {...props}
        />
    </FormField>
  )
})

TextField.displayName = 'TextField'
