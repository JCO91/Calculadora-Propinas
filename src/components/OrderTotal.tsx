import { useMemo } from "react"
import type { OrderItem } from "../type/type"
import { formatCurrency } from "../helpers";
  
type OrderTotalProp = {
  order:OrderItem [],
  tip: number
}

export default function OrderTotal({order, tip}: OrderTotalProp) {
    
 const subTotalAmount = useMemo(() => {
   return order.reduce((total, item) => total + item.quantity * item.price, 0);
}, [order]);

const tipAmount = useMemo(()=>subTotalAmount * tip, [tip,order]) // se ejecutara cuando cmabie tip o order
    return (
        <div className="space-y-3">
            <h2 className="font-black">Total y Propinas:</h2>
            <p>Subtotal:
                <span className="font-black">{formatCurrency(subTotalAmount)}</span>
            </p> 
            <p>Propinas:
                <span className="font-black"> {formatCurrency(tipAmount)} </span>
            </p>
            <p>Total:
                <span className="font-black"> 0 </span>
            </p>
            <button>
                
            </button>
        </div>
        )
}
