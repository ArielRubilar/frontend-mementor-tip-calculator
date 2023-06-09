import { Icons } from '../ui/Icons'
import { TextField } from '../TextField/TextField'
import { TipInput } from '../TipInput/TipInput'

import styles from './Form.module.css'

interface FormProps {
  bill: string
  onChangeBill: (bill: string) => void
  tip: string
  onChangeTip: (tip: string) => void
  peoples: string
  onChangePeoples: (peoples: string) => void
}

export const Form = ({ bill, onChangePeoples, tip, onChangeTip, peoples, onChangeBill }: FormProps) => {
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

      <TextField
        label='Bill'
        id='bill'
        placeholder='0.00'
        type='text'
        value={bill}
        onChange={(value) => {
          onlyNumberAndDot(value, onChangeBill)
        }}
      />

      <TextField
        label='Select Tip %'
        id='tip'
        InputComponent={TipInput}
        value={tip}
        icon={null}
        type="text"
        placeholder='Custom'
        onChange={value => { onlyIntNumber(value, onChangeTip) }}
      />

      <TextField
        errorMessage='Can`t be 0'
        label='Number of People'
        id='numberOfPerson'
        icon={<Icons.people />}
        placeholder='0'
        type='text'
        isInvalid={Number(peoples) <= 0}
        value={peoples}
        onChange={value => { onlyIntNumber(value, onChangePeoples) }}
      />
    </div>
  )
}
