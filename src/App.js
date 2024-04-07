import './App.css';

export default function App() {
  // 👇️ The variable stores an array
  const arr = ['bobby', 'hadz', 'com'];

  return (
    <div>
      {arr.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element}</h2>
          </div>
        );
      })}
    </div>
  );
}
