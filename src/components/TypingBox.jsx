import {createRef, useEffect, useMemo, useRef, useState} from 'react'
import randomwords from 'random-words'
import UpperMenu from "./UpperMenu";

const TypingBox = () => {

    const inputRef = useRef(null);
    const [countDown, setCountDown] = useState(15);
    const [testStart, setTestStart] = useState(false);
    const [testEnd, setTestEnd] = useState(false);
    const [wordsArray, setWordsArray] = useState(()=> {
        return randomwords(50);
    });

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currCharIndex, setCurrentCharIndex] = useState(0);

    const wordsSpanRef = useMemo(()=> {
        return Array(wordsArray.length).fill(0).map(i=>createRef(null));
    }, [wordsArray])

    const startTimer = () => {

        const intervalId = setInterval(timer, 1000);

        function timer() {
            setCountDown((prevCountDown)=> {
                if(prevCountDown === 1) {
                    setTestEnd(true);
                    clearInterval(intervalId);
                    return 0;
                }
                return prevCountDown - 1
            });
        }
        
    }

    const handleUserInput = (e) => {

        if(!testStart) {
            startTimer();
            setTestStart(true);
        }
        
        const allCurrChars = wordsSpanRef[currentWordIndex].current.childNodes;

        // logic for space key
        if(e.keyCode === 32) {


            if (currCharIndex === allCurrChars.length) {
                // remove cursor from last place in a word
                allCurrChars[currCharIndex-1].classList.remove("current-right");
            } else {
                // remove cursor from in between of a word
                allCurrChars[currCharIndex].classList.remove("current");

            }
            

            wordsSpanRef[currentWordIndex+1].current.childNodes[0].className = "current";
            setCurrentWordIndex(currentWordIndex+1);
            setCurrentCharIndex(0);
            return;
        }

        // logic for backspace
        if(e.keyCode === 8) {
            if(currCharIndex !== 0) {

                if(allCurrChars.length === currCharIndex) {

                    if(allCurrChars[currCharIndex-1].className.includes("extra")) {
                        allCurrChars[currCharIndex-1].remove();
                        allCurrChars[currCharIndex-2].className += " current-right"
                    } else {
                        allCurrChars[currCharIndex-1].className = "current";
                    }

                    setCurrentCharIndex(currCharIndex-1);
                    return;
                }
                
                allCurrChars[currCharIndex].className = "";
                allCurrChars[currCharIndex-1].className = "current";
                setCurrentCharIndex(currCharIndex-1);
            }
            return;
        }

        if(currCharIndex === allCurrChars.length) {
            let newSpan = document.createElement("span");
            newSpan.innerText = e.key;
            newSpan.className = "incorrect extra current-right";
            allCurrChars[currCharIndex-1].classList.remove("current-right");
            wordsSpanRef[currentWordIndex].current.append(newSpan);
            setCurrentCharIndex(currCharIndex+1);
            return;
        }


        if(e.key === allCurrChars[currCharIndex].innerText) {
            allCurrChars[currCharIndex].className = "correct";
        } else {
            allCurrChars[currCharIndex].className = "incorrect";

        }

        if(currCharIndex === allCurrChars.length - 1) {
            allCurrChars[currCharIndex].className += " current-right"
        } else {
            allCurrChars[currCharIndex+1].className = "current";
        }

        setCurrentCharIndex(currCharIndex + 1);        
    }

    const focusInput = () => {
        inputRef.current.focus();
    }

    useEffect(()=> {
        focusInput();
        wordsSpanRef[0].current.childNodes[0].className = "current";
    }, [])

  return (
    <div>
        <UpperMenu countDown={countDown} />
        {testEnd ? (<h1>Test Over</h1>): (<div className="type-box" onClick={focusInput}>
            <div className="words">
                {
                    wordsArray.map((word, index) => (
                        <span className="word" ref={wordsSpanRef[index]}>
                            {word.split("").map((char) => (
                                <span>{char}</span>
                            ))}
                        </span>
                    ))
                }
            </div>
        </div>)}
        <input
        type="text"
        className="hidden-input"
        ref={inputRef}
        onKeyDown={handleUserInput}
        />
    </div>
  )
}

export default TypingBox