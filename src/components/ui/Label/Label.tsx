import { type HTMLProps, forwardRef } from 'react'
import styles from './Label.module.css'

export const Label = forwardRef<
HTMLLabelElement,
HTMLProps<HTMLLabelElement>
>(({ children, ...props }, ref) => {
  return (
        <label className={styles.label} ref={ref} {...props}>{children}</label>
  )
})

Label.displayName = 'Label'
