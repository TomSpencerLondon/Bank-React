import React from 'react';
import AccountPage from '../../../src/pages';
import * as TransactionWriter from "../../../src/components/TransactionWriter";
import {render} from "@testing-library/react";
import * as TransactionDisplay from "../../../src/components/TransactionDisplay";

// always do spies but fairly often mock spy
// dont mock unless you have to
const SpyOnTransactionWriter = jest.spyOn(TransactionWriter, "default");
const SpyOnTransactionDisplay = jest.spyOn(TransactionDisplay, "default");
describe('Account Page', function () {
  it('renders a transaction writer', () => {
    render(<AccountPage />);
    expect(SpyOnTransactionWriter).toBeCalled();
  });

  it('renders a transaction display', () => {
    render(<AccountPage />);
    expect(SpyOnTransactionDisplay).toBeCalled();
  })

});
