import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronAndModule, CronRangeModule, CronEveryModule } from './../../../shared';
import { QuartzCronIncrementModule } from './../shared/increment';
import { QuartzCronSecondComponent } from './second.component';
import * as i0 from "@angular/core";
export class QuartzCronSecondModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronSecondModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronSecondModule, declarations: [QuartzCronSecondComponent], imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            QuartzCronIncrementModule], exports: [QuartzCronSecondComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronSecondModule, imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            QuartzCronIncrementModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronSecondModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        CronEveryModule,
                        CronRangeModule,
                        CronAndModule,
                        QuartzCronIncrementModule
                    ],
                    declarations: [QuartzCronSecondComponent],
                    exports: [QuartzCronSecondComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNyb24vc3JjL2xpYi9xdWFydHovdGFicy9zZWNvbmQvc2Vjb25kLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFhL0QsTUFBTSxPQUFPLHNCQUFzQjsrR0FBdEIsc0JBQXNCO2dIQUF0QixzQkFBc0IsaUJBSGxCLHlCQUF5QixhQU50QyxZQUFZO1lBQ1osZUFBZTtZQUNmLGVBQWU7WUFDZixhQUFhO1lBQ2IseUJBQXlCLGFBR2pCLHlCQUF5QjtnSEFFeEIsc0JBQXNCLFlBVC9CLFlBQVk7WUFDWixlQUFlO1lBQ2YsZUFBZTtZQUNmLGFBQWE7WUFDYix5QkFBeUI7OzRGQUtoQixzQkFBc0I7a0JBWGxDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IseUJBQXlCO3FCQUMxQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDekMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7aUJBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENyb25BbmRNb2R1bGUsIENyb25SYW5nZU1vZHVsZSwgQ3JvbkV2ZXJ5TW9kdWxlIH0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUXVhcnR6Q3JvbkluY3JlbWVudE1vZHVsZSB9IGZyb20gJy4vLi4vc2hhcmVkL2luY3JlbWVudCc7XG5pbXBvcnQgeyBRdWFydHpDcm9uU2Vjb25kQ29tcG9uZW50IH0gZnJvbSAnLi9zZWNvbmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDcm9uRXZlcnlNb2R1bGUsXG4gICAgQ3JvblJhbmdlTW9kdWxlLFxuICAgIENyb25BbmRNb2R1bGUsXG4gICAgUXVhcnR6Q3JvbkluY3JlbWVudE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtRdWFydHpDcm9uU2Vjb25kQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1F1YXJ0ekNyb25TZWNvbmRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFF1YXJ0ekNyb25TZWNvbmRNb2R1bGUge31cbiJdfQ==