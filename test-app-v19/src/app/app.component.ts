import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bs5QuartzCronModule } from '@brenovit/ng-cron';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Bs5QuartzCronModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cronExpression = '0 0/1 * 1/1 * ? *';

  onCronChanged(value: string): void {
    this.cronExpression = value;
  }
}
