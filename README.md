# Calculator App

This is a simple React application for calculating the tip amount, adding it to the bill and then split the total bill between party members.

## Installation

1. **Clone the repository:**

   ```
   git clone git@github.com:Old-Dead-One/tip-calculator-ts.git
   cd tip-calculator-ts
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Run the development server:**

   ```
   npm run dev
   ```

## Code Overview

### `Calculator` Component

This component handles the input, calculation, and display logic for the app.

#### State Variables

- `billAmount`: Stores the bill without tip name.
- `tipzpercent`: Stores the tipPercent slected by the user.
- `partSize`: Stores the size of the group to split the bill between.
- `billPlusTip`: Stores the total bill including tip
- `partyMemberSHare`: Stores the total bill amount including tip for each party member.

#### Methods

- `handleSelect(e)`: Updates the tipPercent input state when the user changes/selects the amount.
- `handleSubmit(e)`: Handles the form submission, triggering the calculations for total bill plus tip and the share of the total bill for each party member.

## Usage

1. Open the application in your browser.
2. Enter the bill amount in the "Total Bill" field.
3. Select/enter the prefered tip percent.
4. Click the "Calculate" button.
5. The application will display the total bill including the tip and the share each member of the party owes.
