import PlusIconSvg from "../../../public/assets/svg/plus-icon";

export default function ColumnComponent() {
  return (
    <div class="bg-gray-600 rounded-lg w-80 flex flex-col gap-2 p-2 max-h-[80vh] overflow-y-auto items-center">
      <div class="flex flex-row items-center justify-start gap-2">
        <h1 class="text-white">BackLog</h1>
        <PlusIconSvg />
      </div>
    </div>
  );
}
