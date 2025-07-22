const CheckIcon = ({ className = "h-5 w-5 text-emerald-500 text-xl" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    className={className}        
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="4 10 8 14 16 6" />
  </svg>
);

export default CheckIcon