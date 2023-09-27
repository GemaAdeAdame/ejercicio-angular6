// src/app/goku/goku.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Technique, techniques } from '../techniques/techniques'; // Asegúrate de importar las técnicas.

@Component({
  selector: 'app-goku',
  templateUrl: './goku.component.html',
  styleUrls: ['./goku.component.scss']
})

export class GokuComponent {
  techniques: Technique[] = techniques;
  constructor() { }
}