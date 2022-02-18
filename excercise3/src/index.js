import ReactDOM from 'react-dom';
import App from './App';

const notes = [
  {
    id: 1,
    kuva: 1,
    nimi: 'Kurkku',
    hinta: '2 €/kg',
    ryhma: 'vihannes',
    varastossa: 'paljon'
  },
  {
    id: 2,
    kuva: 1,
    nimi: 'Tomaatti',
    hinta: '1.5 €/kg',
    ryhma: 'vihannes',
    varastossa: 'loppunut'
  },
  {
    id: 3,
    kuva: 1,
    nimi: 'Anjovis',
    hinta: '5 €/kg',
    ryhma: 'vihannes',
    varastossa: 'vähän'
  },
  {
    id: 4,
    kuva: 1,
    nimi: 'Omena',
    hinta: '1 €/kg',
    ryhma: 'hedelmä',
    varastossa: 'hieman'
  },
  {
    id: 5,
    kuva: 1,
    nimi: 'Avocako',
    hinta: '2 €/kg',
    ryhma: 'hedelmä',
    varastossa: 'yksi kpl'
  },
  {
    id: 6,
    kuva: 1,
    nimi: 'Maito',
    hinta: '1 €/l',
    ryhma: 'maitotuote',
    varastossa: 'litroittain'
  },
  {
    id: 7,
    kuva: 1,
    nimi: 'Jugurtti',
    hinta: '1,2 €/l',
    ryhma: 'maitotuote',
    varastossa: 'paljon'
  },
  {
    id: 8,
    kuva: 1,
    nimi: 'Imuri',
    hinta: '200 €',
    ryhma: 'siivous',
    varastossa: 'ehkä'
  }
]

ReactDOM.render(
  <App notes={notes} />,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
