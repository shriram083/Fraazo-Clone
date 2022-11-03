<h1 align="center">Fraazo Clone</h1>
<h3 align="center">It's a MERN Stack online store web application with all the major functionalities</h3>

<br/>

<h2 align="center">🖥️ Tech Stack</h2>

<h4 align="center">Frontend:</h4>
<p align="center">
  <img src="https://img.shields.io/badge/React (18.1.0)-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reactjs" />
  <img src="https://img.shields.io/badge/Redux (4.2.0)-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="redux" />
  <img src="https://img.shields.io/badge/Chakra%20UI (2.2.1)-3bc7bd?style=for-the-badge&logo=chakraui&logoColor=white" alt="chakra-ui" />
  <img src="https://img.shields.io/badge/styled--components-(5.3.5)-orange?style=for-the-badge&logo=styled-component&logoColor=white" alt="Styled Component" />
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript" />
  <img src="https://img.shields.io/badge/Rest_API-02303A?style=for-the-badge&logo=react-router&logoColor=white" alt="restAPI" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html5" />
</p>
<h4 align="center">Backend:</h4>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js (16.14.2)-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs" />
  <img src="https://img.shields.io/badge/Express.js (4.18.1)-000000?style=for-the-badge&logo=express&logoColor=white" alt="expressjs" />
  <img src="https://img.shields.io/badge/MongoDB (6.0)-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
</p>

<h4 align="center">Deployed On:</h4>

<p align="center">
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="vercel" />
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="heroku" />
</p>

<h3 align="center"><a href="https://fraazo-clone-web-17.netlify.app/"><strong>Want to see live preview »</strong></a></h3>

### Fraazo is the online store to buy fresh fruits and vegetables, herbs and dry fruits.

![cover](./client/screenshots/cover.PNG)

This project is about building a web application to buy wide variety of fresh fruits and vegetables. It have some cool features like save the data in redux-store and session-storage to reduce the dependency of network requests, toast notification for every action, pop up modal to display extra details and responsive for every screen size.

## 🚀 Features

-   Login/Signup User Account
-   Searching product with Debouncing feature
-   Cart Add/Remove Items
-   Pop modal and Toast notification
-   Cart Update Quantities
-   Payment page which calculates the products prices dynamically.
-   Address Management
-   Order Summary
-   Order details of all ordered item

## 🚀 Our Team Members:-

-   Ramesh [[LinkedIn Profile](https://www.linkedin.com/in/ramesh-mane-268a0014a/)]

-   Shriram [[LinkedIn Profile](https://www.linkedin.com/in/shriram-deshpande-477590136/)]

-   Sarbjot Singh [[LinkedIn Profile](https://www.linkedin.com/in/sarbjot-/)]

-   shubham barore [[LinkedIn Profile](https://www.linkedin.com/in/shubham-barore-572738159)]

-   Pratik Mate [[LinkedIn Profile](https://www.linkedin.com/in/pratik-mate-a6a62919b)]

-   Thanigaivel Ambalavanan [[LinkedIn Profile](https://www.linkedin.com/in/thanigaivel-ambalavanan-3b4a30120/)]

## Screenshots

#### Homepage -

This is the main landing page of our website. Here clicking on any option on the Navbar and Images will redirect the user to the respective Product Page.

![Homepage ](./client/screenshots/HomePage.png)

#### Navigation bar -

If the user clicks on the SignUp/login page it shows the pages of that section and also Searching of product with debouncing feature.

![Navigation bar](./client/screenshots/SearchBox.png)

#### Sign up / Sign in Page -

On this page, you can register a user. If the user is already registered, you can simply sign in by providing valid details of the user.

![Sign up](./client/screenshots/Login.png)

#### Products Page -

Here users can browse and add items to the cart by clicking on the Add to Cart button.

![Products Page](./client/screenshots/ProductsPage.png)

#### Cart Page -

Here all the products added to the cart will be shown. On this page, you can also remove the items. By clicking on the “CHECKOUT” button you will be redirected to the checkout page.

![Cart](./client/screenshots/Cart.png)

#### Payment Page -

On this page, users can add their address details and add their payment details.

By providing these details users can place orders by clicking the “PLACE ORDER” button.

![Products Page](./client/screenshots/PaymentPage.png)

After Proceeding users get will get OTP page

![OTP Page](./client/screenshots/OTPPaget.png)

If user entered correct OTP it will redirect to payment succefull page or elese it entered wrong it will get error as wrong OTP

![Products Page](./client/screenshots/PaymentSuccefull.png)

After Payment Success you will be redirected to the Home Page.

In case you clicked on cancel on OTP Page it will redirect to this page.

![Products Page](./client/screenshots/PaymentFail.png)

## Run Locally

Clone the project

```bash
  git clone https://github.com/shriram083/Fraazo-Clone.git
```

Go to the project directory

```bash
  cd Fraazo-Clone
```

Install dependencies of both frontend and backend

```bash
  cd client
  npm install
```

```bash
  cd ../server
  npm install
```

Start the localhost server

```bash
  cd ../client
  npm start
```

## Deployed link

### Netlify Link

[https://fraazo-clone-web-17.netlify.app/](https://fraazo-clone-web-17.netlify.app/)
