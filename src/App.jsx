import Hello from './assets/Hello';
import Counter from './assets/Counter';
import Contact from "./assets/Contact";

function App() {
  const helloData = [
    { name: 'Supisara', message: 'Hi there'},
    { name: 'Timmy', message: 'Hello..'}
  ];

  return (
  <div classname='App'>
    <Counter/>
    {helloData.map((data, index) => (
      <Hello key={index} name={data.name} message={data.message} />
    ))}
    <Contact email="s6506021621187@email.kmutnb.ac.th" phone="0813254898" />
  </div> 
  );
}

export default App;
