import {useState} from 'react'
import randomwords from 'random-words'

const TypingBox = () => {

    const [wordsArray, setWordsArray] = useState(()=> {
        return randomwords(50);
    });

  return (
    <div>
        <div className="type-box">
            <div className="words">
                {
                    wordsArray.map((word) => (
                        <span className="word">
                            {word.split("").map((char) => (
                                <span>{char}</span>
                            ))}
                        </span>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TypingBox