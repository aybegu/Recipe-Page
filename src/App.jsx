import { useState } from 'react'
import Omalette from '../public/assets/images/image-omelette.jpeg'


function App() {

  return (
    <div className='container'>
      <main className='main'>
        <img src={Omalette} className='main--image' alt='omelette-image' />
        <h1 className='main--header'>Simple Omelette Recipe</h1>
        <p className='main--text'>
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
          to perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </p>
        <div className='main--preparation'>
          <h4>Preparation time</h4>
          <ul className='main--unordered-li'>
            <li className='main--list'>
              <b>Total:</b> Approximately 10 minutes
            </li>
            <li className='main--list'>
              <b>Preparation:</b> 5 minutes
            </li>
            <li className='main--list'>
              <b>Cooking:</b> 5 minutes
            </li>
          </ul>
        </div>
        <div className='main--ingredients'>
          <h2 className='main--title'>Ingredients</h2>
          <ul className='main--unordered-li'>
            <li className='main--list'>2-3 large eggs</li>
            <li className='main--list'>Salt, to taste</li>
            <li className='main--list'>Pepper, to taste</li>
            <li className='main--list'>1 tablespoon of butter or oil</li>
            <li className='main--list'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>
        <div className='main--instructions'>
          <h2 className='main--title'>Instructions</h2>
          <ol>
            <li className='main--list'>
              <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
              You can add a tablespoon of water or milk for a fluffier texture.
            </li>
            <li className='main--list'>
              <b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add butter or oil.
            </li>
            <li className='main--list'>
              <b>Cook the omelette:</b> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
              the eggs evenly coat the surface.
            </li>
            <li className='main--list'>
              <b>Add fillings (optional):</b> When the eggs begin to set at the edges but are still slightly runny in the
              middle, sprinkle your chosen fillings over one half of the omelette.
            </li>
            <li className='main--list'>
              <b>Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a plate.
            </li>
            <li className='main--list'>
              <b>Enjoy:</b> Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>
        </div>
        <div className='main--nutrition'>
          <h2 className='main--title'>Nutrition</h2>
          <p className='main--text'>The table below shows nutritional values per serving without the additional fillings.</p>
          <table className='main--table'>
            <tr>
              <td className='main--nut-header'>Calories</td>
              <td className='main--nut-info'><b>277kcal</b></td>
            </tr>
            <tr>
              <td className='main--nut-header'>Carbs</td>
              <td className='main--nut-info'><b>0g</b></td>
            </tr>
            <tr>
              <td className='main--nut-header'>Protein</td>
              <td className='main--nut-info'><b>20g</b></td>
            </tr>
            <tr>
              <td className='main--nut-header'>Fat</td>
              <td className='main--nut-info'><b>22g</b></td>
            </tr>
          </table>
        </div>
      </main>

      <footer class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/aybegu">Ayca Berfin Gurler</a>.
      </footer>
    </div>
  )
}

export default App
