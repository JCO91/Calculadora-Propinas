import MenuItems from "./components/MenuItems"
import OrderContent from "./components/OrderContent"
import { menuItems } from "./data/data"
import useOrder from "./hooks/useOrder"


function App() {

  const {order,addItem, removeItem} = useOrder()
  return (
    <>
      <header className="bg-indigo-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas</h1>
      </header>
      <main className="max-w-7xl mx-auto py-28 md:grid grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItems
                key={item.id}
                item={item}
                addItem = {addItem}
              />
            ))}


          </div>
        </div>


        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
             <OrderContent
              order ={order}
              removeItem = {removeItem}
             />
        </div>
      </main>
    </>
  )
}

export default App
