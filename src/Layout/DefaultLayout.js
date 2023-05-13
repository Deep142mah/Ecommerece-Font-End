import React, {useState, useEffect} from 'react'
import MainHeader from '../Components/MainHeader'
import DefaultContent from '../Components/Content/DefaultContent'
import { useLocation } from 'react-router-dom'

const DefaultLayout = () => {
  const [state, setState] = useState(false)

  const location = useLocation()
  const path = location.pathname
 
  const checkRoute = () => {
    const arr =["login","register","forgot_password"]
    for(let i=0;i<arr.length;i++){
      if(location.pathname.split('/')[2] === arr[i]){
        setState(true)
      }
    }
  }

  useEffect(() => {
    checkRoute()
  },[path])
  

  return (
    <div className="page w-100" style={{height:'100vh',overflow:'hidden'}}>
      {state ?
    <DefaultContent />
      :
   <> <MainHeader />
    <DefaultContent />
    </>
      }
    </div>
  )
}

export default DefaultLayout