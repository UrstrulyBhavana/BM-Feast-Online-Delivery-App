AppDownload Component:- The component imports two images: one for the Play Store and one for the App Store.

It displays a message encouraging users to download the app.

Below the message, it shows the two images as buttons that users can click to go to the Play Store or App Store.

ExploreMenu Component :- It displays a heading and a description of the menu.

It loops through a list of menu items and displays each one as a clickable image and name.

When a menu item is clicked, it updates the selected category.

FoodDisplay Component :- It uses useContext to access a list of food items and a search term from a central store (context).

It filters the list of food items based on the selected category and the search term.

It displays the filtered list of food items.

FoodItem Component :- It displays the food item’s image, name, description, and price.

It also shows buttons to add the item to the cart or remove it from the cart.

Footer Component :- It displays the company logo, a brief description, and social media icons.

It has links to different pages or sections like Home, About Us, etc.

It also shows contact details and a copyright notice.

Header Component :- It displays a title encouraging users to order food.
It also shows a button to view the menu.

LoginPopup Component :- It has a form with input fields for email and password (and name if signing up).

It allows users to switch between login and sign-up modes.

There is a checkbox for accepting terms and conditions.

Navbar Component :- It has links to different sections of the website (Home, Menu, Mobile App, Contact Us).
It includes a search bar, a cart icon, and a sign-in button.
The cart icon shows a dot if there are items in the cart.

SearchBar Component :- It has an input field where users can type a search term.
It calls a function whenever the search term changes.

StoreContext :-  This is a context that holds the state for the entire app, like the list of food items, cart items, and search term.
  - It provides functions to add items to the cart, remove items from the cart, and calculate the total cart amount.
  - Other components can access this context to get or update shared data.

Cart Component :-This component shows the items in the user’s cart.
  - It displays each item in the cart along with its name, price, quantity, and total price.
  - It also shows the total amount for the cart and allows users to proceed to checkout.

Home Component :-  This is the main page of the website.
  - It includes the `Header`, `ExploreMenu`, `FoodDisplay`, and `AppDownload` components.
  - It manages the selected category for the food items.

PlaceOrder Component :-This component shows the order form and the cart total when the user is ready to place an order.
  - It has a form for entering delivery information.
  - It shows the cart totals and allows the user to proceed to payment.

App Component :- This is the main component that brings everything together.
  - It includes the `Navbar`, `Routes` for navigation, `Footer`, and `LoginPopup` components.
  - It uses React Router to handle navigation between different pages (Home, Cart, Order).


