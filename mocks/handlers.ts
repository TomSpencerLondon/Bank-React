import {rest} from 'msw';

export const handlers = [
  rest.post('/transactions', (_req, res, ctx) => {
    return res(
      ctx.status(200))
  }),
  rest.get('/transactions', (_req, res, ctx) => {
    return res(
      ctx.json({
        transactions: [
          {
            id: 3,
            date: "14/01/2012",
            amount: "-500"
          },
          {
            id: 2,
            date: "13/01/2012",
            amount: "2000"
          },
          {
            id: 1,
            date: "10/01/2012",
            amount: "1000"
          }
        ]
      })
    );
  })
]
