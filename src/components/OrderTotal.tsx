import { useMemo } from "react"
import type { OrderItem } from "../type/type"
import { formatCurrency } from "../helpers";
  
type OrderTotalProp = {
  order:OrderItem [],
  tip: number,
  placeOrder: () => void;
}

export default function OrderTotal({order, tip, placeOrder}: OrderTotalProp) {
    
 const subTotalAmount = useMemo(() => {
   return order.reduce((total, item) => total + item.quantity * item.price, 0);
}, [order]);

const tipAmount = useMemo(()=>subTotalAmount * tip, [tip,order]) // se ejecutara cuando cmabie tip o order
const totalAmount = useMemo(()=>subTotalAmount + tipAmount,[tip, order])
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
                <span className="font-black">{formatCurrency(totalAmount)} </span>
            </p>
            <button className="w-full py-3 text-center mt-10 uppercase bg-black font-bold text-amber-50 cursor-pointer disabled:opacity-10 disabled:cursor-default "
            disabled = {totalAmount === 0}
            onClick = {()=>placeOrder()}
            >
               
                guardar orden
            </button>
        </div>
        )
}
