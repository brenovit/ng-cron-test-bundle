import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test-app-v20');
  cronExpression = '0 0/1 * 1/1 * ? *';

  onCronChanged(value: string): void {
    this.cronExpression = value;
  }
}
