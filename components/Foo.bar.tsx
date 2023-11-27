import { JSX } from "preact";

export function FooBar(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <h1>FooBar Component</h1>
    </div>
  );
}