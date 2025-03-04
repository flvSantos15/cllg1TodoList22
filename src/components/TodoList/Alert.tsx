import * as AlertDialog from "@radix-ui/react-alert-dialog"

interface AlertProps {
  isOpen: boolean
  onOpen: (item: boolean) => void
}

export function Alert({ isOpen, onOpen }: AlertProps) {
  return (
    <AlertDialog.Root open={isOpen} onOpenChange={onOpen}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-[#0d0d0d73] fixed inset-0" />
        <AlertDialog.Content className="bg-[#262626] rounded-md fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90vw] max-w-[500px] max-h-[85vh] p-[25px] focus:outline-none">
          <AlertDialog.Description
            data-cy="editModalValidation"
            className="mb-5 text-base"
          >
            Tarefas marcadas como concluídas não podem ser editadas.
          </AlertDialog.Description>
          <AlertDialog.Cancel asChild>
            <button className="bg-[#161616] inline-flex items-center justify-center rounded-[4px] py-0 px-[15px] text-base font-medium h-[35px]">
              Ok
            </button>
          </AlertDialog.Cancel>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
