import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronAndModule, CronRangeModule, CronEveryModule } from './../../../shared';
import { QuartzCronIncrementModule } from './../shared/increment';
import { QuartzCronMonthComponent } from './month.component';
import * as i0 from "@angular/core";
export class QuartzCronMonthModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronMonthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronMonthModule, declarations: [QuartzCronMonthComponent], imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            QuartzCronIncrementModule], exports: [QuartzCronMonthComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronMonthModule, imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            QuartzCronIncrementModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronMonthModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        CronEveryModule,
                        CronRangeModule,
                        CronAndModule,
                        QuartzCronIncrementModule
                    ],
                    declarations: [QuartzCronMonthComponent],
                    exports: [QuartzCronMonthComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY3Jvbi9zcmMvbGliL3F1YXJ0ei90YWJzL21vbnRoL21vbnRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFhN0QsTUFBTSxPQUFPLHFCQUFxQjsrR0FBckIscUJBQXFCO2dIQUFyQixxQkFBcUIsaUJBSGpCLHdCQUF3QixhQU5yQyxZQUFZO1lBQ1osZUFBZTtZQUNmLGVBQWU7WUFDZixhQUFhO1lBQ2IseUJBQXlCLGFBR2pCLHdCQUF3QjtnSEFFdkIscUJBQXFCLFlBVDlCLFlBQVk7WUFDWixlQUFlO1lBQ2YsZUFBZTtZQUNmLGFBQWE7WUFDYix5QkFBeUI7OzRGQUtoQixxQkFBcUI7a0JBWGpDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IseUJBQXlCO3FCQUMxQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENyb25BbmRNb2R1bGUsIENyb25SYW5nZU1vZHVsZSwgQ3JvbkV2ZXJ5TW9kdWxlIH0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUXVhcnR6Q3JvbkluY3JlbWVudE1vZHVsZSB9IGZyb20gJy4vLi4vc2hhcmVkL2luY3JlbWVudCc7XG5pbXBvcnQgeyBRdWFydHpDcm9uTW9udGhDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ3JvbkV2ZXJ5TW9kdWxlLFxuICAgIENyb25SYW5nZU1vZHVsZSxcbiAgICBDcm9uQW5kTW9kdWxlLFxuICAgIFF1YXJ0ekNyb25JbmNyZW1lbnRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUXVhcnR6Q3Jvbk1vbnRoQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1F1YXJ0ekNyb25Nb250aENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgUXVhcnR6Q3Jvbk1vbnRoTW9kdWxlIHt9XG4iXX0=