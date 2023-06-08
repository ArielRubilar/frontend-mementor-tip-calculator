
import { forwardRef, type InputHTMLAttributes } from 'react'
import styles from './TextField.module.css'
import { Dollar } from '../Icons/Dollar'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean
  icon?: React.ReactNode
}

export const TextField = forwardRef<
HTMLInputElement,
TextFieldProps
>(({ isInvalid, icon = <Dollar />, ...props }, ref) => {
  return (
    <div className={styles['text-field']}>
        {Boolean(icon) && (<div className={styles.icon}>{icon}</div>)}
        <input
            aria-invalid={Boolean(isInvalid)}
            className={styles.input}
            ref={ref}
            {...props}
        />
    </div>
  )
})

TextField.displayName = 'TextField'
