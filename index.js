function scuberGreetingForFeet(d){
  // Write your code here!
  if(d <= 400){
    return `This one is on me!`;
  }else if (d > 400 && d < 2000){
    return `That will be twenty bucks.`;
  } else if (d >= 2000 && d < 2500){
    return `I will gladly take your thirty bucks.`;
  }else if (d>= 2500){
    return `No can do.`;
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good.": "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case `generous`:
      return `Thank you so much.`;
    case `not as generous`:
      return `Thank you.`;
    default:
      return `Bye.`;
  }
}