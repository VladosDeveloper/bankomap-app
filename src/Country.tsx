import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";
import styled from "styled-components";

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (str: BanknotsType) => void
	addMoney: (value: BanknotsType) => void
	removeMoney: (value: BanknotsType) => void
  }

export const Country = (props: CountryPropsType ) => {
    const {data, setFilterValue, addMoney, removeMoney} = props
	
    const setAll=()=>{
        setFilterValue("ALL")
    }

    const setUSD=()=>{
		setFilterValue("USD")
    }

    const setRUB=()=>{
		setFilterValue("RUB")
    }

   const addMoneyHandler=(coinType: BanknotsType)=>{
		addMoney(coinType)
   }

   const removeMoneyHandler=(coinType: BanknotsType)=>{
	   removeMoney(coinType)
   }
	
    return (
        <Terminal>
            <div>
                <button onClick={setAll}>All</button>
                <button onClick={setUSD}>Dollars</button>
                <button onClick={setRUB}>Rubles</button>
            </div>
            <div>
                {/*сделаем в последнюю очередь*/}
                <button onClick={() => addMoneyHandler("USD")}>Положить 100$</button>
                <button onClick={() => addMoneyHandler("RUB")}>Положить 100р.</button>
                <button onClick={() => removeMoneyHandler("USD")}>Снять 100$</button>
                <button onClick={() => removeMoneyHandler("RUB")}>Снять 100р.</button>
            </div>
            <City data={data}/>
        </Terminal>
    );
};

const Terminal = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  font-size: 30px;
  background-color: #282c34;
`