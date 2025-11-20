# Freeday (Copy of Friday)

Electron-based desktop shell for the Freeday AI assistant experience. The app renders a React interface directly in `index.html` using CDN-hosted dependencies and interacts with Google Gemini models when an API key is provided.

## Getting started
1. Install dependencies: `npm install`.
2. Set your Gemini API key inside `index.html` by replacing the empty `API_KEY` value in the shim:
   ```html
   window.process = {
     env: {
       API_KEY: "your-key-here"
     }
   };
   ```
3. Launch the desktop app: `npm run start`.

## Features
- Chat-style assistant powered by Gemini with a Freeday persona.
- Story, image, and video generators with animated loading states.
- "AI Doctor" mode that emphasizes health-safety disclaimers and encourages medical consultation.
- Optional local-model endpoints (see `config/local_model.json`).

## Notes
- The UI is defined in `index.html` and imports React from CDN via an import map.
- For video generation, the app waits for long-running operations and provides progress updates before downloading the result.
