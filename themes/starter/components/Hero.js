/* eslint-disable @next/next/no-img-element */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import Link from 'next/link'
import BeforeAfterSlider from './BeforeAfterSlider'

/**
 * 英雄大图区块
 */
export const Hero = props => {
  const config = props?.NOTION_CONFIG || CONFIG
  return (
   <>
      {/* <!-- ====== Hero Section Start --> */}
      <div
        id='home'
        className='relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap items-center'>
            <div className='w-full px-4'>
              <div
                className='hero-content wow fadeInUp mx-auto max-w-[780px] text-center'
                data-wow-delay='.2s'>
                {/* 主标题 */}
                <h1 className='mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]'>
                  {siteConfig('STARTER_HERO_TITLE_1', null, config)}
                </h1>
                {/* 次标题 */}
                <p className='mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]'>
                  {siteConfig('STARTER_HERO_TITLE_2', null, config)}
                </p>
                {/* 按钮组 */}
                <ul className='mb-10 flex flex-wrap items-center justify-center gap-5'>
                  {siteConfig('STARTER_HERO_BUTTON_1_TEXT', null, config) && (
                    <li>
                      <Link
                        href={siteConfig('STARTER_HERO_BUTTON_1_URL', '')}
                        className='inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color'>
                        {siteConfig('STARTER_HERO_BUTTON_1_TEXT', null, config)}
                      </Link>
                    </li>
                  )}
                  {siteConfig('STARTER_HERO_BUTTON_2_TEXT', null, config) && (
                    <li>
                      <Link
                        href={siteConfig(
                          'STARTER_HERO_BUTTON_2_URL',
                          null,
                          config
                        )}
                        target='_blank'
                        className='flex items-center rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark'
                        rel='noreferrer'>
                        {siteConfig(
                          'STARTER_HERO_BUTTON_2_ICON',
                          null,
                          config
                        ) && (
                          <img
                            className='mr-4'
                            src={siteConfig(
                              'STARTER_HERO_BUTTON_2_ICON',
                              null,
                              config
                            )}
                          />
                        )}
                        {siteConfig('STARTER_HERO_BUTTON_2_TEXT', null, config)}
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Before‑After 对比图 */}
            <div className='w-full px-4'>
             <div
              className='wow fadeInUp relative z-10 mx-auto max-w-[845px]'
              data-wow-delay='.25s'>
              {/* 滑块组件外层加 bg-white 让深色模式也清晰 */}
              <div className='rounded-xl overflow-hidden bg-white dark:bg-gray-800'>
               <BeforeAfterSlider />
             </div>
           </div>
         </div>
         </div>    {/* ← ④ 关闭 flex-wrap 那层 */}
       </div>      {/* ← ③ 关闭 container 那层 */}
    </div>        {/* ← ② 关闭 id='home' 那层 */}

      {/* 横幅图片 */}
      {siteConfig('STARTER_HERO_BANNER_IMAGE', null, config) && (
        <div className='container'>
          <LazyImage
            priority
            className='w-full'
            src={siteConfig(
              'STARTER_HERO_BANNER_IMAGE',
              null,
              config
            )}></LazyImage>
        </div>
      )}
      {/* <!-- ======= Hero Section End --> */}
  </>
)
}
