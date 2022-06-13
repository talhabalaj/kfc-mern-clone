import { Carousel } from 'react-responsive-carousel'

import { Collection } from '../../collection'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

export const StartPage =  () => {
  return (
    <div>
      <Carousel autoPlay infiniteLoop interval={3000}>
        <div>
          <img src="/assets/start-page/1.png" />
        </div>
        <div>
          <img src="/assets/start-page/2.png" />
        </div>
        <div>
          <img src="/assets/start-page/3.jpg" />
        </div>
        <div>
          <img src="/assets/start-page/4.png" />
        </div>
      </Carousel>
      <Collection slug={'signature-boxes'} />
    </div>
  )
}
