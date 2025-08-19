
## 📝 E-commerce Platform MVP: Product Requirements Document (PRD)

A PRD for an MVP is a guiding document that focuses on core features to solve a key problem for a specific user group. It should be a "living document," meaning it is updated as the project evolves.

### 1\. Introduction

  * **Problem Statement:** What problem does this platform solve? (e.g., "A lack of a user-friendly online store for a local artisan community.")
  * **Product Goal:** To launch a simple online store that allows artisans to sell their products directly to customers.
  * **Target Audience:** Local artisans and customers interested in unique, handmade goods.

### 2\. Core Features (Minimum Viable)

  * **User Management:**
      * **User Stories:**
          * As a user, I want to be able to register and log in.
          * As a user, I want to be able to view and edit my profile.
  * **Product Management:**
      * **User Stories:**
          * As an artisan, I want to be able to list a product with a name, description, price, and image.
          * As a customer, I want to be able to browse and view products.
  * **Shopping Cart:**
      * **User Stories:**
          * As a customer, I want to add a product to a cart.
          * As a customer, I want to view and update items in my cart.
  * **Checkout & Payment:**
      * **User Stories:**
          * As a customer, I want to be able to enter my shipping information.
          * As a customer, I want to be able to make a payment. (Integration with a single payment gateway like Stripe or PayPal).
  * **Order Management:**
      * **User Stories:**
          * As an artisan, I want to view incoming orders.
          * As a customer, I want to view the status of my order.

-----

## 💻 Database Design (Simplified for MVP)

The database schema should be simple, normalized, and scalable for future growth. The following is a basic relational model.

| **Table: `users`** | **Column** | **Data Type** | **Description** |
|:---:|:---:|:---:|:---:|
| PK | `user_id` | `INT` | Unique user identifier |
| | `username` | `VARCHAR(50)` | User's name |
| | `email` | `VARCHAR(100)` | User's email (unique) |
| | `password_hash` | `VARCHAR(255)` | Hashed password for security |
| | `created_at` | `TIMESTAMP` | Timestamp of user creation |

| **Table: `products`** | **Column** | **Data Type** | **Description** |
|:---:|:---:|:---:|:---:|
| PK | `product_id` | `INT` | Unique product identifier |
| FK | `artisan_id` | `INT` | Foreign key to the `users` table |
| | `name` | `VARCHAR(255)` | Product name |
| | `description` | `TEXT` | Product description |
| | `price` | `DECIMAL(10, 2)` | Product price |
| | `image_url` | `VARCHAR(255)` | URL of the product image |

| **Table: `orders`** | **Column** | **Data Type** | **Description** |
|:---:|:---:|:---:|:---:|
| PK | `order_id` | `INT` | Unique order identifier |
| FK | `customer_id` | `INT` | Foreign key to the `users` table |
| | `total_amount` | `DECIMAL(10, 2)` | Total order value |
| | `status` | `ENUM` | `Pending`, `Processing`, `Shipped`, `Delivered` |
| | `created_at` | `TIMESTAMP` | Timestamp of order creation |

| **Table: `order_items`** | **Column** | **Data Type** | **Description** |
|:---:|:---:|:---:|:---:|
| PK | `order_item_id` | `INT` | Unique order item identifier |
| FK | `order_id` | `INT` | Foreign key to the `orders` table |
| FK | `product_id` | `INT` | Foreign key to the `products` table |
| | `quantity` | `INT` | Number of units of the product |
| | `price_at_purchase` | `DECIMAL(10, 2)` | Price of the product when ordered |

-----

## 🔌 API List

APIs for an e-commerce MVP should be **RESTful**, focusing on core functionalities. The following are example endpoints.

### **User API**

  * `POST /api/v1/register` - Create a new user account.
  * `POST /api/v1/login` - Authenticate a user and return a token.
  * `GET /api/v1/users/{user_id}` - Retrieve user profile.
  * `PUT /api/v1/users/{user_id}` - Update user profile.

### **Product API**

  * `POST /api/v1/products` - Create a new product.
  * `GET /api/v1/products` - Retrieve a list of all products.
  * `GET /api/v1/products/{product_id}` - Retrieve a specific product's details.
  * `PUT /api/v1/products/{product_id}` - Update a product.
  * `DELETE /api/v1/products/{product_id}` - Delete a product.

### **Cart API**

  * `POST /api/v1/cart` - Add a product to the cart.
  * `GET /api/v1/cart` - Retrieve the contents of the cart.
  * `PUT /api/v1/cart/{product_id}` - Update the quantity of a product in the cart.
  * `DELETE /api/v1/cart/{product_id}` - Remove a product from the cart.

### **Order API**

  * `POST /api/v1/orders` - Create a new order (checkout).
  * `GET /api/v1/orders` - Retrieve a list of user's orders.
  * `GET /api/v1/orders/{order_id}` - Retrieve a specific order's details.

-----

## 🗺️ Sitemap

The sitemap for an MVP should be straightforward, covering only the essential pages. It should be logical for both users and search engines.

  * `/` (Homepage)
  * `/products` (All products page)
  * `/products/{product_id}` (Individual product page)
  * `/cart` (Shopping cart page)
  * `/checkout` (Checkout process)
  * `/login` (User login)
  * `/register` (User registration)
  * `/account` (User account dashboard)
  * `/about` (About us page)
  * `/contact` (Contact page)
