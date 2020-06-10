import React from 'react'

const Total = ({ parts }) => {
  let exercises = 0
  parts.forEach(part => exercises + part.exercises)

  return <p>Number of exercises {exercises}</p>
}

export default Total
