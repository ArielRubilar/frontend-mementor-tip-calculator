import { Icons } from '../ui/Icons'

import styles from './Total.module.css'

interface TotalProps {
  label: string
  amount: number
  divisionType?: string
}

export const Total = ({ label, amount, divisionType = 'person' }: TotalProps) => {
  return (
        <div className={styles.container}>
        <p className={styles.label}>
            {label}
          <span>/ {divisionType}</span>
        </p>
        <p className={styles.amount}><Icons.dollar></Icons.dollar>{ amount.toFixed(2)}</p>
      </div>
  )
}
