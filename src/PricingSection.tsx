import './App.css';
import PricingCard from './components/PricingCard';
import { pricingPlans } from './pricingData' ;


function PricingSection() {
  return (
    <section className='bg-black w-full flex flex-col items-center p-8'>
      <h2 className='text-white text-5xl font-bold my-12 text-center'>The <span className='bg-linear-to-r from-[#2B9AB5] to-[#01af49] text-transparent bg-clip-text'>Perfect Plan</span>  for Your Needs</h2>
      <div className='flex flex-col gap-8 mt-6 w-4/5 justify-around md:flex-row md:gap-12'>
        {
          pricingPlans.map(
            plan => (
              <PricingCard key={plan.id} {...plan}></PricingCard>
            )
          )
        }
      </div>
    </section>
  )
}

export default PricingSection
