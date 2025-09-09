import { ParentProps } from "solid-js";

export default function BoardContainer(props: ParentProps) {
  return <div class="max-x-7x1 mx-auto ga-8">{props.children}</div>;
}
