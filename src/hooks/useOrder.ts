import { useState } from "react"
import type { MenuItems, OrderItem } from "../type/type"

export default function useOrder(){
    
    const [order, setOrder] = useState<OrderItem[]>([]) // le asignamos de manera generica de que tippo dera el state
    const [tip,setTip] =useState(0);

    const addItem = ( item : MenuItems ) => {
        const itemExist = order.find(orderItem => (orderItem.id === item.id)) // buscamos en el state
        
        if(itemExist){
          console.log('Ya existe')
          const updateOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity : orderItem.quantity+1}: orderItem)
          setOrder(updateOrder)
        }else{
            const newItem = {...item, quantity:1} // tomamos una copia del objeto y le a;adimos el atributo quantity
             setOrder ([...order, newItem]) //tomamos una copia de valores previos y agreegamos la variable con los tipos de OrderItem
        }
    }

   const removeItem = (id: MenuItems['id']) =>{
     setOrder(order.filter(item => item.id !== id )) //recogemos todos los que no sea el id que le pasamos 
   }

   const placeOrder = () => {
     setOrder([])
     setTip(0)
   }

    return{
       order,
       tip,
       setTip,
       addItem,
       removeItem,
       placeOrder
    }
}
