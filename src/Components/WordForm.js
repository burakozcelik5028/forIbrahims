import { useState } from "react";

const WordForm = ({onSaveWordData}) => {

    const[enteredName, setEnteredName] = useState('');
    const[enteredMeaning, setEnteredMeaning] = useState('');
    const[enteredImage, setEnteredImage] = useState('');
    const[enteredDescription, setDescription] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };
    
    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    };

    const meaningChangeHandler = (event) => {
        setEnteredMeaning(event.target.value);
    };

    const imageChangeHandler = (event) => {
        setEnteredImage(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if(enteredImage == ''){
            alert( "Please fill the image area." );
        } else {
            const wordData = {
            word: enteredName,
            meaning: enteredMeaning,
            image: enteredImage,
            description: enteredDescription
        };

        onSaveWordData(wordData);

        setEnteredName('');
        setEnteredMeaning('');
        setEnteredImage('');
        setDescription('');
        }
        
    };

    return(
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label>Word: </label>
                    <input type='text' value={enteredName} onChange={nameChangeHandler}></input>
                </div>
                <div>
                    <label>Meaning: </label>
                    <input type='text' value={enteredMeaning} onChange={meaningChangeHandler}></input>
                </div>
                <div>
                    <label>Description: </label>
                    <input type='text' value={enteredDescription} onChange={descriptionChangeHandler}></input>
                </div>
                <div>
                    <label>Image: </label>
                    <input type='text' value={enteredImage} onChange={imageChangeHandler}></input>
                </div>
                <div>
                    <button type='submit'>Add Word</button>
                </div>
                
                <br></br>
            </div>
        </form>
    )
}

export default WordForm;