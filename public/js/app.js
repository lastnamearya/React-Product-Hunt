// React Components are ES6 Classes that extend the class React.Component

class ProductList extends React.Component {
  render() {
    return (
      <div className="ui unstackable items">
        <Product />
      </div>
    );
  }
}

// Building Product (child component)

class Product extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="image">
          <img src='images/products/image-aqua.png'/>
        </div>
        <div className="middle aligned content">
          <div className="description">
            <a>Fort Knight</a>
            <p>Authentic renaissance actors, delivered in just two weeks.</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img  
              className="ui avatar image"
              src='images/avatars/daniel.jpg'
            />
          </div>
        </div>
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