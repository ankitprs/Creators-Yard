import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'

function Protected({
  children, authentication = false
}) {
  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)
  const authStatus = useSelector(state => state.auth.status)

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      // navigate("/login")
    } else if (!authentication && authStatus !== authentication) {
      // navigate("/dashboard")
    }
    setLoader(false)
  }, [authStatus, navigate, authentication])

  return (
    loader ? <h1> loading...</h1> : <div className='w-full'>{children}</div>
  )
}

export default Protected