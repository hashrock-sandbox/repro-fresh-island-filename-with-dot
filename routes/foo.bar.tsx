// Document https://fresh.deno.dev/docs/getting-started/create-a-route

import { FooBar } from "../components/Foo.bar.tsx";
import FooCounter from "../islands/FooCounter.bar.tsx";

export default function Page() {
  return (
    <main>
      <h1>Foo.bar</h1>

      <FooBar />

      <FooCounter count={0} />
    </main>
  );
}