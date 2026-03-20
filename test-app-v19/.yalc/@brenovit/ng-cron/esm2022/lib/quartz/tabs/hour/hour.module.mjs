import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronAndModule, CronRangeModule, CronEveryModule } from './../../../shared';
import { QuartzCronIncrementModule } from './../shared/increment';
import { QuartzCronHourComponent } from './hour.component';
import * as i0 from "@angular/core";
export class QuartzCronHourModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronHourModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronHourModule, declarations: [QuartzCronHourComponent], imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            QuartzCronIncrementModule], exports: [QuartzCronHourComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronHourModule, imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            QuartzCronIncrementModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronHourModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        CronEveryModule,
                        CronRangeModule,
                        CronAndModule,
                        QuartzCronIncrementModule
                    ],
                    declarations: [QuartzCronHourComponent],
                    exports: [QuartzCronHourComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jcm9uL3NyYy9saWIvcXVhcnR6L3RhYnMvaG91ci9ob3VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFhM0QsTUFBTSxPQUFPLG9CQUFvQjsrR0FBcEIsb0JBQW9CO2dIQUFwQixvQkFBb0IsaUJBSGhCLHVCQUF1QixhQU5wQyxZQUFZO1lBQ1osZUFBZTtZQUNmLGVBQWU7WUFDZixhQUFhO1lBQ2IseUJBQXlCLGFBR2pCLHVCQUF1QjtnSEFFdEIsb0JBQW9CLFlBVDdCLFlBQVk7WUFDWixlQUFlO1lBQ2YsZUFBZTtZQUNmLGFBQWE7WUFDYix5QkFBeUI7OzRGQUtoQixvQkFBb0I7a0JBWGhDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IseUJBQXlCO3FCQUMxQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENyb25BbmRNb2R1bGUsIENyb25SYW5nZU1vZHVsZSwgQ3JvbkV2ZXJ5TW9kdWxlIH0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUXVhcnR6Q3JvbkluY3JlbWVudE1vZHVsZSB9IGZyb20gJy4vLi4vc2hhcmVkL2luY3JlbWVudCc7XG5pbXBvcnQgeyBRdWFydHpDcm9uSG91ckNvbXBvbmVudCB9IGZyb20gJy4vaG91ci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENyb25FdmVyeU1vZHVsZSxcbiAgICBDcm9uUmFuZ2VNb2R1bGUsXG4gICAgQ3JvbkFuZE1vZHVsZSxcbiAgICBRdWFydHpDcm9uSW5jcmVtZW50TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1F1YXJ0ekNyb25Ib3VyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1F1YXJ0ekNyb25Ib3VyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBRdWFydHpDcm9uSG91ck1vZHVsZSB7fVxuIl19