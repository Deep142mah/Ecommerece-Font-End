import React from 'react'
import MainHeader from '../Components/MainHeader'
import MainContent from '../Components/Content/MainContent'

const MainLayout = () => {
  return (
    <div className="page w-100" style={{height:'100vh',overflow:'hidden'}}>
    <MainHeader />
    <MainContent />
    </div>
  )
}

export default MainLayout