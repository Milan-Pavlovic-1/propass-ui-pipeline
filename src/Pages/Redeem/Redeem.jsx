import React, { useState } from 'react';
import {TableHeader, Table, TableItem , IconEdit, Button, ReedemOrderHeader, H3, Container} from './Styles'
const Redeem = () => {
    const [data, setData] = useState([
        { id: 1, type: 'Type 1', pass: 'Amman - Riad', voucherId: 'Voucher 1', expiryDate: '2023-06-30', balance: 10 },
        { id: 2, type: 'Type 2', pass: 'Amman - Muscat', voucherId: 'Voucher 2', expiryDate: '2023-07-15', balance: 6 },
        { id: 3, type: 'Type 3', pass: 'Amman - Muscat 3', voucherId: 'Voucher 3', expiryDate: '2023-08-10', balance: 7 },
        { id: 4, type: 'Type 3', pass: 'Amman - Muscat 3', voucherId: 'Voucher 3', expiryDate: '2023-08-10', balance: 7 },
        { id: 5, type: 'Type 3', pass: 'Amman - Muscat 3', voucherId: 'Voucher 3', expiryDate: '2023-08-10', balance: 7 },
        { id: 6, type: 'Type 3', pass: 'Amman - Muscat 3', voucherId: 'Voucher 3', expiryDate: '2023-08-10', balance: 7 }
    ]);

    const redeemItem = (id) => {
        // Implement redeem logic here based on the item id
        console.log(`Redeem item with id ${id}`);
    };

    const editItem = (id) => {
        // Implement edit logic here based on the item id
        console.log(`Edit item with id ${id}`);
    };

    return (
        <Container>
            <H3>My Account</H3>
            <ReedemOrderHeader>
                <label>Manaf Gharaibeh</label>
            </ReedemOrderHeader>
        <Table>
            <thead>
            <tr>
                <TableHeader>Type</TableHeader>
                <TableHeader>Pass</TableHeader>
                <TableHeader>Voucher ID</TableHeader>
                <TableHeader>Expiry Date</TableHeader>
                <TableHeader>Balance</TableHeader>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <TableItem>{item.type}</TableItem>
                    <TableItem>{item.pass}</TableItem>
                    <TableItem>{item.voucherId}</TableItem>
                    <TableItem>{item.expiryDate}</TableItem>
                    <TableItem>{item.balance}</TableItem>
                    <td>
                        <Button onClick={() => redeemItem(item.id)}>Redeem</Button>
                        <IconEdit className="fa fa-pencil"/>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
        </Container>
    );
};

export default Redeem;
