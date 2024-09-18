import React from 'react'
import Button  from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'
const Hero = () => {
  return (
    <section
      id="home"
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  p-2'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
      <p>Our Summer Collection</p>
      <h1>
        <span>The New Arrival</span>
        <br></br>
        <span>Nike Shoes</span>
      </h1>
      <p>When you want shoes with the swoosh thing,
        You'll need to buy Nike. Because they have
        the swoosh thingy..
      </p>
      <Button label="Shop now" iconURL={arrowRight}></Button>

      <div className='flex justify-starts items-start flex-wrap w-full mt-20
      gap-16'>
        {statistics.map((stat,index) => (
          <div>
            <p>{stat.value}</p>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
 
export default Hero