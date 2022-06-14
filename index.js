const quoteDisplay = document.getElementById("quote")
const button = document.querySelector("button");

//Challenge: Write a function that will display a random Inspirational Quote
//from the quotes array, when the button is pressed.
const quotes = [
    "Your life can’t fall apart if you never had it together.",
    "When the going gets tough, the tough gets tougher.",
    
   "Life is hard, but it’s even harder if you’re stupid.",
    
    "Everyone has a purpose in life. Perhaps yours is watching television",
    
    "Life hack: you can’t do anything wrong if you don’t do anything at all.",
    
    "Life better be a destination because this journey sucks.",
    
    "You’re naturally funny because your life is a joke.",
    
    "The meaning of life is to find your gift. So good luck with that.",
    
    "Today will be a day like every other day.",
    "Life is pain. Anyone who says otherwise is selling something.", 

    "When life knocks you down, stay there and take a nap.",

    "Life is what happens when you’re busy reading inspirational quotes.",

    "It’s not just Monday. Your whole life sucks.",

    "If you never try anything new, you’ll miss out on many of life’s great disappointments",

    "Everything is bad and everyone is dumb.",

    "You only die once.",

    "Carpe Nothing.",

    "Life is 10% what happens to you, and 90% how much money you have.",

    "When you think you’re screwed, remember we’re all on a big, wet ball floating in the dark.",

    "Today is the first day of the rest of your life. But so was yesterday, and look how that turned out.",

    "Raise your hand if you have had quite enough unsolicited advice about what should be done with any lemons that life may or may not give you.",

    "It’s all downhill from here.",
]

function newQuote() {
    //your code()
    let quoteList = Math.floor(Math.random() * (quotes.length))
    // console.log(quotes[quoteList])
    quoteDisplay.innerHTML = (quotes[quoteList])
}

// button.addEventListener('click', showQuote())
