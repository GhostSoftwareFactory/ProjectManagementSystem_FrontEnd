import BoardContent from "~/components/container-boards/board";
import HeaderComponent from "~/components/header-component/header";

export default function DefaultBoardPage() {
  return (
    <div class="bg-black w-full h-screen flex">
      <HeaderComponent />
      <BoardContent />
    </div>
  );
}
