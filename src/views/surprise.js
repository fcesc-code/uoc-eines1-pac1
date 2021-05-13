import renderComponent from '../core/renderComponent';
import SERVICE from '../services/service';
// eslint-disable-next-line
import images from './../../assets/img/*.jpg';

function getRandomRecipe(){
  const range = SERVICE.getNumberOfRecipies();
  const randomNumberWithinRange = Math.round(Math.random() * range).toString();
  const prefix = '0';
  const stringifiedRange = range.toString();
  const dif = stringifiedRange.length - randomNumberWithinRange.length;
  const randomId = `${prefix.repeat(dif)}${randomNumberWithinRange}`;
  const [ result ] = SERVICE.getRecipeById(randomId);
  result.newUrl = images[`${randomId}_1`];
  return result;
}

const stepsTemplate = `<li>{{step}}</li>`;
const ingredientsTemplate = `<li>{{quantity}} {{name}}</li>`;

function surpriseComponent(){

  const RECIPE = getRandomRecipe();
  renderComponent(`
    <li class="recipe" id="{{id}}">
      <img class="img__detail" src={{imageUrl}}>
      <p>name: {{name}}</p>
      <p>category: {{category}}</p>
      <p>time: {{time}}</p>
      <p>country: {{country}}</p>
      <p>steps:</p>
      <ul>{{%%steps%%}}</ul>
      <p>ingredients:</p>
      <ul>{{%%ingredients%%}}</ul>
    </li>
  `)({
    parent: '#content',
    styles: null,
    data: {
      id: RECIPE.id,
      imageUrl: RECIPE.newUrl,
      name: RECIPE.name,
      category: RECIPE.category,
      origin: RECIPE.country,
      time: RECIPE.time,
      steps: {
        list: RECIPE.steps.map( step => ({ step }) ),
        itemTemplate: stepsTemplate
      },
      ingredients: {
        list: RECIPE.ingredients,
        itemTemplate: ingredientsTemplate
      }
    }
  });
}

export default surpriseComponent;