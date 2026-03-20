import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronContainerModule } from './../container';
import { UnixCronMinuteModule } from './tabs/minute';
import { UnixCronMonthModule } from './tabs/month';
import { UnixCronHourModule } from './tabs/hour';
import { UnixCronDayModule } from './tabs/day';
import { UnixCronComponent } from './unix.component';
import * as i0 from "@angular/core";
export class UnixCronModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: UnixCronModule, declarations: [UnixCronComponent], imports: [CommonModule,
            UnixCronMinuteModule,
            UnixCronMonthModule,
            UnixCronHourModule,
            UnixCronDayModule,
            CronContainerModule], exports: [UnixCronComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronModule, imports: [CommonModule,
            UnixCronMinuteModule,
            UnixCronMonthModule,
            UnixCronHourModule,
            UnixCronDayModule,
            CronContainerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        UnixCronMinuteModule,
                        UnixCronMonthModule,
                        UnixCronHourModule,
                        UnixCronDayModule,
                        CronContainerModule
                    ],
                    declarations: [UnixCronComponent],
                    exports: [UnixCronComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5peC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jcm9uL3NyYy9saWIvdW5peC91bml4Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBY3JELE1BQU0sT0FBTyxjQUFjOytHQUFkLGNBQWM7Z0hBQWQsY0FBYyxpQkFIVixpQkFBaUIsYUFQOUIsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixtQkFBbUIsYUFHWCxpQkFBaUI7Z0hBRWhCLGNBQWMsWUFWdkIsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixtQkFBbUI7OzRGQUtWLGNBQWM7a0JBWjFCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNqQixtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ3JvbkNvbnRhaW5lck1vZHVsZSB9IGZyb20gJy4vLi4vY29udGFpbmVyJztcbmltcG9ydCB7IFVuaXhDcm9uTWludXRlTW9kdWxlIH0gZnJvbSAnLi90YWJzL21pbnV0ZSc7XG5pbXBvcnQgeyBVbml4Q3Jvbk1vbnRoTW9kdWxlIH0gZnJvbSAnLi90YWJzL21vbnRoJztcbmltcG9ydCB7IFVuaXhDcm9uSG91ck1vZHVsZSB9IGZyb20gJy4vdGFicy9ob3VyJztcbmltcG9ydCB7IFVuaXhDcm9uRGF5TW9kdWxlIH0gZnJvbSAnLi90YWJzL2RheSc7XG5cbmltcG9ydCB7IFVuaXhDcm9uQ29tcG9uZW50IH0gZnJvbSAnLi91bml4LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVW5peENyb25NaW51dGVNb2R1bGUsXG4gICAgVW5peENyb25Nb250aE1vZHVsZSxcbiAgICBVbml4Q3JvbkhvdXJNb2R1bGUsXG4gICAgVW5peENyb25EYXlNb2R1bGUsXG4gICAgQ3JvbkNvbnRhaW5lck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtVbml4Q3JvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtVbml4Q3JvbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVW5peENyb25Nb2R1bGUge31cbiJdfQ==