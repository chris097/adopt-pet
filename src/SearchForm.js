import React, {useEffect, useState, useContext} from 'react';
import pet, {ANIMALS} from "@frontendmasters/pet";
import Results from './Result';
import useDropdown from './UseDropdown';
import ThemeContext from './ThemeContext';


const SearchForm = () => {
    const [location, setLocation] = useState('Seattle, WA');
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown('animal', "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown('breed', "", breeds);
    const [pets, setPets] = useState([]);
    const [theme, setTheme] = useContext(ThemeContext)


    async function requestPet() {
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal
        });

        console.log('animals', animals);

        setPets(animals || []);
    }

    useEffect(() => {
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then(({ breeds }) => {
            const breedString = breeds.map(({ name }) => name);
            setBreeds(breedString);
        });
    }, [animal, setBreeds, setBreed]);

    return (
        <div className="search-params">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    requestPet();
                } }>
                <label htmlFor="location">
                    location
                    <input id="location"
                        value={location}
                        placeholder="Location"
                        onChange={e => setLocation(e.target.value)} />
                </label>
                {/* Animal section */}
                <AnimalDropdown />
                {/* Brred section */}
                <BreedDropdown />
                <label htmlFor="theme">
                    Theme
                    <select 
                    value={theme}
                    onChange={e => setTheme(e.target.value)}
                    onBlur={e => setTheme(e.target.vlue)}
                    >
                        <option value="peru">Peru</option>
                        <option value="darkblue">Dark Blue</option>
                        <option value="mediumorchid">Medium Orchid</option>
                        <option value="chartreuse">Chartreuse</option>
                    </select>
                    
                </label>
                <button style={{backgroundColor: theme}}>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchForm;


