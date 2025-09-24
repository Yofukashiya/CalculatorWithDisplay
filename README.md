# Modern Calculator

A responsive web calculator built with HTML, CSS, and vanilla JavaScript. The interface mirrors a modern handheld calculator with a dual-line display for the running total and previous operation.

## Features

-   Basic arithmetic: addition, subtraction, multiplication, and division with divide-by-zero protection
-   Dual display area that separates the current entry from the stored operand and operator
-   Clean, modern styling with hover and focus states for all controls
-   Decimal support with single-decimal validation to prevent malformed numbers
-   Mouse and touch friendly layout sized for desktop and tablet screens

## Getting Started

1. Clone or download this repository.
2. Open `index.html` in any modern browser, or use a live-server extension for automatic reloads while editing.

## Usage

-   Click the number buttons to build the current value; the active entry appears in the lower display.
-   Choose an operator to store the current value and prepare for the next number.
-   Press `=` to evaluate; the result is shown as `Total: <value>` with a green highlight.
-   Use `C` to delete the last digit of the current entry and `AC` to clear the entire session.
-   After a calculation, select another operator to continue chaining operations with the displayed total.

## Project Structure

-   `index.html` - Markup for the calculator layout and display regions
-   `style.css` - Visual design, theming variables, and responsive layout rules
-   `index.js` - Button event handling, arithmetic logic, and display updates

## Customization

-   Tweak the color palette, border radius, and transition timing by editing the CSS variables declared in the `:root` section of `style.css`.
-   Adjust button sizing or grid layout by updating the `.buttons` and `.row` rules in the stylesheet.
-   Extend the JavaScript in `index.js` to add new operations, keyboard bindings, or memory functions.

## Accessibility Notes

The calculator markup uses ARIA roles and labels to announce the application context and display regions to assistive technologies.

## License

This project does not currently specify a license.
