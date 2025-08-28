"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: any[]
}

const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ className, data, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("w-full", className)}
        {...props}
      >
        <div className="text-center text-muted-foreground p-8">
          Chart component coming soon...
        </div>
      </div>
    )
  }
)
Chart.displayName = "Chart"

export { Chart }
