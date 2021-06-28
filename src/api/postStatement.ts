import fetch from "isomorphic-unfetch";


const postStatement = async ({action, amount}: any): Promise<number> => {
  const response = await fetch(
    'https://realbank.com/statement', {
      method: 'POST',
      body: JSON.stringify({
        amount,
        action
      })
    });

    return response.status;
}

export default postStatement;
