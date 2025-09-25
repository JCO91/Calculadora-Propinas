import { useMemo } from "react"
import type { OrderItem } from "../type/type"
import { formatCurrency } from "../helpers";
  
type OrderTotalProp = {
  order:OrderItem []
}

export default function OrderTotal({order}: OrderTotalProp) {
    
 const subTotalAmount = useMemo(() => {
   return order.reduce((total, item) => total + item.quantity * item.price, 0);
}, [order]);

    return (
        <div className="space-y-3">
            <h2 className="font-black">Total y Propinas:</h2>
            <p>Subtotal:
                <span className="font-black">{formatCurrency(subTotalAmount)}</span>
            </p> 
            <p>Propinas:
                <span className="font-black"> 0 </span>
            </p>
            <p>Total:
                <span className="font-black"> 0 </span>
            </p>
            <button>
                
            </button>
        </div>
        )
}
