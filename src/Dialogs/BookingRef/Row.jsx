import React from 'react';
import {RowContainer , IconLabelContainer, Label, Icon} from './styles'
const Row = ({icon , label}) => {
    return (
        <RowContainer>
            <IconLabelContainer>
                <Icon className={`fa ${icon}`} />
                <Label >{label}</Label>
            </IconLabelContainer>
        </RowContainer>
    )
}

export default Row;
