import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronContainerModule } from './../container';
import { QuartzCronMinuteModule } from './tabs/minute';
import { QuartzCronMonthModule } from './tabs/month';
import { QuartzCronHourModule } from './tabs/hour';
import { QuartzCronSecondModule } from './tabs/second';
import { QuartzCronYearModule } from './tabs/year';
import { QuartzCronDayModule } from './tabs/day';
import { QuartzCronComponent } from './quartz.component';
import * as i0 from "@angular/core";
export class QuartzCronModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronModule, declarations: [QuartzCronComponent], imports: [CommonModule,
            QuartzCronMonthModule,
            QuartzCronMinuteModule,
            QuartzCronHourModule,
            QuartzCronSecondModule,
            QuartzCronYearModule,
            QuartzCronDayModule,
            CronContainerModule], exports: [QuartzCronComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronModule, imports: [CommonModule,
            QuartzCronMonthModule,
            QuartzCronMinuteModule,
            QuartzCronHourModule,
            QuartzCronSecondModule,
            QuartzCronYearModule,
            QuartzCronDayModule,
            CronContainerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronModule, decorators: [{
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
                    declarations: [QuartzCronComponent],
                    exports: [QuartzCronComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhcnR6Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNyb24vc3JjL2xpYi9xdWFydHovcXVhcnR6Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNuRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFnQnpELE1BQU0sT0FBTyxnQkFBZ0I7K0dBQWhCLGdCQUFnQjtnSEFBaEIsZ0JBQWdCLGlCQUhaLG1CQUFtQixhQVRoQyxZQUFZO1lBQ1oscUJBQXFCO1lBQ3JCLHNCQUFzQjtZQUN0QixvQkFBb0I7WUFDcEIsc0JBQXNCO1lBQ3RCLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsbUJBQW1CLGFBR1gsbUJBQW1CO2dIQUVsQixnQkFBZ0IsWUFaekIsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsb0JBQW9CO1lBQ3BCLHNCQUFzQjtZQUN0QixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLG1CQUFtQjs7NEZBS1YsZ0JBQWdCO2tCQWQ1QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDcm9uQ29udGFpbmVyTW9kdWxlIH0gZnJvbSAnLi8uLi9jb250YWluZXInO1xuaW1wb3J0IHsgUXVhcnR6Q3Jvbk1pbnV0ZU1vZHVsZSB9IGZyb20gJy4vdGFicy9taW51dGUnO1xuaW1wb3J0IHsgUXVhcnR6Q3Jvbk1vbnRoTW9kdWxlIH0gZnJvbSAnLi90YWJzL21vbnRoJztcbmltcG9ydCB7IFF1YXJ0ekNyb25Ib3VyTW9kdWxlIH0gZnJvbSAnLi90YWJzL2hvdXInO1xuaW1wb3J0IHsgUXVhcnR6Q3JvblNlY29uZE1vZHVsZSB9IGZyb20gJy4vdGFicy9zZWNvbmQnO1xuaW1wb3J0IHsgUXVhcnR6Q3JvblllYXJNb2R1bGUgfSBmcm9tICcuL3RhYnMveWVhcic7XG5pbXBvcnQgeyBRdWFydHpDcm9uRGF5TW9kdWxlIH0gZnJvbSAnLi90YWJzL2RheSc7XG5cbmltcG9ydCB7IFF1YXJ0ekNyb25Db21wb25lbnQgfSBmcm9tICcuL3F1YXJ0ei5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFF1YXJ0ekNyb25Nb250aE1vZHVsZSxcbiAgICBRdWFydHpDcm9uTWludXRlTW9kdWxlLFxuICAgIFF1YXJ0ekNyb25Ib3VyTW9kdWxlLFxuICAgIFF1YXJ0ekNyb25TZWNvbmRNb2R1bGUsXG4gICAgUXVhcnR6Q3JvblllYXJNb2R1bGUsXG4gICAgUXVhcnR6Q3JvbkRheU1vZHVsZSxcbiAgICBDcm9uQ29udGFpbmVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1F1YXJ0ekNyb25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbUXVhcnR6Q3JvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgUXVhcnR6Q3Jvbk1vZHVsZSB7fVxuIl19