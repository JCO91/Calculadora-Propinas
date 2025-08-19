
import type { MenuItems } from "../type/type"

type MenuItemProps = {
  item: MenuItems
}

export default function MenuItems({ item }: MenuItemProps) {

  return (
    <>
      <button className="border-2 border-indigo-400 hover:bg-indigo-400 w-full p-4 rounded-2xl flex justify-between cursor-pointer">
        <p>{item.name}</p>
        <p className="font-black">{item.price}</p>
      </button>
    </>
  )
}

