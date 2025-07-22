import CheckIcon from "./CheckIcon"


const CardFeature = ({text}:{ text: string}) => {
  return (
    <li className="text-white flex items-center gap-2 my-2">
      <CheckIcon></CheckIcon>
      <p>{text}</p>
    </li>
  )
}

export default CardFeature

