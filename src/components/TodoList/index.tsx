import clipboard from '/assets/clipboard.svg'

export function TodoList() {
  return (
    <div className="flex flex-col items-start m-auto my-16 p-0 gap-6 w-[46rem] h-[17.938rem]">
      <div className="flex justify-between items-end p-0 w-full h-[1.188rem]">
        <div className="flex items-center p-0 gap-2 w-[8.688rem] h-full">
          <p className="font-[Inter] font-bold text-sm leading-[1.063rem] text-[#4ea8de]">Tarefas criadas</p>
          <div className="flex items-center w-[1.563rem] h-[1.188rem] py-0.5 px-2 gray-400 rounded-[62.438rem]">
            <p className="font-[Inter] font-bold text-sm leading-[1.063rem] text-[#d9d9d9]">0</p>
          </div>
        </div>

        <div className="flex items-center p-0 gap-2 w-[6.938rem] h-full">
          <p className="font-[Inter] font-bold text-sm leading-[1.063rem] text-[#8284fa]">Concluídas</p>
          <div className="flex items-center w-[1.563rem] h-[1.188rem] py-0.5 px-2 gray-400 rounded-[62.438rem]">
            <p className="font-[Inter] font-bold text-sm leading-[1.063rem] text-[#d9d9d9]">0</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-[4rem] px-[1.5rem] gap-4 w-full h-[15.25rem] rounded-lg border-t border-t-solid border-t-[#333333]">
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            src={clipboard}
            alt="imagem de uma pracheta vazia"
            className="w-[3.5rem] h-[3.5rem]"
          />
          <p className="font-[Inter] font-bold text-base leading-[1.525rem] text-center text-[#808080]">
            Você ainda não tem tarefas cadastradas <br />
            <span className="font-normal">Crie tarefas e organize seus itens a fazer</span>
          </p>
        </div>
      </div>
    </div>
  )
}