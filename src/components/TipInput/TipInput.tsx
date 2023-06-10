import { forwardRef, useEffect, useState } from 'react'

import { Button } from '../ui/Button/Button'
import { Input, type InputProps } from '../ui/Input/Input'

import styles from './TipInput.module.css'

const TIPS_OPTIONS = [
  5, 10, 15, 25, 50
]

export const TipInput = forwardRef<
HTMLInputElement,
InputProps & { tipOptions?: number[] }
>(({ value = '', tipOptions = TIPS_OPTIONS, onChange: onChangeTip, ...props }, ref) => {
  const [customTip, setCustomTip] = useState('')

  const tip = String(value ?? '')

  useEffect(() => {
    if ((tip.length === 0) || tip === '0') setCustomTip(tip)
  }, [tip])

  const handleChangeTip = (tip: string) => {
    setCustomTip('')
    onChangeTip(tip)
  }

  const handleChangeCustomTip = (tip: string) => {
    setCustomTip(tip)
    onChangeTip(tip)
  }

  return (
        <div className={styles['tip-selector']}>
            { tipOptions.map(option => (
                <Button selected={ Number(tip) === option} key={option} onClick={ () => { handleChangeTip(String(option)) }} >{option} %</Button>
            ))}
            <Input
                value={customTip}
                {...props}
                ref={ref}
                onChange={ (e) => { handleChangeCustomTip(e) } }
            />
        </div>
  )
})

TipInput.displayName = 'TipInput'
