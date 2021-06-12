import renderComponent from '../core/renderComponent';

function notFoundComponent(){
  renderComponent(`
    <h4>Error 404</h4>
    <p> Sorry, the page you were looking for could not be found.</p>
    <p></p>
    <p>Maybe you want to <a href="/" data-navigo>navigate back to homepage</a>?</p>
    <p>What about <a href="/surprise" data-navigo>an unexpected recipe</a>?</p>
    <p>Do you want to <a href="/filters" data-navigo>filter out our recipes</a>?</p>
  `)({
    parent: '#content',
    styles: null,
    data: {}
  });
}

export default notFoundComponent;