# Pizza Order Calculator 🍕

This project is a React-based pizza order calculator where users can customize their pizza and see the calculated price in real-time.

## Features

- **Component Structure:**
  - Radio buttons for selecting pizza size.
  - Checkboxes for selecting toppings.
  - Dropdown menu for selecting crust type.
  - Display area for the calculated price.

- **Pricing Logic:**
  - Prices are hardcoded as follows:
    - Small pizza: $8
    - Medium pizza: $10
    - Large pizza: $12
    - Each topping: $1
    - Thin crust: $0
    - Thick crust: $2
    - Gluten-free crust: $3
  - Total price updates dynamically based on user selections.

- **Additional Features Implemented:**
  - Input validation to prevent invalid combinations (e.g., gluten-free crust with non-gluten-free toppings).

- **Frontend**: React, HTML, CSS, Bootstrap, JavaScript

## Local Development

To run this project locally, follow these steps:

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/finasusn/pizza.git
   cd pizza
2. Install dependencies:

   ```bash
    npm install

4. Configure environment variables:

    Create a .env file in the root directory based on .env.example.
    Modify the variables to match your local environment settings.

5. Running the Project
Start the development server:

     ```bash
    npm run dev

Open your browser and visit http://localhost:3000 to view the application.

![Screenshot 2024-06-16 182004](https://github.com/finasusn/pizza/assets/150430510/799a8962-1a3f-489e-bace-976b7d8b414a)
![Screenshot 2024-06-16 182024](https://github.com/finasusn/pizza/assets/150430510/88f0582d-080a-469e-b182-a58c7ab9d7ad)

