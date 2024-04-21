import {Component} from 'react';
import propTypes from 'prop-types'
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error, errorInfo){
    this.setState({hasError: true});
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError){
      return (
        <div className='error-page'>
          <h1>404 Error</h1>
          <h2>Something went wrong.</h2>
          <p>Please try refreshing the page or go back <a href='/'>Home</a></p>
          
        </div>
      );
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: propTypes.node.isRequired
};

export default ErrorBoundary;