import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const neuralButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-body",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        flow: "bg-accent text-background font-bold tracking-wider uppercase hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-cyan",
        neural: "bg-background/10 text-accent border border-accent/30 hover:bg-accent/10 hover:text-accent transition-all duration-300 backdrop-blur-sm font-semibold",
        luxury: "bg-accent text-background font-bold tracking-wide hover:scale-105 hover:bg-accent/90 transition-all duration-300",
        "luxury-outline": "border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-500 backdrop-blur-sm",
        "luxury-ghost": "text-accent hover:bg-accent/10 hover:text-accent transition-all duration-300",
        hero: "bg-accent text-background font-bold animate-glow-pulse text-lg hover:scale-105 transition-all duration-300",
        sticky: "bg-accent text-accent-foreground hover:bg-accent/90 w-full font-bold text-base tracking-wide",
        glass: "glass-card text-foreground hover:bg-card/80 border-accent/20",
        gradient: "bg-gradient-to-r from-luxury-purple to-luxury-blue text-white font-bold hover:scale-105 transition-all duration-300",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4",
        lg: "h-14 rounded-xl px-8 text-base",
        xl: "h-16 rounded-xl px-12 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface NeuralButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neuralButtonVariants> {
  asChild?: boolean
}

const NeuralButton = React.forwardRef<HTMLButtonElement, NeuralButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(neuralButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
NeuralButton.displayName = "NeuralButton"

export { NeuralButton, neuralButtonVariants }