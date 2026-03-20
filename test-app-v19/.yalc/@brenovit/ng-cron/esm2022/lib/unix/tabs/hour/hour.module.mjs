import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronAndModule, CronRangeModule, CronEveryModule } from './../../../shared';
import { UnixCronIncrementModule } from './../shared/increment';
import { UnixCronHourComponent } from './hour.component';
import * as i0 from "@angular/core";
export class UnixCronHourModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronHourModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: UnixCronHourModule, declarations: [UnixCronHourComponent], imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            UnixCronIncrementModule], exports: [UnixCronHourComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronHourModule, imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            UnixCronIncrementModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronHourModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        CronEveryModule,
                        CronRangeModule,
                        CronAndModule,
                        UnixCronIncrementModule
                    ],
                    declarations: [UnixCronHourComponent],
                    exports: [UnixCronHourComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jcm9uL3NyYy9saWIvdW5peC90YWJzL2hvdXIvaG91ci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBYXpELE1BQU0sT0FBTyxrQkFBa0I7K0dBQWxCLGtCQUFrQjtnSEFBbEIsa0JBQWtCLGlCQUhkLHFCQUFxQixhQU5sQyxZQUFZO1lBQ1osZUFBZTtZQUNmLGVBQWU7WUFDZixhQUFhO1lBQ2IsdUJBQXVCLGFBR2YscUJBQXFCO2dIQUVwQixrQkFBa0IsWUFUM0IsWUFBWTtZQUNaLGVBQWU7WUFDZixlQUFlO1lBQ2YsYUFBYTtZQUNiLHVCQUF1Qjs7NEZBS2Qsa0JBQWtCO2tCQVg5QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixhQUFhO3dCQUNiLHVCQUF1QjtxQkFDeEI7b0JBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7b0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2lCQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDcm9uQW5kTW9kdWxlLCBDcm9uUmFuZ2VNb2R1bGUsIENyb25FdmVyeU1vZHVsZSB9IGZyb20gJy4vLi4vLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFVuaXhDcm9uSW5jcmVtZW50TW9kdWxlIH0gZnJvbSAnLi8uLi9zaGFyZWQvaW5jcmVtZW50JztcbmltcG9ydCB7IFVuaXhDcm9uSG91ckNvbXBvbmVudCB9IGZyb20gJy4vaG91ci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENyb25FdmVyeU1vZHVsZSxcbiAgICBDcm9uUmFuZ2VNb2R1bGUsXG4gICAgQ3JvbkFuZE1vZHVsZSxcbiAgICBVbml4Q3JvbkluY3JlbWVudE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtVbml4Q3JvbkhvdXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVW5peENyb25Ib3VyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBVbml4Q3JvbkhvdXJNb2R1bGUge31cbiJdfQ==