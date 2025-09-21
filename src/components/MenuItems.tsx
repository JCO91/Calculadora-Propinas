
import type { MenuItems } from "../type/type"

type MenuItemProps = {
  item: MenuItems
  addItem: (item: MenuItems) => void // le decimos que le pasamos una funcion que no retorna nada con el void
}

export default function MenuItems({ item, addItem }: MenuItemProps) {

  return (
    <>
      <button className="border-2 border-indigo-400 hover:bg-indigo-400 w-full p-4 rounded-2xl flex justify-between cursor-pointer"
         onClick={()=>addItem(item)}>
        <p>{item.name}</p>
        <p className="font-black">{item.price}</p>
      </button>
    </>
  )
}

