import * as React from 'react';
import {render, screen} from "@testing-library/react";
import AccountPage from "../../src/pages";

it('works', () => {
  render(<AccountPage />)
  expect(screen.getByText('Hello Next.js')).toBeInTheDocument()
})
