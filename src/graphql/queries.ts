import { gql } from '@apollo/client';
export const VERIFY_TOKEN = gql `
    query verifyToken {verifyToken}
`

export const GET_ALL_CANDLES = gql `
query allCandles {
    allCandles
    {
      time
      open
      high
      low
      close
    }
  }
`