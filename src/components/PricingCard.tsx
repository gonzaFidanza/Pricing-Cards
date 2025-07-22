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
    ${highlight ? '' : ''}
    `}>
      <div>
        <h2 className="text-white text-2xl font-semibold">{title}</h2>
        <h3 className="text-[#676767]">{subtitle}</h3>
        <div className="flex items-end gap-1 my-4">
          <p className="text-white text-4xl">${price}</p> 
          <p className="text-[#676767]">/{billingCycle}</p>
        </div>
        <ul className="">
          {features.map(
            (feature, i) => (
              <CardFeature key={i} text={feature}></CardFeature>
            )
          )}
        </ul>
      </div>
      
      <button className="bg-linear-to-r from-[#2B9AB5] to-[#01af49] items-center justify-center group relative flex text-white mt-10 cursor-pointer rounded-full p-[2.5px] font-semibold transition duration-300 ease-in-out hover:shadow-[0_0_4px_0.5px_#2B9AB5cc,0_0_12px_0.5px_#01af49cc]">
          <div className="flex h-full w-full items-center rounded-full bg-[#151515] text-center font-medium transition ease-in-out hover:bg-[#1f1f1f]">
            <div className="w-full h-full py-3">Get Started</div>
          </div>
      </button>

    </article>
  );
}

export default PricingCard