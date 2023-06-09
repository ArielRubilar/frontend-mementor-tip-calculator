import { type PropsWithChildren } from 'react'

import styles from './FormField.module.css'

export const FormField = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles['form-field']}>
        {children}
    </div>
  )
}
