export function formatCurrency(quantity:number){
    return new Intl.NumberFormat('en-Es',{
     style:'currency', currency: 'EUR'

    }).format(quantity)
}