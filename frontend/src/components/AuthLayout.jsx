import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../store/atoms/authAtom'

function Protected({
  children, authentication = false
}) {
  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)
  const user = useRecoilValue(userAtom)
  const authStatus = user != null

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login")
    } else if (!authentication && authStatus !== authentication) {
      navigate("/dashboard")
    }
    setLoader(false)
  }, [authStatus, navigate, authentication])

  return (
    loader ? <h1> loading...</h1> : <div className='w-full'>{children}</div>
  )
}

export default Protected