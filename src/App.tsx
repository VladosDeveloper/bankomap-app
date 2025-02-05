import {useState} from 'react';
import './App.css';
import {Country} from "./Country";
import {v1} from "uuid";

export type BanknotsType = 'USD' | 'RUB' | 'ALL'
export type MoneyType = {
    banknote: BanknotsType
    nominal: number
    id: string
}

const defaultMoney: MoneyType[] = [  // типизируем
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
]


const moneyFilter = (money: MoneyType[], filter: BanknotsType): MoneyType[] => {
    const newMoney  = [...money]
	if (filter === "ALL") return newMoney
	return newMoney.filter(money => money.banknote === filter)


}


function App() {
    const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
    const [filterValue, setFilterValue] = useState<BanknotsType>('ALL')

    const filteredMoney = moneyFilter(money, filterValue)

    const addMoney = (banknote: BanknotsType) => {
		const newBanknote = {id: v1(), banknote: banknote, nominal: 100}
		setMoney([...money, newBanknote])
    }

    const removeMoney = (banknote: BanknotsType) => {
       const index = money.findIndex(el => el.banknote === banknote)
		console.log(index)
        if (index !== -1) {
            setMoney(money.filter((el, i) => (
				i !== index
			)));
        }
    }

    return (
        <div className="App">
            <Country
                data={filteredMoney}
                setFilterValue={setFilterValue}
				addMoney={addMoney}
				removeMoney={removeMoney}
            />
        </div>
    );
}

export default App;
