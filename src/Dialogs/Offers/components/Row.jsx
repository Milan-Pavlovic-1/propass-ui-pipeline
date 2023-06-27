import React from 'react';
import {RowContainer , IconLabelContainer, Label, Icon, Item} from './styles'
const Row = ({icon , label,  superSaver, smart ,free}) => {
        return (
            <RowContainer>
                    <IconLabelContainer>
                            <Icon className={`fa ${icon}`} />
                            <Label >{label}</Label>
                    </IconLabelContainer>
                    <Item>{superSaver}</Item>
                    <Item>{smart}</Item>
                    <Item>{free}</Item>
            </RowContainer>
        )
}

export default Row;
