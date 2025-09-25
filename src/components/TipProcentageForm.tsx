const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]
type TipProcentageFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>,
  tip : number
}

export default function TipProcentageForm({ setTip, tip }: TipProcentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina</h3>
      <form>
        {tipOptions.map(tipOption =>
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              onChange={e => setTip(+e.target.value)} // Cadda vez que cambiemos accederemos al valor del target, poniendo el mas lee decimos que sera de tipo number como el type
              checked ={tipOption.value === tip} // en caso de que sean iguales van a estar habilitados
          />
          </div>
        )}
      </form>
    </div>
  )
}
