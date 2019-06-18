import React from 'react';
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import './App.css';

const QUERY = gql`
query {
  countries {
    name
    languages {
      native
    }
  }
}
`

export default function App() {
  const { data, loading } = useQuery(QUERY);
  return (
    <React.Fragment>
      <ul>
        {loading && "LOADING"}
        {data && data.countries && data.countries.map((country, index) => {
          const nativeLanguageText = country.languages[0] && country.languages[0].native ?
            `${country.name}'s native language is ${country.languages[0].native}`
            :
            `${country.name} ain't got no native language?`;

          return (
            <li key={index}>
              {country.name}
              <button onClick={() => alert(nativeLanguageText)}>
                Language
              </button>
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}
