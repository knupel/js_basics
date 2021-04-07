// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
const buyFlightTicket = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      if (error) {
        reject("Sorry your payment was not successful");
      } else {
        resolve("Thank you, your payment was successful");
      }
    }, 3000);
  });
};

// then and ctach if function from class Promise I suppose.
buyFlightTicket()
  .then((success) => console.log(success))
  .catch((error) => console.log(error));
