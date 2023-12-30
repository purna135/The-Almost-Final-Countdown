import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTimer, onReset, timeRemaining },
  ref
) {
  const dialog = useRef();

  const userLost = timeRemaining <= 0;
  const timeLeft = (timeRemaining / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      showGamerOver() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost ☹️</h2>}
      <p>
        The target time was <strong>{targetTimer}</strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>{timeLeft} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>CLose</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
