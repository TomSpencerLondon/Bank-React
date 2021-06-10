import React from "react";
import {render, screen} from "@testing-library/react";
import TransactionWriter from "../../../src/components/TransactionWriter";

describe('TransactionWriter', () => {
  it('renders an Amount input', () => {
    render(<TransactionWriter />)
    expect(screen.getByLabelText("Amount")).toBeInTheDocument();
  });
})
