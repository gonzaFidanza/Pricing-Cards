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
    <article className = {`flex flex-col justify-between w-full max-w-sm rounded-xl p-8 bg-card shadow-lg
    ${highlight ? 'relative after:absolute after:content-["Most_Popular"] after:top-0 after:right-0 after:px-4 after:py-3 after:text-primary-text after:text-sm after:rounded-bl-xl after:text-shadow-2xs after:rounded-tr-xl after:bg-linear-to-r after:from-primary after:to-secondary md:scale-110' : ''}
    `}>
      <div>
        <h2 className={`text-2xl ${highlight ? 'uppercase font-bold bg-linear-to-r from-primary to-secondary to-20% text-transparent bg-clip-text' : 'text-primary-text font-semibold'}`}>{title}</h2>
        <h3 className="text-[#7f7f7f]">{subtitle}</h3>
        <div className="flex items-end gap-1 my-4">
          <p className="text-primary-text text-4xl">${price}</p> 
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
      
      <button className="bg-linear-to-r from-primary to-secondary items-center justify-center group relative flex text-primary-text mt-10 cursor-pointer rounded-full p-[2.5px] font-semibold transition duration-300 ease-linear ">
          <div className="flex h-full w-full items-center rounded-full bg-card text-center font-medium transition ease-in-out hover:bg-linear-to-r hover:from-primary hover:to-secondary">
            <div className="w-full h-full py-3 group-hover:text-shadow-xs">Get Started</div>
          </div>
      </button>

    </article>
  );
}

export default PricingCard