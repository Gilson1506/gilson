"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Drawer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm", className)}
    {...props}
  >
    <div className="fixed inset-y-0 right-0 z-50 w-full border-l bg-background p-6 sm:max-w-sm">
      <div className="text-center text-muted-foreground p-4">
        Drawer component coming soon...
      </div>
      {children}
    </div>
  </div>
))
Drawer.displayName = "Drawer"

export { Drawer }
