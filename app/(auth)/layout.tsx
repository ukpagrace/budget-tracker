import React, { ReactNode } from 'react'
import Logo from '../../components/Logo'

function layout({children}: {children: ReactNode}) {
  return (
    <div className="relative fex h-screen w-full flex-col items-center justify-center">
        <Logo/>
        {children}
    </div>
  )
}

export default layout