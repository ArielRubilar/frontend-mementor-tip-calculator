import { type LabelHTMLAttributes, forwardRef } from 'react'

import styles from './Label.module.css'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  showError?: boolean
  message?: string
}

export const Label = forwardRef<
HTMLLabelElement,
LabelProps
>(({ children, showError, message, ...props }, ref) => {
  return (
        <label className={styles.label} ref={ref} {...props}>{children} { Boolean(showError) && <span className={styles.error}>{message}</span>}</label>
  )
})

Label.displayName = 'Label'
