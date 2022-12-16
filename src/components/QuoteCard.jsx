import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react';

const QuoteCard = () => {

    const colors = ['red', 'blue', 'darkgreen', 'goldenrod', '#212121']

    const randomGen = () => {
        return Math.floor(Math.random() * quotes.length)
    }

    const randomColor = () => {
        return Math.floor(Math.random() * colors.length)
    }

    const [quote, setQuote] = useState(quotes[randomGen()])

    const [color, setColor] = useState(colors[randomColor()])

    const change = () => {
        setQuote(quotes[randomGen()])
        let num = colors[randomColor()]
        setColor(colors[randomColor()])
    }


    return (
        <div className="container" style={{background:color}}>
            <div className='quote-card' >
                <div className="quote">
                    <span className='quote-mark' style={{ color: color }}>
                        "
                    </span>
                    <p style={{ color: color }}>
                        {quote.quote}
                    </p>
                    <span className='quote-mark' style={{ color: color }}>
                        "
                    </span>
                </div>
                <div className="quote-author" style={{ color: color }}>
                    {quote.author}
                </div>
                <button className="quote-change" style={{ background: color }} onClick={change}> » </button>
            </div>
        </div>
    );
};

export default QuoteCard;