import { forwardRef, type InputHTMLAttributes } from 'react'

import { Dollar } from '../Icons/Dollar'

import styles from './Input.module.css'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' > {
  isInvalid?: boolean
  icon?: React.ReactNode
  onChange: (value: string) => void
}

export const Input = forwardRef<
HTMLInputElement,
InputProps
>(({ onChange, isInvalid, icon = <Dollar />, ...props }, ref) => {
  return (
    <div className={styles['text-field']}>
        {Boolean(icon) && (<div className={styles.icon}>{icon}</div>)}
        <input
            onChange={ e => { onChange(e.target.value) }}
            aria-invalid={Boolean(isInvalid)}
            className={styles.input}
            ref={ref}
            {...props}
        />
    </div>
  )
})

Input.displayName = 'Input'
