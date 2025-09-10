import { ParentProps } from "solid-js";

export default function BoardContainer(props: ParentProps) {
  return (
    <section class="flex gap-4 p-4 m-4 max-h-[80vh] min-h-[200px] overflow-x-auto">
      {props.children}
    </section>
  );
}
