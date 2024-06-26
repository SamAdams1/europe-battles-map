import React, { useState } from 'react'
import NavSideBar from './NavSideBar'
import Table from './Table'

const BattlePage = ({nameData, locationData}) => {
  const [showNav, setShowNav] = useState(true)


  function getTotalBattles(countryName) {
    try {
      let total = locationData[countryName].numBattlesInCountry
      return total
    } catch {
      return 0
    }
  }

  return (
    <div className='battlePage'>
      <a href='https://en.wikipedia.org/wiki/List_of_battles_by_geographic_location' target='_blank'>
        <h1>All Battles</h1>
      </a>
      <button className='showHideNav' onClick={() => setShowNav(!showNav)}>{ showNav ? (<>Hide</>) : (<>Show</>)} Side Bar</button>
      { showNav &&  
        <NavSideBar countryList={Object.keys(nameData)}/>
      }

      { Object.keys(nameData).map((country) => {
        if (country != "_id") {
        const [collapseable, setCollapseable] = useState(true)
        const totalBattles = getTotalBattles(country)
        return (
          <div key={"title"+country} className='countrySect'>
            {/* <h1 className='stick'>{country}</h1> */}
            <div className='countryTitle'>
              <h1 id={country}>{country}</h1>
              <h2>{totalBattles} / {nameData[country].length} battles </h2>
              { totalBattles > 0 && 
              <button onClick={() => setCollapseable(!collapseable)}>{collapseable ? (<>hide</>) : ( <>show</>)}</button>
              }
            </div>
            { totalBattles > 0 && 
            <table>
              <tbody>
                { collapseable && <Table battleNames={nameData} battleLocs={locationData} country={country} /> }
              </tbody>
            </table>
            }
          </div>
        )
      }})}

    </div>
  )
}

export default BattlePage