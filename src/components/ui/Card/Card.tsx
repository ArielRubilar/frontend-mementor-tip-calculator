import { type PropsWithChildren } from 'react'

import styles from './Card.module.css'

interface CardProps {
  hasShadow?: boolean
  styleType?: 'light' | 'dark'
}

export const Card = ({ children, hasShadow, styleType = 'light' }: PropsWithChildren<CardProps>) => {
  const baseStyle = styles[`card--bg-${styleType}`]
  const shadowStyle = (hasShadow ?? false) ? styles['card--shadow'] : ''
  return (
        <div className={`${styles.card} ${baseStyle} ${shadowStyle}`}>
            {children}
        </div>
  )
}

interface CardContentProps {
  className?: string
}

export const CardContent = ({ children, className = '' }: PropsWithChildren<CardContentProps>) => {
  return (
          <div className={`${styles.card__content} ${className}`}>
              {children}
          </div>
  )
}
