import React, { useState } from 'react'
import "./BMI.css"

function BMICalculator() {
    const [height,setHeight]=useState('')
    const [weight,setweight]=useState('')
    const [bmi,setBmi]=useState(null)
    const [category,setCategory]=useState('')

    const calculateMBI = ()=>{
        if(height && weight){
            const heightinmeters = height / 100
            const bmi = (weight /(heightinmeters * heightinmeters)).toFixed(2)
            setBmi(bmi)

            if(bmi < 18.5){
                setCategory('underweight')
            }
            else if(bmi >= 18.5 && bmi <= 24.9){
                setCategory('normal weight')
        }else if(bmi >=25 && bmi <= 29.9){
            setCategory('over weight')
        }else {
            setCategory('obese')
        }

    }
}


  return (
    <div className='bmi-card'>
        <h2>BMI Calculator</h2>
        <div className='input-group'>

            <label>weight (kg)</label>
            <input type="number" value={weight} onChange={(e)=> setweight(e.target.value)} placeholder='enter your weight' />

        </div>
        <div className='input-group'>
            
            <label>height (cm)</label>
            <input type="number" value={height} onChange={(e)=> setHeight(e.target.value)} placeholder='enter your height' />

        </div>
        <button className='btn-calculator' onClick={calculateMBI}>Calculate</button>
        {
            bmi &&(
                <div className='result'>
                    <h3>Your BMI : {bmi}</h3>
                    <h4>category : {category}</h4>

                </div>
            )
        }
    </div>
  )
}

export default BMICalculator