import { Component, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('diagram') diagram: DiagramComponent;
  @ViewChild('fileInput') fileInput: ElementRef;

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

  async saveDiagram() {
    try {
      const result = await this.diagram.saveXML();
      console.log('Save result:', result);
      
      // Convert the result to string if it's not already
      const xmlString = JSON.stringify(result);
      console.log('XML string:', xmlString);
      
      const blob = new Blob([xmlString], { 
        type: 'application/xml;charset=utf-8'
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'diagram.bpmn';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error('Error saving diagram:', err);
    }
  }

  async loadLocalFile(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      await this.diagram.importDiagram(text).toPromise();
      this.importError = null;
    } catch (err) {
      console.error('Error loading file:', err);
      this.importError = err;
    }

    // Reset the file input
    this.fileInput.nativeElement.value = '';
  }
}
