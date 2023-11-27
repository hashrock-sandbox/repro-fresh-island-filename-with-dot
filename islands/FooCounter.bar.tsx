// Document https://fresh.deno.dev/docs/concepts/islands

import type { Signal } from "@preact/signals";

interface FooProps {
  count: Signal<number>;
}

export default function FooCounter(props: FooProps) {
  return (
    <div>
      <button onClick={() => props.count.value -= 1}>-1</button>
      <p>{props.count}</p>
      <button onClick={() => props.count.value += 1}>+1</button>
    </div>
  );
}