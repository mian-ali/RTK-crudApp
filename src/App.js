import './App.css';

import { useGetAllPostQuery, useGetPostbyIdQuery } from './services/postingApi';

function App() {
  // const res = useGetAllPostQuery();
  const res = useGetPostbyIdQuery(1);
  console.log(res);

  if (res.isLoading) return <div>loading...</div>;
  return (
    <div className="App">
      <h1>Hello</h1>

      {/* {res.data.map((obj) => {
        return <div key={obj.id}>{obj.title}</div>;
      })} */}
    </div>
  );
}

export default App;
