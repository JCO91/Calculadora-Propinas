import type { MenuItems, OrderItem } from "../type/type"

type OrderImemsProp ={
    order: OrderItem [],
    removeItem: (id:MenuItems['id']) => void;
}

export default function OrderContent({order, removeItem}: OrderImemsProp) {
  return (
    <div>
      <h2 className="text-4xl font-black ">Consumo</h2>
      <div className="mt-10 space-y-3">
        {order.length === 0 ? <p>la orden esta vacia</p>
         : 
         order.map(item=>(
          <div className="flex justify-between border-t border-gray-300 last-of-type:border-b py-2 items-center" key = {item.id}>
            <div>
               <p>{item.name}-{item.price}e</p>
               <p className="font-black">Cantidad {item.quantity} - {item.quantity* item.price}e</p>
            </div>
           
           <button className="bg-indigo-400 h-8 w-8 items-center rounded-full text-white"
            onClick = {()=>removeItem(item.id)}
           >
             X
          </button>
          
          </div>
         ))
        }
       
      </div>
    </div>
  )
}
