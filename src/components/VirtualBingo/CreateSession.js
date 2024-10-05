// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0f8ff;
    padding: 20px;
    min-height: 100vh;
    font-family: Arial, sans-serif;
`;

const Title = styled.h1`
    color: #ff69b4;
`;

const FormContainer = styled.div`
    margin: 20px 0;
    text-align: center;
`;

const Input = styled.input`
    margin: 5px;
    padding: 10px;
    border: 2px solid #ff69b4;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #ff69b4;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #ff1493;
    }
`;

const BingoCard = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    gap: 10px;
    margin-top: 20px;
    max-width: 300px;
`;

const BingoCell = styled.div`
    background-color: #fff;
    border: 2px solid #ff69b4;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-size: 20px;
`;

const CreateSession = () => {
    const [rows, setRows] = useState(5);
    const [columns, setColumns] = useState(5);
    const [bingoNumbers, setBingoNumbers] = useState([]);

    const generateBingoNumbers = () => {
        const numbers = [];
        const totalCells = rows * columns;
        for (let i = 1; i <= totalCells; i++) {
            numbers.push(i);
        }
        setBingoNumbers(numbers.sort(() => Math.random() - 0.5));
    };

    return (
        <AppContainer>
            <Title>Customize Your Bingo</Title>
            <FormContainer>
                <Input
                    type="number"
                    value={rows}
                    onChange={e => setRows(e.target.value)}
                    placeholder="Rows"
                />
                <Input
                    type="number"
                    value={columns}
                    onChange={e => setColumns(e.target.value)}
                    placeholder="Columns"
                />
                <Button onClick={generateBingoNumbers}>Generate Bingo Card</Button>
            </FormContainer>
            {bingoNumbers.length > 0 && (
                <BingoCard columns={columns}>
                    {bingoNumbers.map((number, index) => (
                        <BingoCell key={index}>{number}</BingoCell>
                    ))}
                </BingoCard>
            )}
        </AppContainer>
    );
};

export default CreateSession;
