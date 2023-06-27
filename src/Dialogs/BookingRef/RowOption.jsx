import React from 'react';
import {RowContainer , IconLabelContainer, Label, Icon, RowContainerOption} from './styles'
const Row = ({icon , label}) => {
    return (
        <RowContainerOption>
            <IconLabelContainer>
                <Icon className={`fa ${icon}`} />
                <Label >{label}</Label>
            </IconLabelContainer>
        </RowContainerOption>
    )
}

export default Row;
