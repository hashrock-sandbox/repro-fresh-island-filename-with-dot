// Document https://fresh.deno.dev/docs/getting-started/create-a-route

import { useSignal } from "@preact/signals";
import { FooBar } from "../components/Foo.bar.tsx";
import FooCounter from "../islands/FooCounter.bar.tsx";

export default function Page() {
  const count = useSignal(3);
  return (
    <main>
      <h1>Foo.bar</h1>

      <FooBar />

      <FooCounter count={count} />
    </main>
  );
}