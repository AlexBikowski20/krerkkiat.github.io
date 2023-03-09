# Personal website

A rough tutorial on creating and hosting a personal website. This website will be

- Staticly hosted.
- Single page web application.

## Design - Static Web Page

### Technology Stack

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/en/main)
- GitHub Pages
- GitHub Actions
- Cloudflare's Name Servers

### Possible Topics

#### Technical / Tooling

- Command line commands.
- Basic CSS
- CSS Framework.
- Build System (webpack, rollup, etc.)
- Basic Github Actions.
- Deployment to GitHub Pages with Github Actions Workflow.
- DevTools for basic debugging and live modification.
- Cloudflare setup for a domain.
- GitHub Pages custom domain setup.

#### Concepts

- JSON.
- Pagination.
- Client Side Routing.
- DNS.
- Using / consuming / interacting with API.

### Pages

Outline of a page in this static website.

#### Home Page

A page showing basic information about ourselves (name, title, school, etc.)

#### Contact Page

Post a request to our own API endpoint.

### Message Listing Page

Listing the messages stored in our database.

#### Project Listing Page

Fetching repositories using GitHub API. Allow user to filter repositories by tag.

## Design - Contact Form API

### Technology Stack

- Python 3.10+
- Starlette
- [FastAPI](https://fastapi.tiangolo.com/)
- SQLAlchemy
- PostgreSQL

#### Potential Solution to Hosting

- DigitalOCean
- Heroku
- Cloud Services Providers (Google Cloud, AWS, etc.)
- Vercel
- Vultr
- Render.com

### Possible Topics

- Container Technology.
- Web Server.
- Web Application Server, HTTP Request / Response, URL, REST API.
- Firewall.
- DNS (again with subdomain).
- CORS.
- Database / ORM.

## Resources

### Commit Message Convention

- [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) / [Angular Commit Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)
- Using emoji with commit message [cheatsheet](https://gitmoji.dev/).

### Uncategorized resources

- https://tailwindcss.com/docs/guides/vite
- https://vitejs.dev/guide/
- https://github.com/nvh95/vite-react-template-redux
- https://github.com/tiangolo/full-stack-fastapi-postgresql/tree/master/%7B%7Bcookiecutter.project_slug%7D%7D/backend
- https://fastapi.tiangolo.com/tutorial/sql-databases/?h=data#__tabbed_4_2
- https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28
- https://redux.js.org/tutorials/essentials/part-5-async-logic#thunks-and-async-logic
- https://github.com/axios/axios
- https://reactrouter.com/en/main