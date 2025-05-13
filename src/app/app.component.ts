import { Component } from '@angular/core';
import { DiagramComponent } from './diagram/diagram.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [DiagramComponent]
})
export class AppComponent {
  title = 'bpmn-js-angular';
  diagramUrl = 'assets/diagrams/diagram.bpmn';
  importError?: Error;

  handleImported(event) {
    const {
      type,
      error,
      warnings
    } = event;

    if (type === 'success') {
      console.log(`Rendered diagram (%s warnings)`, warnings.length);
    }

    if (type === 'error') {
      console.error('Failed to render diagram', error);
    }

    this.importError = error;
  }
}
