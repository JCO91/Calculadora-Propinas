import type { OrderItem } from "../type/type"

type OrderImemsProp ={
    order: OrderItem []
}

export default function OrderContent({order}: OrderImemsProp) {
  return (
    <div>
      <h2 className="text-4xl font-black ">consumo</h2>
      <div className="mt-5 space-y-3" >
        {order.length === 0 ? <p>la orden esta vacia</p>
         : 
         order.map(item=>(
          <div key = {item.id}>
            <p>{item.name}.......{item.price}e</p>
          </div>
          
         ))
        }
      </div>
    </div>
  )
}
