/*
Going To The Cinema 7kyu

My friend John likes to go to the cinema. He can choose between system A and system B.

System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
then for each additional ticket he pays 0.90 times the price paid for the previous ticket.

Example:

If John goes to the cinema 3 times:

System A : 15 * 3 = 45
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)

John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

ceil(price of System B) < price of System A.
*/

/* (P.R.E.P(Parameters, Returns, Examples, Pseudo-Code))
    Parameters = Input consists of three variables. Variables will be integers. First variable represents the price of the card, Second variable represents the price of the ticket and 
                    the third variable will represent the price if the ticket with the card(not rounded yet).

    Returns = Return a single integer. This integer represents the number of ticket purchases it would take to make buying a card worth the value of its initial price.

    Examples =  movie(500, 15, 0.9)  // should return 43 (with card the total price is 634, with tickets 645)
                movie(100, 10, 0.95) // should return 24 (with card the total price is 235, with tickets 240)
    
    Pseudo-Code = Create a counting variable and use a for loop to itterate through the 'ticket purchases'. Each loop will add the the . When the counting variable rounded up divided by 
                    the current loop itteration (ticket average) exceeds the second input variable(ticket price without the discount), break the loop and return the loop itteration minus 1.
*/

function movie(card, ticket, perc) {
    let discTicket = ticket * perc;
    let nonDiscCount = 0;
    let discCountTotal = card;
    let iCounter = 0;
    for(let i = 0; nonDiscCount < Math.ceil(discCountTotal); i ++){
     nonDiscCount += ticket;
     discCountTotal += discTicket;
     discTicket = discTicket * perc;
      iCounter++
    }
    return iCounter;
  };
