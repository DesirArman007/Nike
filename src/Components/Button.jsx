function Button({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${backgroundColor || 'bg-coral-red'} 
        ${textColor || 'text-white'} 
        ${borderColor || 'border-transparent'} 
        rounded-full ${fullWidth && 'w-full'}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          className="ml-2 rounded-full w-5 h-5"
          alt={`${label} icon`}
        />
      )}
    </button>
  );
}

export default Button;
