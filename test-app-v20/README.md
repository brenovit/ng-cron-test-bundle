# TestAppV20

## Install and use `@brenovit/ng-cron`

### 1) Install packages

```bash
npm install @brenovit/ng-cron bootstrap
```

### 2) Add Bootstrap CSS (required)

Add Bootstrap globally (pick one approach):

- `angular.json` (recommended):
	- Add `node_modules/bootstrap/dist/css/bootstrap.min.css` to the `projects.<your-app>.architect.build.options.styles` array.
- Or import it from `src/styles.css`:

```css
@import 'bootstrap/dist/css/bootstrap.min.css';
```

### 3) Import the cron module + FormsModule

If you bind using `[(ngModel)]`, you must import `FormsModule`.

Example for a standalone component:

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bs5QuartzCronModule } from '@brenovit/ng-cron';

@Component({
	selector: 'app-root',
	imports: [Bs5QuartzCronModule, FormsModule],
	templateUrl: './app.html',
})
export class App {
	cronExpression = '0 0/1 * 1/1 * ? *';
}
```

### 4) Use in your template

```html
<bs5-quartz-cron [(ngModel)]="cronExpression"></bs5-quartz-cron>
```

### Notes for this repo

This test app uses a local package reference for `@brenovit/ng-cron` (via the `.yalc/` folder) in `package.json`. If you want the published package instead, replace the `file:.yalc/...` entry with a normal npm version and run `npm install`.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.21.
