'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { useRef } from 'react'

function ReviewGrid(){
    const containerRef = useRef<HTMLDivElement | null>(null)
}


export function Reviews() {
    return (
      <MaxWidthWrapper className='relative max-w-5xl'>
        <img
          alt='what-people-are-buying.png'
          aria-hidden='true'
          src='/what-people-are-buying.png'
          className='absolute select-none hidden xl:block -left-32 top-1/3'
        />
  
        {/* <ReviewGrid /> */}
      </MaxWidthWrapper>
    )
  }