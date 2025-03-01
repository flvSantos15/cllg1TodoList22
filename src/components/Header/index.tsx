import logo from "/assets/logo.svg"

export function Header() {
  return (
    <div
      data-cy="logo"
      className="flex justify-center items-center gray-700 w-full h-[10rem] lg:h-[12.5rem]"
    >
      <img src={logo} alt="logo" className="w-[7.875rem] h-12" />
    </div>
  )
}
