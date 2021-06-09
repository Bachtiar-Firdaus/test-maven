import base from "./base";

let currentAuth;
let currentCart;

function listener() {
  let previousAuth = currentAuth;
  let previousCart = currentCart;

  currentAuth = base.getState().auth;
  currentCart = base.getState().cart;

  let { token } = currentAuth;

  if (currentAuth !== previousAuth) {
    localStorage.setItem("auth", JSON.stringify(currentAuth));
    saveCart(token, currentCart);
  }
  if (currentCart !== previousCart) {
    localStorage.setItem("cart", JSON.stringify(currentCart));
    saveCart(token, currentCart);
  }
}
function listen() {
  base.subscribe(listener);
}

export { listen };
