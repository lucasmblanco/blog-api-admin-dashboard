import { DialogComponents } from '@/constants/DialogOptions';
import useDialog from '@/hooks/DialogHook';
import NavigatioBar from '../Dialog/NavigatioBar';

export default function PostDialog({
  hideFormButton = false
}: {
  hideFormButton?: boolean;
}) {
  const { handleButton, state, modalRef } = useDialog(hideFormButton);

  return (
    <dialog
      id="my-dialog"
      className="left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] bg-light-brown text-light-yellow backdrop:backdrop-blur
      rounded-xl border-[1px] border-soft-brown min-h-[90vh] min-w-[90vw]"
      ref={modalRef}
    >
      <div className="flex flex-col min-h-[90vh]">
        <NavigatioBar
          hideFormButton={hideFormButton}
          handleButton={handleButton}
        />
        {DialogComponents[state.currentView]}
      </div>
    </dialog>
  );
}

// IBA ESTO EN EL DIALOG AL FINAL:min-h-[90vh] min-w-[90vw]
// ESTO IBA EN EL DIV HIJO DIRECTO DEL DIALOG:  min-h-[90vh] -- flex flex-cols
