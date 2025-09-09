import ConfigSvg from "../../../public/assets/svg/config-icon";
import PlusIconSvg from "../../../public/assets/svg/plus-icon";
import mainIcon from "/assets/header-icon.png";

export default function HeaderComponent() {
  return (
    <header class="fixed top-0 left-0 w-full flex justify-between items-center bg-black p-4">
      {/* Logo */}
      <img src={mainIcon} alt="mainicon" class="w-8 h-8" />

      {/* Menu */}
      <div class="text-white gap-4 flex">
        <a href="">Quadros</a>
        <a href="">Minhas Tasks</a>
      </div>

      {/* Botões */}
      <div class="flex gap-4">
        {/* Criar Card */}
        <button class="flex items-center gap-2 h-10 px-4 bg-gray-500 rounded-xs text-white">
          <PlusIconSvg />
          <span>Criar Card</span>
        </button>

        {/* Configurações */}
        <button class="flex items-center gap-2 h-10 px-4 bg-gray-500 rounded-xs text-white">
          <ConfigSvg />
          <span>Configurações</span>
        </button>
      </div>
    </header>
  );
}
