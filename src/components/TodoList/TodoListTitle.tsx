interface TodoListTitleProps {
  title: string
  index: number
  subtitle: string
}

export function TodoListTitle({ title, subtitle, index }: TodoListTitleProps) {
  return (
    <div className="flex items-center p-0 gap-2 h-full">
      <p
        className={`font-[Inter] font-bold text-sm leading-[1.063rem] ${
          index === 0 ? 'text-[#4EA8DE]' : 'text-[#8284fa]'
        }`}
      >
        {title}
      </p>
      <div className="flex items-center h-[1.188rem] py-0.5 px-2 gray-400 rounded-[62.438rem]">
        <p className="font-[Inter] font-bold text-sm leading-[1.063rem] text-[#d9d9d9]">
          {subtitle}
        </p>
      </div>
    </div>
  )
}
