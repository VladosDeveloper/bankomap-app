import {CurrentBankomat} from "./CurrentBankomat";
import {MoneyType} from "./App";
import styled from "styled-components";

type CityPropsType = {
    data: MoneyType[] //встречаем денюжки
}

export const City = ({data}: CityPropsType) => {
	

    const mappedMoney = data.map((el: MoneyType, index) => (
        <CurrentBankomat
            key={el.id}
            money={el}
        />
    ))

    return (
        <Wrapper>
			{mappedMoney}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`