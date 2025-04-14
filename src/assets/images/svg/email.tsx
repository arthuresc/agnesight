export default function EmailIcon ({state='default'}) {
  
function setState(state:string):string {

  const configClasses:string = ' size-12'
  const stateValue:string = {
    default: 'fill-white stroke-cyan-900',
    warning: 'fill-white stroke-red-700',
    info: 'fill-white stroke-amber-500',
  }[state] || 'fill-white stroke-cyan-900'

  const result:string = stateValue + configClasses

  return result;
}
  
  return(
    <svg
    className={setState(state)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
    strokeWidth="2"
  >
    <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
    <path d="M3 6l9 6l9 -6"></path>
    <path d="M15 18h6"></path>
    <path d="M18 15l3 3l-3 3"></path>
  </svg>
  )
}