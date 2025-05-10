interface LogoProps {
  size?: number
  className?: string
}

const MealMateLogo = ({ size = 50, className = "" }: LogoProps) => {
  return (
    <div className={`${className}`} style={{ width: size, height: size }}>
      <img
        src="/mealmate-it/lovable-uploads/d578dea7-95ab-4289-8ef9-88a413c9a143.png"
        alt="MealMate Logo"
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  )
}

export default MealMateLogo
