import React , {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        setText(newText)
    }
    const handleLoClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        setText(newText)
    }
    const handleOnChange= (event)=>{
        // console.log("on change");
        setText(event.target.value)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
    };

    const handletextExtract =()=>{
        const regex = /[0-9/A-Z/a-z/ /]/g;

        const letters = text.match(regex);
        const res1 = letters.join('');
        setText(res1)
    };
    const handleNumExtract =()=>{
        const regex = /[0-9/ /]/g;

        const digits = text.match(regex);
        const res = digits.join('');
        setText(res)
    };
    const capitalize = () => {

        let firstchar = text.charAt(0); // storing the first char of the string
        let newText= firstchar.toUpperCase(); // converting that to uppercase
        setText(newText+text.slice(1)); // printing it with rest excluding the first char by using slice

    }

    const onRemoveDuplicatesClick = (e) => {
        let newText = text.split(' ').filter(function(item,i,allItems){
            return i === allItems.indexOf(item);
        }).join(' ');

        setText(newText)
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const[text,setText] = useState("");
    return (
        <>
        <div className= "container">

            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-outline-dark mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-outline-dark mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            <button type="submit" onClick={handleReverse} className="btn btn-warning mx-2 my-2">Reverse</button>
            <button type="submit" onClick={handletextExtract} className="btn btn-outline-info mx-2 my-2">Remove all the symbols</button>
            <button type="submit" onClick={handleNumExtract} className="btn btn-outline-info mx-2 my-2">Extract all numbers</button>
            <button type="submit" onClick={capitalize} className="btn btn-outline-success mx-2 my-2">Capitalize</button>
            <button type="submit" onClick={onRemoveDuplicatesClick} className="btn btn-outline-secondary mx-2 my-2">Remove Duplicate</button>
            <button type="submit" onClick={handleCopy} className="btn btn-outline-secondary mx-2 my-2">Copy Text</button>
            <button type="submit" onClick={handleExtraSpaces} className="btn btn-outline-secondary mx-2 my-2">Remove Extra Space</button>


        </div>

     <div className="container my-3">
         <h2>Your text summary</h2>
         {/*Call the split() method on the string, passing it a string containing a space as a parameter. The split method will return an array of the string's words, on which you can access the length property to get the number of words in the string.*/}
         <p>{text.replace(/\n/g, " ").split(' ').filter(value => value != "").length } words and {text.length} characters</p>
         <p>{0.008 * text.replace(/\n/g, " ").split(' ').filter(value => value != "").length } Minutes is your Average Read Speed</p>
         <h2>Preview</h2>
         <p>{text.length>0?text:"Nothing to preview!"}</p>
             </div>

    </>
    );
}

