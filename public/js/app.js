// React Components are ES6 Classes that extend the class React.Component

// Our Product Component is now data-driven. Based on the props it receives it can render any product that we'd like.

class ProductList extends React.Component {
  render() {
    const product = Seed.products[0];
    return (
      <div className="ui unstackable items">
        <Product 
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
        />
      </div>
    );
  }
}

// Building Product (child component)

// In React, a componet can access all its props thorugh the object this.props

class Product extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={this.props.productImageUrl} />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a>
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
          </div>
          <div className="description">
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img  
              className="ui avatar image"
              src={this.props.submitterAvatarUrl}
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