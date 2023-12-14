import { useState } from "preact/hooks";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <section>
      <button
        class="border rounded-lg "
        onClick={() => setCounter((counter) => counter - 1)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
        </svg>
      </button>
      <span class="text-yellow-300 text-3xl  mx-5">{counter}</span>
      <button
        class="border rounded-lg"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      </button>
    </section>
  );
}
