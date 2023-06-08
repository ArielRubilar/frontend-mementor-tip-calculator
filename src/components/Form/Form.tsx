import { Button } from '../ui/Button/Button'
import { FormField } from '../ui/FormField/FormField'
import { Icons } from '../ui/Icons'
import { Label } from '../ui/Label/Label'
import { TextField } from '../ui/TextField/TextField'
import styles from './Form.module.css'
import { useEffect, useState } from 'react'

interface FormProps {
  bill: string
  onChangeBill: (bill: string) => void
  tip: number
  onChangeTip: (tip: number) => void
  peoples: string
  onChangePeoples: (peoples: string) => void
}

const TIPS_OPTIONS = [
  5, 10, 15, 25, 50
]

export const Form = ({ bill, onChangePeoples, tip, onChangeTip, peoples, onChangeBill }: FormProps) => {
  const [customTip, setCustomTip] = useState('')

  useEffect(() => {
    if (tip === 0) setCustomTip(String(tip))
  }, [tip])

  const handleChangeTip = (tip: number) => {
    setCustomTip('')
    onChangeTip(tip / 100)
  }

  const onlyNumber = (value: string, callback: (n: string) => void) => {
    const regex = /^[\d|.]+$/

    if (value === '' || regex.test(value)) {
      callback(value)
    }
  }

  return (
        <div className={styles.form}>
            <FormField>
                <Label htmlFor="">Bill</Label>
                <TextField
                    placeholder='0.00'
                    type='text'
                    value={bill}
                    onChange={(e) => {
                      onlyNumber(e.target.value, onChangeBill)
                    }}
                />
            </FormField>

            <FormField>
                <Label htmlFor="">Select Tip %</Label>
                <div className={styles['tip-selector']}>
                    { TIPS_OPTIONS.map(option => (
                        <Button selected={tip * 100 === option} key={option} onClick={ () => { handleChangeTip(option) }} >{option} %</Button>
                    ))}
                    <TextField
                        value={customTip}
                        icon={null}
                        type="text"
                        placeholder='Custom'
                        onChange={e => {
                          onlyNumber(e.target.value, value => {
                            setCustomTip(value)
                            onChangeTip(Number(value) / 100)
                          })
                        }}
                    />
                </div>
            </FormField>

            <FormField>
                <Label htmlFor="">Number of People</Label>
                <TextField
                    icon={<Icons.people/>}
                    placeholder='0'
                    type='text'
                    isInvalid={ Number(peoples) <= 0}
                    value={peoples}
                    onChange={e => { onlyNumber(e.target.value, onChangePeoples) }}
                />
            </FormField>
        </div>
  )
}
