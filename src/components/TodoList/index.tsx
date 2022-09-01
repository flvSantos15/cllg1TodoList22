import { HiOutlineTrash } from 'react-icons/hi'
import { useTask } from '../../context/useTask'
// import clipboard from '/assets/clipboard.svg'

export function TodoList() {
  const { task } = useTask()
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

      <div className="flex flex-col justify-center items-center gap-4 w-full h-[15.25rem] rounded-lg border-t border-t-solid border-t-[#333333]">
        {/* <div className="flex flex-col justify-center items-center gap-4">
          <img
            src={clipboard}
            alt="imagem de uma pracheta vazia"
            className="w-[3.5rem] h-[3.5rem]"
          />
          <p className="font-[Inter] font-bold text-base leading-[1.525rem] text-center text-[#808080]">
            Você ainda não tem tarefas cadastradas <br />
            <span className="font-normal">Crie tarefas e organize seus itens a fazer</span>
          </p>
        </div> */}
        {task.map((t) => {
          return (
            <div key={t} className="flex items-start p-4 gap-3 w-full h-[4.5rem] bg-[#262626] border border-solid border-[#333333] shadow-[0px_2px_8px_rgba(0,0,0,0.06)] rounded-lg">
              <input type="checkbox" name="" id="" className="w-[1rem] h-[1rem]" />
              <p className="font-[Inter] font-normal text-sm text-[#f2f2f2] w-[39.5rem]">
                {t}
              </p>
              <button className="w-[1.5rem] h-[1.5rem]">
                <HiOutlineTrash />
              </button>
            </div>
          )
        }
        )}
        {/* <div className="flex items-start p-4 gap-3 w-full h-[4.5rem] bg-[#262626] border border-solid border-[#333333] shadow-[0px_2px_8px_rgba(0,0,0,0.06)] rounded-lg">
          <input type="checkbox" name="" id="" className="w-[1rem] h-[1rem]" />
          <p className="font-[Inter] font-normal text-sm text-[#f2f2f2] w-[39.5rem] line-through">
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer
          </p>
          <button className="w-[1.5rem] h-[1.5rem]">
            <HiOutlineTrash />
          </button>
        </div> */}
      </div>
    </div>
  )
}