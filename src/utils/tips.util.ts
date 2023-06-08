export const calculateTip = (billTotal: number, tip: number) => {
  return Math.round(Number(billTotal) * Number(tip / 100) * 100) / 100
}

export const calculateTotalPerPerson = (totalTip: number, numberOfPerson: number) => {
  return Number(numberOfPerson) > 0 ? Math.round(totalTip / Number(numberOfPerson) * 100) / 100 : 0
}
