import clipboard from '/assets/clipboard.svg'

export function NoTodoCard() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-4">
      <img
        src={clipboard}
        alt="imagem de uma pracheta vazia"
        className="w-[3.5rem] h-[3.5rem]"
      />
      <p
        data-cy="noTaskMsg"
        className="font-[Inter] font-bold text-base leading-[1.525rem] text-center text-[#808080]"
      >
        Você ainda não tem tarefas cadastradas <br />
        <span className="font-normal">
          Crie tarefas e organize seus itens a fazer
        </span>
      </p>
    </div>
  )
}
