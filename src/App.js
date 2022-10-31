import './App.css';

import {
  useGetAllPostQuery,
  useGetPostbyIdQuery,
  useGetPostByLimitQuery,
  usePostDeleteMutation,
} from './services/postingApi';

function App() {
  // const res = useGetAllPostQuery();
  const [postDelete, res] = usePostDeleteMutation();
  console.log(res);

  // if (res.isLoading) return <div>loading...</div>;
  return (
    <div className="App">
      <h1>Hello</h1>

      <button onClick={() => postDelete(2)}>Del</button>
      {/* {res.data.map((obj) => {
        return <div key={obj.id}>{obj.title}</div>;
      })} */}
    </div>
  );
}

export default App;
