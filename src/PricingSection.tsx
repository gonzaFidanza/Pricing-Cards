import './App.css';
import PricingCard from './components/PricingCard';
import ThemeToggle from './components/ThemeToggle';
import { pricingPlans } from './pricingData' ;


function PricingSection() {
  return (
    <section className='w-full flex flex-col items-center p-8'>
      <ThemeToggle></ThemeToggle>
      <h2 className='text-primary-text text-5xl w-4/5 font-bold my-12 text-center'>The <span className='bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text'>Perfect Plan</span>  for Your Needs</h2>
      <div className='flex flex-col gap-8 mt-6 w-4/5 justify-around  max-md:items-center md:flex-row md:gap-12'>
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
