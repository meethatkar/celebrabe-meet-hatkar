/**
 * UI Components Layer
 * Reusable Button component with multiple visual variants.
 * 
 * @param {'primary' | 'danger' | 'icon' | 'ghost'} [variant='primary']
 * @param {'sm' | 'md' | 'lg'} [size='md']
 * @param {string} [type='button']
 * @param {string} [className='']
 * @param {React.ReactNode} children
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const variants = {
    primary:
      'bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-xl shadow-sm focus-visible:ring-rose-500',
    danger:
      'bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl shadow-sm focus-visible:ring-red-500',
    icon:
      'rounded-full backdrop-blur-md bg-white/80 hover:bg-white text-slate-700 shadow-md active:scale-90 focus-visible:ring-rose-500',
    ghost:
      'text-slate-400 hover:text-slate-600 bg-transparent focus-visible:ring-slate-400',
  }

  const sizes = {
    sm: 'text-xs px-2.5 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
  }

  // Icon and ghost buttons typically handle their own padding or use minimal defaults
  const sizeStyles = variant === 'icon' || variant === 'ghost' ? '' : sizes[size] || sizes.md

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizeStyles} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}
