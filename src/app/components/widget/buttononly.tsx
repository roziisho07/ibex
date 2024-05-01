import React from 'react'
import Link from 'next/link'

export default function Buttononly() {
  return (
    <div className='flex items-center justify-center'>
       <Link href={'/blogs/blogsnext'}><button className="bg-slate-600 hover:bg-slate-800 text-white mb-20 rounded-lg pr-6 pl-6 pt-2 pb-2">
              NEXT PAGE
            </button></Link> 
    </div>
  )
}
