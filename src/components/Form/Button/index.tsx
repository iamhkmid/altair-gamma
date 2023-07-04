import React from 'react'
import { ButtonStyled, IconWrapper, Main, Particle } from './Button.styled'
import { type ButtonProps, type TParticle } from './Button.types'

const Button = React.forwardRef<Partial<HTMLButtonElement>, ButtonProps>((props, ref) => {
  const { fullWidth, variant, particles: numOfParticles, label, className, ...rest } = props
  const internalRef = React.useRef<HTMLButtonElement | null>(null)
  const currRef = React.useMemo(() => (ref != null) || internalRef, [ref, internalRef]) as React.MutableRefObject<HTMLButtonElement>

  const RANDOM = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

  const particles: TParticle[] = React.useMemo(() => new Array(numOfParticles).fill(0).map((val, idx) => {
    const origin = variant === 'icon' ? () => RANDOM(500, 800) : () => RANDOM(600, 900)
    return {
      key: val + idx,
      size: RANDOM(20, 60) / 100,
      x: RANDOM(60, 100),
      y: RANDOM(60, 100),
      duration: RANDOM(6, 20),
      delay: RANDOM(1, 10),
      alpha: RANDOM(20, 90) / 100,
      originX: `${Math.random() > 0.5 ? origin() * -1 : origin()}%`,
      originY: `${Math.random() > 0.5 ? origin() * -1 : origin()}%`
    }
  }), [numOfParticles, variant])

  return (
    <Main>
      <ButtonStyled
        {...rest}
        $fullWidth={!!fullWidth}
        $isIcon={variant === 'icon'}
        ref={currRef}
        className={`AltairButton-root ${variant} ${className}`}
      >
      </ButtonStyled>
      <div className="particles">
        {particles.map((par) => (
          <Particle
            className="particle"
            key={par.key}
            $size={par.size}
            $x={par.x}
            $y={par.y}
            $alpha={par.alpha}
            $delay={par.delay}
            $duration={par.duration}
            $originX={par.originX}
            $originY={par.originY}
          />
        ))}
      </div>
    </Main>
  )
})

Button.defaultProps = {
  disabled: false,
  fullWidth: false,
  variant: 'text',
  type: 'button',
  particles: 5
}

export default Button
