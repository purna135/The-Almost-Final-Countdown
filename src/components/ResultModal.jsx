import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTimer },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      showGamerOver() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTimer}</strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>CLose</button>
      </form>
    </dialog>
  );
});

export default ResultModal;