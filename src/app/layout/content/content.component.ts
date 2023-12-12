// content.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  selectedOption: string = 'parcela';

  changeBackground(option: string): void {
    this.selectedOption = option;
  }
}
