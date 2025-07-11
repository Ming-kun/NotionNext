'use client'
import dynamic from 'next/dynamic'
import React from 'react'
import 'react-before-after-slider-component/dist/build.css'

// 动态导入避免服务器端渲染报错
const ReactBeforeSlider = dynamic(
  () => import('react-before-after-slider-component'),
  { ssr: false }
)

export default function BeforeAfterSlider () {
  const BEFORE = '/images/slider-720.jpg'
  const AFTER  = '/images/slider-1080.jpg'

  return (
    <section className='mx-auto my-16 max-w-4xl'>
      <h2 className='text-center text-2xl font-bold mb-6'>
        720 P ↔ 1080 P 实时对比
      </h2>

      <div className='rounded-lg overflow-hidden shadow-lg'>
        <ReactBeforeSlider
          firstImage={BEFORE}
          secondImage={AFTER}
          delimiterColor='#ffffff'
        />
      </div>
    </section>
  )
}
