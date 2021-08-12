import React, {useState} from 'react';
import './SearchBar.css'

function SearchBar({setLocationChild}) {
    const [query, setQuery] = useState('') /*不要轻易写null*/

    const changeHandler = (e) => {
        e.preventDefault();
        setQuery(e.target.value)

    }

    function handleClick() {
        setLocationChild(query)

    }

    return (
        <div className='searchBar-container'>
            <form>
                <label htmlFor='query'>
                    <input type='text'
                           onChange={changeHandler}
                           id='query'
                           value={query}
                           placeholder='Enter a city'
                    />
                </label>
                <button
                    type='button' /*不写submit上面就不写e.preventDefault*/
                    onClick={handleClick} /*不要前面写括号*/

                >
                    Go!
                </button>
            </form>
        </div>
    )
}

export default SearchBar