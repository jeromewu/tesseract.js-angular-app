import { Component } from '@angular/core';
import { TesseractWorker } from 'tesseract.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tesseract.js-angular-app';
  ocrResult = 'Recognizing...';
  constructor() {
    const worker = new TesseractWorker();
    worker
      .recognize('https://tesseract.projectnaptha.com/img/eng_bw.png')
      .progress((p) => {
        console.log('progress', p);
      })
      .then(({ text }) => {
        this.ocrResult = text;
        worker.terminate();
      });
  }
}
