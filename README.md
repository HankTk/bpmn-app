# BPMN Angular Application

This project is an Angular application that integrates BPMN.js for business process modeling and visualization. It provides a modern web interface for creating, editing, and managing BPMN diagrams.

## Features

- BPMN diagram modeling and visualization
- Properties panel for element configuration
- Camunda BPMN modeler integration
- Zeebe BPMN modeler support
- Modern Angular-based user interface

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Key Dependencies

- Angular 19.2.0
- bpmn-js 18.6.1
- @bpmn-io/properties-panel 3.26.4
- bpmn-js-properties-panel 5.35.0
- camunda-bpmn-js-behaviors 1.10.0
- zeebe-bpmn-moddle 1.9.0

## Testing

- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io)
- Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/)

## Code Quality

- Run `ng lint` to execute the linting checks
- The project uses ESLint for code quality and style enforcement

## Further Help

- For Angular CLI help: `ng help` or visit [Angular CLI Documentation](https://angular.io/cli)
- For BPMN.js documentation: [BPMN.js Documentation](https://bpmn.io/toolkit/bpmn-js/)
- For Camunda documentation: [Camunda Documentation](https://docs.camunda.org/)
