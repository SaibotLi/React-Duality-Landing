const Button = ({label, iconUrl, alt, href}) => {
  return (
    <a href={href}>
    <button className="flex justify-center items-center gap-2 px-7 py-4 text-lg leading-none bg-gradient-to-r from-orange-500 to-orange-800 rounded-full text-white">
{label}
<img src={iconUrl} alt={alt} className="ml-2 rounded-full w-5 h-5"/>
    </button>
    </a>
  )
}

export default Button