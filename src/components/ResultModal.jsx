import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTimer, onReset, timeRemaining },
  ref
) {
  const dialog = useRef();

  const userLost = timeRemaining <= 0;
  const timeLeft = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTimer * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      showGamerOver() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You Lost ☹️</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTimer}</strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>{timeLeft} seconds left.</strong>
      </p>
      <form method="dialog">
        <button>CLose</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
