import React from 'react';

function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}
function Header() {
  return (
    <div>
      <h1>New Header</h1>
    </div>
  );
}
function Content() {
  return (
    <div>
      <h2>New Content</h2>
      <p>Hello World!!!</p>
    </div>
  );
}
export default App;