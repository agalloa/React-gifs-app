import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {

  //state: los hooks trabajan basado en sus posiciones.
  const [categories, setCategories] = useState([ 'One Punch','naruto' ]);
  
  const onAddCategory = () => {
    //add new category
    setCategories([...categories, 'nier automata']);

  }
  return (
    <>
      {/*Title */}
        <h1>Gif app</h1>
      {/*Input */}
      <AddCategory setCategories={setCategories}/>
      {/*List */}
      <button onClick={ onAddCategory }>Add</button>
      <ol>
        {
          categories.map((category) => {
            return <li key={ category }>{ category }</li>
          })
        }
      </ol>
    </>
  )
}
