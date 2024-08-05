import React from 'react'
import HeaderBox from '../../components/HeaderBox'
import TotalBalanceBox from '../../components/TotalBalanceBox'
import RightSidebar from '../../components/RightSidebar'

const Home = () => {

  const loggedIn = {firstName : "Hana" , lastName: "Guta" , email : "hanaguta477@gmail.com"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type = "greeting"
          title = "Welcome"
          user = {loggedIn?.firstName }
          subtext = "Access and manage your accounts and transactions efficiently "
          />
        <TotalBalanceBox
        accounts = {[]}
        totalBanks = {1}
        totalCurrentBalance = {1250.30}
        />
        </header>
        Recent Transations
      </div>
      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[]}
      />
    </section>
  )
}

export default Home