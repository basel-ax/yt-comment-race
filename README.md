# YouTube Comment Race

A dynamic, interactive web game built with TypeScript and Pixi.js that turns YouTube video comments into a thrilling racing competition. Watch as comments from your favorite videos come to life, represented by cars with country flags, racing across the screen in real-time.

## Features

- **Real-time Comment Racing**: Fetches live comments from YouTube videos and animates them as racing cars.
- **Country Flag Integration**: Each car displays the flag of the commenter's country for a global, competitive feel.
- **Admin Configuration**: Easy-to-use admin interface to set up video URLs, race parameters, and game settings.
- **High-Performance Rendering**: Optimized with Pixi.js for smooth gameplay on web and mobile devices.
- **Responsive Design**: Adapts to various screen sizes for optimal viewing on desktops, tablets, and smartphones.
- **Caching and Optimization**: Implements efficient asset loading and caching strategies for fast load times.

## Tech Stack

- **Frontend Framework**: TypeScript with Vite for fast development and building.
- **Graphics Engine**: Pixi.js for high-performance 2D rendering and animations.
- **API Integration**: YouTube Data API v3 for fetching video comments.
- **Styling**: Custom CSS with responsive design principles.
- **Build Tools**: Vite with Terser minification and manual chunking for optimized bundles.
- **Deployment**: Cloudflare Pages for global CDN distribution and caching.

## Project Structure

```
src/
├── components/
│   ├── adminPage.ts    # Admin configuration interface
│   └── gamePage.ts     # Main game rendering and logic
├── game/
│   └── RaceScene.ts    # Pixi.js scene management for the race
├── services/
│   ├── carGenerator.ts # Car sprite generation
│   ├── countries.ts    # Country flag data
│   └── youtubeApi.ts   # YouTube API integration
├── types/
│   └── index.ts        # TypeScript type definitions
├── utils/
│   └── gameLogic.ts    # Game mechanics and utilities
└── main.ts             # Application entry point
```

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- A Google Cloud Console project with YouTube Data API v3 enabled
- API key for YouTube Data API

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/yt-comment-race.git
   cd yt-comment-race
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your YouTube API key:
   ```
   VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
   ```
   > **Note**: Never commit the `.env` file to version control.

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

5. **Build for production**:
   ```bash
   npm run build
   ```
   The built files will be in the `dist/` directory.

6. **Preview the production build**:
   ```bash
   npm run preview
   ```

## Usage

1. **Admin Configuration**:
   - Open the application in your browser.
   - You'll see the admin page where you can:
     - Enter a YouTube video URL or video ID.
     - Set race duration and other parameters.
     - Configure display options.

2. **Start the Race**:
   - Click "Start Race" to begin fetching comments and animating the race.
   - Watch as comments become cars with country flags racing across the screen.

3. **Game Controls**:
   - The race runs automatically once started.
   - Use the admin panel to pause, reset, or modify settings mid-race.

## Development

### Code Style and Best Practices

This project follows strict coding standards for performance and maintainability:

- **TypeScript**: Strong typing for all game objects and Pixi.js elements.
- **Functional Programming**: Prefer functional and declarative patterns.
- **Performance Optimization**: Minimize garbage collection with object pooling and efficient rendering.
- **Naming Conventions**: camelCase for variables/functions, PascalCase for classes, kebab-case for files.

### Running Tests

```bash
npm run lint
```

### Adding New Features

1. Analyze performance implications before implementing.
2. Follow the modular structure: components, services, utilities.
3. Use Pixi.js best practices for rendering optimizations.
4. Test on multiple devices and browsers.

## Cloudflare Deployment Guide

This project is optimized for deployment on Cloudflare Pages, providing global CDN distribution, automatic HTTPS, and efficient caching.

### Prerequisites

- A Cloudflare account
- GitHub repository (recommended for automatic deployments)

### Deployment Steps

1. **Build the Project**:
   ```bash
   npm run build
   ```

2. **Connect to Cloudflare Pages**:

   **Option A: Via Cloudflare Dashboard**
   - Log in to your Cloudflare account.
   - Go to Pages > Create a project.
   - Connect your GitHub repository or upload the `dist/` folder manually.

   **Option B: Using Wrangler CLI**
   - Install Wrangler globally:
     ```bash
     npm install -g wrangler
     ```
   - Authenticate with Cloudflare:
     ```bash
     wrangler auth login
     ```
   - Initialize Pages project:
     ```bash
     wrangler pages project create yt-comment-race
     ```
   - Deploy:
     ```bash
     wrangler pages deploy dist/
     ```

3. **Configure Build Settings**:
   In your Cloudflare Pages project settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)

4. **Environment Variables**:
   Set your YouTube API key in Cloudflare Pages environment variables:
   - Go to Pages > Your project > Settings > Environment variables
   - Add: `VITE_YOUTUBE_API_KEY` with your API key value

5. **Custom Domain (Optional)**:
   - In Pages settings, add your custom domain.
   - Update DNS records as instructed by Cloudflare.

6. **Caching Configuration**:
   The project includes `_headers` file for optimal caching:
   - Static assets cached for 1 year
   - Main app cached but revalidated

### Post-Deployment

- Your app will be available at `https://your-project.pages.dev`
- Automatic deployments on git pushes (if connected to GitHub)
- Monitor performance and usage in Cloudflare dashboard

### Troubleshooting

- **API Key Issues**: Ensure `VITE_YOUTUBE_API_KEY` is set correctly in environment variables.
- **Build Failures**: Check that all dependencies are installed and Node.js version is compatible.
- **Performance**: Monitor Core Web Vitals in Cloudflare dashboard and optimize as needed.

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes following the coding standards.
4. Test thoroughly on multiple devices.
5. Submit a pull request with a clear description.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Pixi.js](https://pixijs.com/) for high-performance graphics.
- YouTube Data API for comment integration.
- Country flag icons from [country-flag-icons](https://github.com/catamphetamine/country-flag-icons).