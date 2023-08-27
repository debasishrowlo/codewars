function outed(meet, boss){
  const values = Object.values(meet)
  const total = values.reduce((acc, cur) => acc + cur, 0) + meet[boss]
  
  const happiness = total / values.length
  
  if (happiness <= 5) {
    return 'Get Out Now!'
  } else {
    return 'Nice Work Champ!'
  }
}
