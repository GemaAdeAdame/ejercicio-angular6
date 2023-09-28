// app.component.ts
import { Component } from '@angular/core';
import { Technique, techniques } from './techniques/techniques'; // Importa las técnicas correctamente desde el archivo adecuado.

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  // Técnicas que gohan ha aprendido
  gohanLearnedTechniques: Technique[] = [];

  // Técnicas que Goku puede enseñar
  techniques: Technique[] = techniques; // Asigna las técnicas correctamente.

  // Método para notificar a Goku sobre una técnica aprendida por gohan
}