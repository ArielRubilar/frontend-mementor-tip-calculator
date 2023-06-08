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
  tip: string
  onChangeTip: (tip: string) => void
  peoples: string
  onChangePeoples: (peoples: string) => void
}

const TIPS_OPTIONS = [
  5, 10, 15, 25, 50
]

export const Form = ({ bill, onChangePeoples, tip, onChangeTip, peoples, onChangeBill }: FormProps) => {
  const [customTip, setCustomTip] = useState('')

  useEffect(() => {
    if ((tip.length === 0) || tip === '0') setCustomTip(tip)
  }, [tip])

  const handleChangeTip = (tip: string) => {
    setCustomTip('')
    onChangeTip(tip)
  }

  const onlyNumberAndDot = (value: string, callback: (n: string) => void) => {
    const regex = /^[\d|.]+$/
    if (value === '' || regex.test(value)) {
      callback(value)
    }
  }

  const onlyIntNumber = (value: string, callback: (n: string) => void) => {
    const regex = /^[\d]+$/
    if (value === '' || regex.test(value)) {
      callback(value)
    }
  }

  return (
        <div className={styles.form}>
            <FormField>
                <Label htmlFor="bill">Bill</Label>
                <TextField
                    id='bill'
                    placeholder='0.00'
                    type='text'
                    value={bill}
                    onChange={(e) => {
                      onlyNumberAndDot(e.target.value, onChangeBill)
                    }}
                />
            </FormField>

            <FormField>
                <Label htmlFor="tip">Select Tip %</Label>
                <div className={styles['tip-selector']}>
                    { TIPS_OPTIONS.map(option => (
                        <Button selected={ Number(tip) === option} key={option} onClick={ () => { handleChangeTip(String(option)) }} >{option} %</Button>
                    ))}
                    <TextField
                        id='tip'
                        value={customTip}
                        icon={null}
                        type="text"
                        placeholder='Custom'
                        onChange={e => {
                          onlyIntNumber(e.target.value, value => {
                            setCustomTip(value)
                            onChangeTip(value)
                          })
                        }}
                    />
                </div>
            </FormField>

            <FormField>
                <Label
                    htmlFor="numberOfPerson"
                    showError={Number(peoples) <= 0}
                    message='Can`t be 0'
                >
                    Number of People
                </Label>
                <TextField
                    id='numberOfPerson'
                    icon={<Icons.people/>}
                    placeholder='0'
                    type='text'
                    isInvalid={ Number(peoples) <= 0}
                    value={peoples}
                    onChange={e => { onlyIntNumber(e.target.value, onChangePeoples) }}
                />
            </FormField>
        </div>
  )
}
