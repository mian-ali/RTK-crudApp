import './App.css';

import { useGetAllPostQuery } from './services/postingApi';

function App() {
  const res = useGetAllPostQuery();
  console.log(res);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
