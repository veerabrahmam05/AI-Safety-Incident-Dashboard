# AI Safety Incident Dashboard

An interactive dashboard to visualize and track AI safety incidents.

## Prerequisites

- Node.js (v16 or higher)
- NPM (v8 or higher)

## Dependencies

This project uses the following main dependencies:
- React (^18.0.0)
- Vite
- TypeScript
- D3.js for visualizations
- Tailwind CSS for styling

## Setup Instructions

1. Clone the repository:
```bash
git clone [repository-url]
cd AI-Safety-Incident-Dashboard-main
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add necessary environment variables:
```
VITE_API_URL=your_api_url_here
```

4. Start the development server:
```bash
npm run dev
```

If `npm run dev` fails, try the following:
```bash
npm audit fix
npm run dev
```

The application will be available at `http://localhost:5173`

## Live Demo

You can view the live deployed version at: [AI Safety Incident Dashboard](https://veerabrahmam05.github.io/AI-Safety-Incident-Dashboard/)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run linting

## Project Structure

```
/
├── src/
│   ├── components/     # React components
│   ├── data/          # Data files
│   ├── hooks/         # Custom React hooks
│   ├── styles/        # CSS and styling files
│   └── utils/         # Utility functions
├── public/            # Static assets
└── tests/             # Test files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
