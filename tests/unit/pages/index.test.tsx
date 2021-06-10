import React from 'react';
import AccountPage from '../../../src/pages';
import * as TransactionWriter from "../../../src/components/TransactionWriter";
import {render} from "@testing-library/react";

// always do spies but fairly often mock spy
// dont mock unless you have to
const SpyOnTransactionWriter = jest.spyOn(TransactionWriter, "default");
describe('Account Page', function () {
  it('renders a transaction writer', () => {
    render(<AccountPage />);
    expect(SpyOnTransactionWriter).toBeCalled();
  });
});
