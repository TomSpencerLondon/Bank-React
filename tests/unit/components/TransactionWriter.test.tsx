import React from "react";
import {render, screen } from "@testing-library/react";
import TransactionWriter from "../../../src/components/TransactionWriter";
import userEvent from "@testing-library/user-event";
import * as postStatement from "../../../src/api/postStatement";

const spyOnGetStatement = jest.spyOn(postStatement, "default")

describe('TransactionWriter', () => {
  it('renders an Amount input', () => {
    render(<TransactionWriter />)
    expect(screen.getByLabelText("Amount")).toBeInTheDocument();
  });

  it('renders a button for deposit', () => {
    render(<TransactionWriter />)
    expect(screen.getByRole('button', {name: /deposit/i})).toBeInTheDocument();
  });

  it('renders a button for withdraw', () => {
    render(<TransactionWriter />)
    expect(screen.getByRole('button', {name: /withdraw/i})).toBeInTheDocument();
  });

  it('deposits 1000', async () => {
    const params = { action: 'deposit', amount: '1000'};
    render(<TransactionWriter />)
    userEvent.type(screen.getByLabelText("Amount"), "1000");

    userEvent.click(screen.getByText('Deposit'))

    await screen.findByText("1000");

    expect(spyOnGetStatement).toHaveBeenCalledWith(params);

  });
})
