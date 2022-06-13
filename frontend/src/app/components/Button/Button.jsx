import cl from 'classnames'
import './Button.scss'

export const Button = ({ className, variant, size, ...props }) => {
  return (
    <button
      className={cl(
        'btn',
        variant && `btn--${variant}`,
        size && `btn--${size}`,
        className
      )}
      {...props}
    />
  )
}
