import React from 'react';

const App = () => (
    <div>
      <Header />
      <Content />
    </div>
);

const Header = () => (
    <div>
      <h1>New Header</h1>
    </div>
);

const Content = () => (
    <div>
      <h2>New Content</h2>
      <p>Hello World!!!</p>
    </div>
);

export default App;