import React from 'react'
import CountriesList from "./CountriesList"
import BattlesList from './BattlesList'
import { useState, useEffect } from "react"


const InfoPanel = ({ countriesData, battlesNames, battleLocs, panFunc }) => {
  const [showDisplay, setShowDisplay] = useState(true)
  const [country, setCountry] = useState("")

  const showBattles = (countryName) => {
    setCountry(countryName)
  }

  const onReset = () => {
    setCountry("")
    panFunc([40, 10],2)
  }
  const onRightArrow = () => {

  }
  const onLeftArrow = () => {
    setCountry("")
  }
  
  return (
    <div className='infoPanel'>
      { showDisplay ? (
        <>
          <div className="displayFuncBtns">
            <button onClick={() => setCountry("")}>{"<"}</button>
            <button disabled>{">"}</button>
            <button onClick={onReset}>reset</button>

            <button className='arrow' onClick={() => setShowDisplay(!showDisplay)}>{"X"}</button>
          </div>
          <div className='selectCountry'>{ country  ? (
              <>
                <h2>{country}</h2>
                <BattlesList data={battlesNames} panToBattle={panFunc} country={country} battleLocations={battleLocs}/>
              </>
          ) : (
              <>
                <h2>Choose Country</h2>
                <CountriesList data={countriesData} panToCountry={panFunc} showBattles={showBattles}/>
              </>
            )}
          </div>



        </>
      ) : (
        <button className='arrow' onClick={() => setShowDisplay(!showDisplay)}>{"Open Display"}</button>

      )}
    {/* { country != " " ? (<h1>h</h1>) : (<h1>g</h1>) } */}

    </div>
  )
}

export default InfoPanel