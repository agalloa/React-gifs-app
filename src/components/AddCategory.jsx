import { useState } from "react";


export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('Naruto');
    
    const onInputChange = (event) => {
        //Para obtener el valor de un input se utiliza: event.target.value
        setInputValue(event.target.value);
    }
    const onSubmit = (event) => {
        //evita que la pagina se recargue al enviar un form
        event.preventDefault();
        //impide que al no tener caracateres o solo uno no se busque.
        if( inputValue.trim().length <= 1 ) return;
        //inserta la nueva categoria al  hacer enter
        setCategories( ( categories ) => [ inputValue, ...categories]);
        
        //borra el input
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Find Gif"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
  )
}
