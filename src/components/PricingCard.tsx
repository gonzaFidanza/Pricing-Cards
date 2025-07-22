import type { PricingPlan } from "../pricingData"
import CardFeature from "./CardFeature";

const PricingCard = (
  {
    title,
    subtitle,
    price,
    billingCycle,
    highlight, 
    features
  }: PricingPlan
) => {
  return (
    <article className = {`flex flex-col justify-between w-full max-w-sm rounded-xl p-8 bg-linear-to-b from-[#1f1f1f] to-[#151515]
    ${highlight ? 'relative after:absolute after:content-["Most_Popular"] after:top-0 after:right-0 after:h-fit after:w-fit after:px-4 after:py-3 after:font-semibold after:text-[#1f1f1f] after:border-b-2 after:rounded-bl-2xl after:bg-linear-to-r after:from-[#2B9AB5] after:to-[#01af49]  md:scale-110' : ''}
    `}>
      <div>
        <h2 className={`text-2xl font-semibold ${highlight ? 'uppercase bg-linear-to-r from-[#2B9AB5] to-[#01af49] to-20% text-transparent bg-clip-text' : 'text-white'}`}>{title}</h2>
        <h3 className="text-[#7f7f7f]">{subtitle}</h3>
        <div className="flex items-end gap-1 my-4">
          <p className="text-white text-4xl">${price}</p> 
          <p className="text-[#7f7f7f]">/{billingCycle}</p>
        </div>
        <ul className="">
          {features.map(
            (feature, i) => (
              <CardFeature key={i} text={feature}></CardFeature>
            )
          )}
        </ul>
      </div>
      
      <button className="bg-linear-to-r from-[#2B9AB5] to-[#01af49] items-center justify-center group relative flex text-white mt-10 cursor-pointer rounded-full p-[2.5px] font-semibold transition duration-300 ease-linear ">
          <div className="flex h-full w-full items-center rounded-full bg-linear-to-r from-[#151515] to-[#151515] text-center font-medium transition duration-500 ease-in-out hover:bg-linear-to-r hover:from-[#2B9AB5] hover:to-[#01af49]">
            <div className="w-full h-full py-3">Get Started</div>
          </div>
      </button>

    </article>
  );
}

export default PricingCard