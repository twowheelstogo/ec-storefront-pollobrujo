import React, { Fragment, Component } from "react";
import styled from "styled-components";
const Card = styled.div`
    border-radius: 14px;
    border: 1px solid #fff;
    max-width: 250px;
    min-height: 86px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    ${({ selected }) => selected && `
        border: 1px solid #FFEB3B;
    `}
`;
const CardIcon = styled.div`
    max-width: 60px;
    height: auto;
`;
const CardTitle = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: #fff;
`;

const IconoCheck = styled.div`
    height: 10px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5px;
    margin-left: 5px;
`;
class CardItemSelect extends Component {
    selectCurrentOption = () => {
        const { onSelect, method } = this.props;
        if (onSelect) onSelect(method);
    }
    render() {
        const { method: {
            icon, displayName
        }, selected, actionAlerts } = this.props;

        return (
            <Card selected={selected} onClick={this.selectCurrentOption}>
                
                {selected ? <IconoCheck><img height={15} src={"https://firebasestorage.googleapis.com/v0/b/twg-vehicle-dashboard.appspot.com/o/Iconos%2FIconoCheck.png?alt=media&token=ebbcafe6-f63a-47e2-9e4a-afe3098a666b"}                
                /> </IconoCheck> : <IconoCheck></IconoCheck>}
                <CardIcon>
                    <img src={icon} height={30} />
                </CardIcon>
                <CardTitle>{displayName}</CardTitle>
            </Card>
        );
    }
}
export default CardItemSelect;