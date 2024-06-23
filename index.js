let express = require("express");
let app = express();
let port = 3000;

// 1
function getWelcomeMessage() {
  return "Welcome to our service!";
}

app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

// 2
function getGreetingMessage(username) {
  return "Hello " + username + "!";
}

app.get("/username", (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

// 3
function checkPasswordStrength(password) {
  if (password.length > 15) {
    return "Password is strong";
  } else {
    return "Password is weak";
  }
}

app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send(checkPasswordStrength(password));
});

// 4
function getSum(num1, num2) {
  return num1 + num2;
}

app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(getSum(num1, num2).toString());
});

// 5
function getSubscriptionStatus(username, isSubscribed) {
  if (isSubscribed) {
    return username + " is subscribed";
  } else {
    return username + " is not subscribed";
  }
}

app.get("/subscription-status", (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed === "true";
  res.send(getSubscriptionStatus(username, isSubscribed));
});

// 6
function getDiscountedPrice(price, discount) {
  return price - price * (discount / 100);
}

app.get("/discounted-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(getDiscountedPrice(price, discount).toString());
});

// 7
function getPersonalizedGreeting(age, gender, name) {
  return (
    "Hello, " + name + "!" + " You are a " + age + " year old " + gender + "."
  );
}

app.get("/personalized-greeting", (req, res) => {
  let age = parseFloat(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getPersonalizedGreeting(age, gender, name));
});

// 8
function getFinalPrice(price, discount, tax) {
  let discountedPrice = price - price * (discount / 100);
  let finalPrice = discountedPrice + discountedPrice * (tax / 100);
  return finalPrice.toString();
}

app.get("/final-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(getFinalPrice(price, discount, tax));
});

// 9
function getTotalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}

app.get("/total-exercise-time", (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(getTotalExerciseTime(running, cycling, swimming).toString());
});

// Port
app.listen(port, () => {
  console.log("Server is running on https://localhost:", port);
});
