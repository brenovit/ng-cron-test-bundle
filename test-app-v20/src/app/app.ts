import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bs5QuartzCronModule } from '@brenovit/ng-cron';

@Component({
  selector: 'app-root',
  imports: [Bs5QuartzCronModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('test-app-v20');
  cronExpression = '0 0/1 * 1/1 * ? *';

  onCronChanged(value: string): void {
    this.cronExpression = value;
  }
}
