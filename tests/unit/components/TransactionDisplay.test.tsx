import {render, screen, within} from "@testing-library/react";
import React from "react";
import TransactionDisplay from "../../../src/components/TransactionDisplay";

describe('Display', () => {
  it('shows a header row', async () => {
    render(<TransactionDisplay />)
    const rows = await screen.findAllByRole('row');
    expect(within(rows[0]).getAllByRole('cell')[0]).toHaveTextContent("Date")
    expect(within(rows[0]).getAllByRole('cell')[1]).toHaveTextContent("Amount")
    expect(within(rows[0]).getAllByRole('cell')[2]).toHaveTextContent("Balance")
  });
})
