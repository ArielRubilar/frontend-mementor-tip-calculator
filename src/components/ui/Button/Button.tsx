import { forwardRef, type ButtonHTMLAttributes } from 'react'

import styles from './Button.module.css'

interface StyleButton {
  type: 'primary'
  colorVariant: 'light' | 'dark'
  full?: boolean
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: Partial<StyleButton>
  selected?: boolean

}

export const Button = forwardRef<
HTMLButtonElement,
ButtonProps
>(({ styleType: styleTypeProps = {}, children, selected, ...props }, ref) => {
  const styleType = { ...{ type: 'primary', colorVariant: 'dark' }, ...styleTypeProps }

  const buttonType = styles[`button--${styleType.type}`]
  const buttonVariant = styles[`button--${styleType.colorVariant}`]

  const buttonFull = (styleType.full ?? false) ? styles['button--full'] : ''
  return (
        <button className={`${styles.button} ${buttonType} ${buttonVariant} ${buttonFull}`} {...props} ref={ref} aria-pressed={Boolean(selected)}>
            {children}
        </button>
  )
})

Button.displayName = 'Button'
