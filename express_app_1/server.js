const express = require('express');

const app = express();

var quotes = [
    "Nothing is impossible, the word itself says “I’m possible”!—Audrey Hepburn",
    "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.—Maya Angelou",
    "Perfection is not attainable, but if we chase perfection we can catch excellence. —Vince Lombardi",
    "Life is 10% what happens to me and 90% of how I react to it. —Charles Swindoll",
    "Remember no one can make you feel inferior without your consent. —Eleanor Roosevelt",
    "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination. —Jimmy Dean",
    "Too many of us are not living our dreams because we are living our fears. —Les Brown",
    "The most common way people give up their power is by thinking they don’t have any. —Alice Walker",
    "The most difficult thing is the decision to act, the rest is merely tenacity. —Amelia Earhart",
    "It is during our darkest moments that we must focus to see the light. —Aristotle Onassis",
    "The only way to do great work is to love what you do. —Steve Jobs",
    "Change your thoughts and you change your world. —Norman Vincent Peale",
    "The question isn’t who is going to let me; it’s who is going to stop me. —Ayn Rand",
    "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced. —Vincent Van Gogh",
    "Build your own dreams, or someone else will hire you to build theirs. —Farrah Gray",
    "A person who never made a mistake never tried anything new.——Albert Einstein",
    "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. —Leonardo da Vinci",
    "We can’t help everyone, but everyone can help someone. —Ronald Reagan",
    "Nothing will work unless you do. —Maya Angelou",
    "The only person you are destined to become is the person you decide to be. —Ralph Waldo Emerson"
];

app.get('/', function(req, res){
    var x = Math.floor((Math.random() * 19) + 1); // Array goes from 0 to 19
    res.send(`<h1 style='text-align: center;'>Daily Quotes</h1>
                <p style='color: gray; text-align: center; font-size: 22px; font-weight: bold;'>`+quotes[x]+`</p>`);
});


app.listen(3000, function(){
    console.log('Running on 3000 port');
});