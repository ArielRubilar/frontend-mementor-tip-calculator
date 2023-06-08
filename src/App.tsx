import { Total } from './components/Total/Total'
import { Button } from './components/ui/Button/Button'
import { Card, CardContent } from './components/ui/Card/Card'
import { Title } from './components/ui/Title/Title'
import styles from './App.module.css'
import { Form } from './components/Form/Form'
import { useState } from 'react'

function App () {
  const [totalBill, setTotalBill] = useState('')
  const [tip, setTip] = useState(0)
  const [numberOfPeoples, setNumberOfPeople] = useState('1')

  const handleReset = () => {
    setTotalBill('')
    setTip(0)
    setNumberOfPeople('1')
  }

  const tipAmount = Math.round(Number(totalBill) * Number(tip) * 100) / 100

  const total = Number(numberOfPeoples) > 0 ? Math.round(tipAmount / Number(numberOfPeoples) * 100) / 100 : 0

  return (
    <div className='main-container'>

      <main>
        <Title>Spli<wbr />tter</Title>

        <Card hasShadow={true}>
          <CardContent>
            <div className={styles['main-content']}>

              <Form
                bill={totalBill}
                tip={tip}
                peoples={numberOfPeoples}
                onChangeBill={setTotalBill}
                onChangeTip={setTip}
                onChangePeoples={setNumberOfPeople}
              />

              <Card styleType='dark'>
                <CardContent className={styles.resume}>

                  <Total label='Tip Amount' amount={tipAmount} />

                  <Total label='Total' amount={ total } />

                  <Button onClick={handleReset} styleType={{ colorVariant: 'light', full: true }}> Reset</Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>

        </Card>

      </main>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>

    </div>
  )
}

export default App
