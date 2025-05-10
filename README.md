# Arena PNL Card

A React-based web application that displays PNL (Profit and Loss) information in a card format. This project provides a clean and modern interface for tracking trading performance.

## Features

- Modern React-based UI
- Responsive design
- PNL tracking and display
- Customizable card layout

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/arena-pnl.git
cd arena-pnl
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Start the development server:
```bash
npm start
```

2. Open your browser and navigate to `http://localhost:3000`

3. To build for production:
```bash
npm run build
```

## Project Structure

```
arena-pnl/
├── public/          # Static files
├── src/            # Source code
│   ├── App.js      # Main application component
│   ├── PNLCard.js  # PNL card component
│   └── index.js    # Application entry point
├── package.json    # Project dependencies and scripts
└── README.md       # Project documentation
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React.js
- Create React App

## Important Note: Manual Data Entry

To display data in the PNL card, you must manually input all required properties (props) when using the `PNLCard` component. Example:

```jsx
<PNLCard
  ticker="BTC"
  highlightNumber="12345"
  pnl="500"
  invested="1000"
  position="Long"
  username="yourname"
  linkText="arena.trade"
  linkUrl="https://arena.trade"
/>
```

Each prop must be filled in with the appropriate value for the card to display information correctly.

## Custom Logo Requirement

To display the ticker logo on the PNL card, you must provide your own image file named `Ticker-Logo.png`. Place this file in the `src/` directory.

- The image should be a PNG file.
- The filename must be exactly `Ticker-Logo.png` (case-sensitive).

If the file is missing or named incorrectly, the ticker logo will not display properly. 