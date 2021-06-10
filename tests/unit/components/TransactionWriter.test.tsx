import React from "react";
import {render, screen } from "@testing-library/react";
import TransactionWriter from "../../../src/components/TransactionWriter";

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
})
