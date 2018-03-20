// React Components are ES6 Classes that extend the class React.Component

class ProductList extends React.Component {
  render() {
    return (
      <div className="ui unstackable items">
      Hello, friend! I am a basic React Component.
      </div>
    );
  }
}

// We need to instruct React to render this ProductList inside a specified DOM Node.

/* We pass two arguments to the ReactDOM.render() method, The first argument is what we'd like to render.    The second argument is where to render.
  - In React, native HTML element always start with a lowercase letter whereas React Component names always start with an uppercase letter.
*/

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);