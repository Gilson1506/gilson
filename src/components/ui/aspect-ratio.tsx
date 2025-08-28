import * as React from "react"
import { cn } from "@/lib/utils"

const AspectRatio = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & {
    ratio?: number
  }
>(({ className, ratio = 16 / 9, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative w-full", className)}
    style={{
      aspectRatio: ratio,
    }}
    {...props}
  />
))
AspectRatio.displayName = "AspectRatio"

export { AspectRatio }
