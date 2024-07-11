import { PiggyBank } from 'lucide-react'
import React from 'react'

function Logo() {
  return (
    <a href = "/" className="flex items-center gap-2">
        <PiggyBank  className="stroe h-11 w-11 stroke-amber-500 stroke-[1.5]"/>
        <p className="bg-gradient-to-r 
                from-amber-400 to-orange-5500 
                bg-clip-text text-3xl 
                font-bold leading-tight
                tracking-tighter
                text-transparent">
            ExpenseTracker
        </p>

    </a>
  )
}

export function MobileLogo() {
    return (
      <a href = "/" className="flex items-center gap-2">
          <p className="bg-gradient-to-r 
                  from-amber-400 to-orange-5500 
                  bg-clip-text text-3xl 
                  font-bold leading-tight
                  tracking-tighter
                  text-transparent">
              ExpenseTracker
          </p>
  
      </a>
    )
  }

export default Logo