# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deployment

### Docker

This project includes a `Dockerfile` and `docker-compose.yml` for easy containerization and deployment.

#### Build and Run Locally

To build and run the application using Docker Compose:

```bash
docker-compose up --build
```

The application will be accessible at `http://localhost:8080`.

### Digital Ocean App Platform

1.  Push your code to a GitHub repository.
2.  Create a new App in Digital Ocean App Platform.
3.  Select your repository.
4.  Digital Ocean should automatically detect the `Dockerfile`.
5.  Configure the HTTP Port to `80`.
6.  Deploy!

### Digital Ocean Droplet

1.  Create a Droplet with Docker installed.
2.  Clone your repository to the Droplet.
3.  Run `docker-compose up -d --build`.

### Troubleshooting

#### "failed to launch: determine start command" Error
If you see this error on Digital Ocean, it means the platform is trying to build your app as a Node.js app instead of using the Dockerfile.

**Solution 1 (Recommended):**
1.  Go to your App settings in Digital Ocean.
2.  Find the "Settings" tab for your component.
3.  Look for "Build Phase" or "Source".
4.  Change the "Build Command" or "Type" to use **Dockerfile**.
5.  Save and Deploy.

**Solution 2 (Fallback):**
We have added a `start` script to `package.json` that runs `vite preview`. This allows the app to run even if Digital Ocean uses Node.js Buildpacks. However, using the Dockerfile (Solution 1) is more performant for production.
