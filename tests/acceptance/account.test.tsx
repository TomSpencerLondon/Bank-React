import * as React from 'react';
import {render, screen, within } from "@testing-library/react";
import AccountPage from '../../src/pages';
import userEvent from "@testing-library/user-event";
it('works', async () => {

  // Date       || Amount || Balance
  // 14/01/2012 || -500   || 2500
  // 13/01/2012 || 2000   || 3000
  // 10/01/2012 || 1000   || 1000

  render(<AccountPage />)

  userEvent.type(screen.getByLabelText("Amount"), "1000");
  userEvent.click(screen.getByRole('button', {name: /deposit/i}))
  userEvent.type(screen.getByLabelText("Amount"), "2000");
  userEvent.click(screen.getByRole('button', {name: /deposit/i}))
  userEvent.type(screen.getByLabelText("Amount"), "500");
  userEvent.click(screen.getByRole('button', {name: /withdraw/i}))

  const rows = await screen.findAllByRole('row');
  expect(within(rows[0]).getAllByRole('cell')[0]).toHaveTextContent("Date")
  expect(within(rows[0]).getAllByRole('cell')[1]).toHaveTextContent("Amount")
  expect(within(rows[0]).getAllByRole('cell')[2]).toHaveTextContent("Balance")

  await screen.findByText("14/01/2012");

  expect(within(rows[1]).getAllByRole('cell')[0]).toHaveTextContent("14/01/2012")
  expect(within(rows[1]).getAllByRole('cell')[1]).toHaveTextContent("-500")
  expect(within(rows[1]).getAllByRole('cell')[2]).toHaveTextContent("2500")

  expect(within(rows[2]).getAllByRole('cell')[0]).toHaveTextContent("13/01/2012")
  expect(within(rows[2]).getAllByRole('cell')[1]).toHaveTextContent("2000")
  expect(within(rows[2]).getAllByRole('cell')[2]).toHaveTextContent("3000")

  expect(within(rows[3]).getAllByRole('cell')[0]).toHaveTextContent("10/01/2012")
  expect(within(rows[3]).getAllByRole('cell')[1]).toHaveTextContent("1000")
  expect(within(rows[3]).getAllByRole('cell')[2]).toHaveTextContent("1000")
})
