import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronAndModule, CronRangeModule, CronEveryModule } from './../../../shared';
import { UnixCronIncrementModule } from './../shared/increment';
import { UnixCronMinuteComponent } from './minute.component';
import * as i0 from "@angular/core";
export class UnixCronMinuteModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronMinuteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: UnixCronMinuteModule, declarations: [UnixCronMinuteComponent], imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            UnixCronIncrementModule], exports: [UnixCronMinuteComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronMinuteModule, imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            UnixCronIncrementModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronMinuteModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        CronEveryModule,
                        CronRangeModule,
                        CronAndModule,
                        UnixCronIncrementModule
                    ],
                    declarations: [UnixCronMinuteComponent],
                    exports: [UnixCronMinuteComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWludXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNyb24vc3JjL2xpYi91bml4L3RhYnMvbWludXRlL21pbnV0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBYTdELE1BQU0sT0FBTyxvQkFBb0I7K0dBQXBCLG9CQUFvQjtnSEFBcEIsb0JBQW9CLGlCQUhoQix1QkFBdUIsYUFOcEMsWUFBWTtZQUNaLGVBQWU7WUFDZixlQUFlO1lBQ2YsYUFBYTtZQUNiLHVCQUF1QixhQUdmLHVCQUF1QjtnSEFFdEIsb0JBQW9CLFlBVDdCLFlBQVk7WUFDWixlQUFlO1lBQ2YsZUFBZTtZQUNmLGFBQWE7WUFDYix1QkFBdUI7OzRGQUtkLG9CQUFvQjtrQkFYaEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYix1QkFBdUI7cUJBQ3hCO29CQUNELFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ3JvbkFuZE1vZHVsZSwgQ3JvblJhbmdlTW9kdWxlLCBDcm9uRXZlcnlNb2R1bGUgfSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBVbml4Q3JvbkluY3JlbWVudE1vZHVsZSB9IGZyb20gJy4vLi4vc2hhcmVkL2luY3JlbWVudCc7XG5pbXBvcnQgeyBVbml4Q3Jvbk1pbnV0ZUNvbXBvbmVudCB9IGZyb20gJy4vbWludXRlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ3JvbkV2ZXJ5TW9kdWxlLFxuICAgIENyb25SYW5nZU1vZHVsZSxcbiAgICBDcm9uQW5kTW9kdWxlLFxuICAgIFVuaXhDcm9uSW5jcmVtZW50TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1VuaXhDcm9uTWludXRlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1VuaXhDcm9uTWludXRlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBVbml4Q3Jvbk1pbnV0ZU1vZHVsZSB7fVxuIl19