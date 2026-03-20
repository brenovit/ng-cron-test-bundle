import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bs5QuartzCronModule } from '@brenovit/ng-cron';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bs5QuartzCronModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test-app-v19';
}
