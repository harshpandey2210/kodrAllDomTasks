const quotes = [
  "The only way to do great work is to love what you do.",
  "Life is what happens when you're busy making other plans.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It is during our darkest moments that we must focus to see the light.",
  "The only impossible journey is the one you never begin.",
  "In the end, it's not the years in your life that count. It's the life in your years.",
  "You miss 100% of the shots you don't take.",
  "Whether you think you can or you think you can't, you're right.",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "A person who never made a mistake never tried anything new.",
  "The mind is everything. What you think you become.",
  "Strive not to be a success, but rather to be of value.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t stop when you’re tired. Stop when you’re done."
];   
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener('click',()=>{
    const index = Math.random()*20;
    h1.textContent = quotes[Math.floor(index)];
})