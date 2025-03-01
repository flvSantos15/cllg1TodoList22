import React from "react"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="text"
        data-cy="taskInput"
        className="flex flex-1 items-center w-full h-[3.375rem] rounded-lg p-4 gap-2 border border-solid border-[#0d0d0d] gray-500 focus:border focus:border-solid focus:border-[#5E60CE] hover:border-[#5E60CE] outline-none"
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
