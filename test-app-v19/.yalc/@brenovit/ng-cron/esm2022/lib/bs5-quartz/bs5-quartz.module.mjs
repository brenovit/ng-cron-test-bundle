import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronContainerModule } from './../container';
import { QuartzCronMinuteModule } from './../quartz/tabs/minute';
import { QuartzCronMonthModule } from './../quartz/tabs/month';
import { QuartzCronHourModule } from './../quartz/tabs/hour';
import { QuartzCronSecondModule } from './../quartz/tabs/second';
import { QuartzCronYearModule } from './../quartz/tabs/year';
import { QuartzCronDayModule } from './../quartz/tabs/day';
import { Bs5QuartzCronComponent } from './bs5-quartz.component';
import * as i0 from "@angular/core";
export class Bs5QuartzCronModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: Bs5QuartzCronModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: Bs5QuartzCronModule, declarations: [Bs5QuartzCronComponent], imports: [CommonModule,
            QuartzCronMonthModule,
            QuartzCronMinuteModule,
            QuartzCronHourModule,
            QuartzCronSecondModule,
            QuartzCronYearModule,
            QuartzCronDayModule,
            CronContainerModule], exports: [Bs5QuartzCronComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: Bs5QuartzCronModule, imports: [CommonModule,
            QuartzCronMonthModule,
            QuartzCronMinuteModule,
            QuartzCronHourModule,
            QuartzCronSecondModule,
            QuartzCronYearModule,
            QuartzCronDayModule,
            CronContainerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: Bs5QuartzCronModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        QuartzCronMonthModule,
                        QuartzCronMinuteModule,
                        QuartzCronHourModule,
                        QuartzCronSecondModule,
                        QuartzCronYearModule,
                        QuartzCronDayModule,
                        CronContainerModule
                    ],
                    declarations: [Bs5QuartzCronComponent],
                    exports: [Bs5QuartzCronComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnM1LXF1YXJ0ei5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jcm9uL3NyYy9saWIvYnM1LXF1YXJ0ei9iczUtcXVhcnR6Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFnQmhFLE1BQU0sT0FBTyxtQkFBbUI7K0dBQW5CLG1CQUFtQjtnSEFBbkIsbUJBQW1CLGlCQUhmLHNCQUFzQixhQVRuQyxZQUFZO1lBQ1oscUJBQXFCO1lBQ3JCLHNCQUFzQjtZQUN0QixvQkFBb0I7WUFDcEIsc0JBQXNCO1lBQ3RCLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsbUJBQW1CLGFBR1gsc0JBQXNCO2dIQUVyQixtQkFBbUIsWUFaNUIsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsb0JBQW9CO1lBQ3BCLHNCQUFzQjtZQUN0QixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLG1CQUFtQjs7NEZBS1YsbUJBQW1CO2tCQWQvQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDcm9uQ29udGFpbmVyTW9kdWxlIH0gZnJvbSAnLi8uLi9jb250YWluZXInO1xuaW1wb3J0IHsgUXVhcnR6Q3Jvbk1pbnV0ZU1vZHVsZSB9IGZyb20gJy4vLi4vcXVhcnR6L3RhYnMvbWludXRlJztcbmltcG9ydCB7IFF1YXJ0ekNyb25Nb250aE1vZHVsZSB9IGZyb20gJy4vLi4vcXVhcnR6L3RhYnMvbW9udGgnO1xuaW1wb3J0IHsgUXVhcnR6Q3JvbkhvdXJNb2R1bGUgfSBmcm9tICcuLy4uL3F1YXJ0ei90YWJzL2hvdXInO1xuaW1wb3J0IHsgUXVhcnR6Q3JvblNlY29uZE1vZHVsZSB9IGZyb20gJy4vLi4vcXVhcnR6L3RhYnMvc2Vjb25kJztcbmltcG9ydCB7IFF1YXJ0ekNyb25ZZWFyTW9kdWxlIH0gZnJvbSAnLi8uLi9xdWFydHovdGFicy95ZWFyJztcbmltcG9ydCB7IFF1YXJ0ekNyb25EYXlNb2R1bGUgfSBmcm9tICcuLy4uL3F1YXJ0ei90YWJzL2RheSc7XG5cbmltcG9ydCB7IEJzNVF1YXJ0ekNyb25Db21wb25lbnQgfSBmcm9tICcuL2JzNS1xdWFydHouY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBRdWFydHpDcm9uTW9udGhNb2R1bGUsXG4gICAgUXVhcnR6Q3Jvbk1pbnV0ZU1vZHVsZSxcbiAgICBRdWFydHpDcm9uSG91ck1vZHVsZSxcbiAgICBRdWFydHpDcm9uU2Vjb25kTW9kdWxlLFxuICAgIFF1YXJ0ekNyb25ZZWFyTW9kdWxlLFxuICAgIFF1YXJ0ekNyb25EYXlNb2R1bGUsXG4gICAgQ3JvbkNvbnRhaW5lck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtCczVRdWFydHpDcm9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0JzNVF1YXJ0ekNyb25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJzNVF1YXJ0ekNyb25Nb2R1bGUge31cbiJdfQ==