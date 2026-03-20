import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronAndModule, CronRangeModule, CronEveryModule } from './../../../shared';
import { UnixCronIncrementModule } from './../shared/increment';
import { UnixCronMonthComponent } from './month.component';
import * as i0 from "@angular/core";
export class UnixCronMonthModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronMonthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: UnixCronMonthModule, declarations: [UnixCronMonthComponent], imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            UnixCronIncrementModule], exports: [UnixCronMonthComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronMonthModule, imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            UnixCronIncrementModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronMonthModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        CronEveryModule,
                        CronRangeModule,
                        CronAndModule,
                        UnixCronIncrementModule
                    ],
                    declarations: [UnixCronMonthComponent],
                    exports: [UnixCronMonthComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY3Jvbi9zcmMvbGliL3VuaXgvdGFicy9tb250aC9tb250aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBYTNELE1BQU0sT0FBTyxtQkFBbUI7K0dBQW5CLG1CQUFtQjtnSEFBbkIsbUJBQW1CLGlCQUhmLHNCQUFzQixhQU5uQyxZQUFZO1lBQ1osZUFBZTtZQUNmLGVBQWU7WUFDZixhQUFhO1lBQ2IsdUJBQXVCLGFBR2Ysc0JBQXNCO2dIQUVyQixtQkFBbUIsWUFUNUIsWUFBWTtZQUNaLGVBQWU7WUFDZixlQUFlO1lBQ2YsYUFBYTtZQUNiLHVCQUF1Qjs7NEZBS2QsbUJBQW1CO2tCQVgvQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixhQUFhO3dCQUNiLHVCQUF1QjtxQkFDeEI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDcm9uQW5kTW9kdWxlLCBDcm9uUmFuZ2VNb2R1bGUsIENyb25FdmVyeU1vZHVsZSB9IGZyb20gJy4vLi4vLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFVuaXhDcm9uSW5jcmVtZW50TW9kdWxlIH0gZnJvbSAnLi8uLi9zaGFyZWQvaW5jcmVtZW50JztcbmltcG9ydCB7IFVuaXhDcm9uTW9udGhDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ3JvbkV2ZXJ5TW9kdWxlLFxuICAgIENyb25SYW5nZU1vZHVsZSxcbiAgICBDcm9uQW5kTW9kdWxlLFxuICAgIFVuaXhDcm9uSW5jcmVtZW50TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1VuaXhDcm9uTW9udGhDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVW5peENyb25Nb250aENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVW5peENyb25Nb250aE1vZHVsZSB7fVxuIl19