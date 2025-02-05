import {MoneyType} from "./App";
import styled, {css} from "styled-components";

type CurrentBankomatPropsType = {
	money: MoneyType
}

type BanknoteType = {
	color: string
}

export const CurrentBankomat = ({money}: CurrentBankomatPropsType) => {
	return (
		<Banknote color={money.banknote === "USD" ? "aquamarine" : "lightblue"}>
			<Name>{money.banknote}</Name>
			<Nominal>{money.nominal}</Nominal>
		</Banknote>
	);
};



const Banknote = styled.div<BanknoteType>`
    width: 200px;
    height: 100px;
    margin: 5px;
	
	${props => props.color && css<BanknoteType>`
        background-color: ${props.color};
	`}
`


const Name = styled.span`
    display: flex;
    justify-content: center;
    font-size: 15px;
`

const Nominal = styled.span`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    font-size: 45px;
`
