const btn = document.querySelector('.btn');
const quote = document.querySelector('.text');

const quotes = [{
   quote: `"Don't invest in something you don't understand."`
}, {
   quote: `"Don't do a deal with someone you don't trust."`},
{
    quote: `"Don't buy a stock unless you think it's undervalued"`
}, {
    quote: `"Price dips are an opportunity to increase your positions"`
}, {
    quote: `"The future is never clear"`
}]

console.log(quotes)



btn.addEventListener('click', function(){
    const random = Math.floor(Math.random() * quotes.length); 
    quote.innerText = quotes[random].quote
});
