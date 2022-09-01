import plusIcon from '/assets/plus.svg'

export function AddButton() {
  return (
    <div className="flex items-center m-auto mt-[-28px] gap-2 w-[46rem] h-[3.375rem]">
      <input
        type="text"
        placeholder="Adicione um nova tarefa"
        className="flex items-center w-[39.875rem] h-[3.375rem] rounded-lg p-4 gap-2 border border-solid border-[#0d0d0d] gray-500 focus:border focus:border-solid focus:border-[#5E60CE] outline-none"
      />
      <button
        className="flex items-center justify-center w-[5.625rem] h-[3.25rem] p-4 gap-2 blue-dark rounded-lg transition delay-50 ease-in-out hover:bg-[#4ea8de]"
      >
        Criar
        <img src={plusIcon} alt="plusIcon" />
      </button>
    </div>
  )
}