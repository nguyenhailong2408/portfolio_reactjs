const Button = ({ children, variant = 'default', size = 'md', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded'
  const sizeStyles = size === 'icon' ? 'w-10 h-10' : 'px-4 py-2'
  const variantStyles =
    variant === 'outline'
      ? 'border border-gray-300 text-gray-700 hover:bg-gray-100'
      : 'bg-blue-500 text-white hover:bg-blue-600'
  return (
    <button className={`${baseStyles} ${sizeStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  )
}
export default Button