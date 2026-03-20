import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronContainerModule } from './../container';
import { UnixCronMinuteModule } from './../unix/tabs/minute';
import { UnixCronMonthModule } from './../unix/tabs/month';
import { UnixCronHourModule } from './../unix/tabs/hour';
import { UnixCronDayModule } from './../unix/tabs/day';
import { Bs5UnixCronComponent } from './bs5-unix.component';
import * as i0 from "@angular/core";
export class Bs5UnixCronModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: Bs5UnixCronModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: Bs5UnixCronModule, declarations: [Bs5UnixCronComponent], imports: [CommonModule,
            UnixCronMinuteModule,
            UnixCronMonthModule,
            UnixCronHourModule,
            UnixCronDayModule,
            CronContainerModule], exports: [Bs5UnixCronComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: Bs5UnixCronModule, imports: [CommonModule,
            UnixCronMinuteModule,
            UnixCronMonthModule,
            UnixCronHourModule,
            UnixCronDayModule,
            CronContainerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: Bs5UnixCronModule, decorators: [{
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
                    declarations: [Bs5UnixCronComponent],
                    exports: [Bs5UnixCronComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnM1LXVuaXgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY3Jvbi9zcmMvbGliL2JzNS11bml4L2JzNS11bml4Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFjNUQsTUFBTSxPQUFPLGlCQUFpQjsrR0FBakIsaUJBQWlCO2dIQUFqQixpQkFBaUIsaUJBSGIsb0JBQW9CLGFBUGpDLFlBQVk7WUFDWixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsbUJBQW1CLGFBR1gsb0JBQW9CO2dIQUVuQixpQkFBaUIsWUFWMUIsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixtQkFBbUI7OzRGQUtWLGlCQUFpQjtrQkFaN0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDcm9uQ29udGFpbmVyTW9kdWxlIH0gZnJvbSAnLi8uLi9jb250YWluZXInO1xuaW1wb3J0IHsgVW5peENyb25NaW51dGVNb2R1bGUgfSBmcm9tICcuLy4uL3VuaXgvdGFicy9taW51dGUnO1xuaW1wb3J0IHsgVW5peENyb25Nb250aE1vZHVsZSB9IGZyb20gJy4vLi4vdW5peC90YWJzL21vbnRoJztcbmltcG9ydCB7IFVuaXhDcm9uSG91ck1vZHVsZSB9IGZyb20gJy4vLi4vdW5peC90YWJzL2hvdXInO1xuaW1wb3J0IHsgVW5peENyb25EYXlNb2R1bGUgfSBmcm9tICcuLy4uL3VuaXgvdGFicy9kYXknO1xuXG5pbXBvcnQgeyBCczVVbml4Q3JvbkNvbXBvbmVudCB9IGZyb20gJy4vYnM1LXVuaXguY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBVbml4Q3Jvbk1pbnV0ZU1vZHVsZSxcbiAgICBVbml4Q3Jvbk1vbnRoTW9kdWxlLFxuICAgIFVuaXhDcm9uSG91ck1vZHVsZSxcbiAgICBVbml4Q3JvbkRheU1vZHVsZSxcbiAgICBDcm9uQ29udGFpbmVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0JzNVVuaXhDcm9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0JzNVVuaXhDcm9uQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBCczVVbml4Q3Jvbk1vZHVsZSB7fVxuIl19