import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Mode } from '@sbzen/cron-core';
import * as i0 from "@angular/core";
export class CronEveryComponent {
    constructor() {
        this.selected = new EventEmitter();
        this.checked = false;
        this.disabled = false;
        this.label = '';
        this.segmentId = '';
        this.mode = Mode.EVERY;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronEveryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.20", type: CronEveryComponent, isStandalone: false, selector: "cron-every", inputs: { checked: "checked", disabled: "disabled", label: "label", segmentId: "segmentId", schema: "schema" }, outputs: { selected: "selected" }, ngImport: i0, template: "<div class=\"{{schema.formGroup}} c-every c-segment\">\n  <div class=\"{{schema.check.root}} c-every-check\">\n    <input\n      class=\"{{schema.check.field}} c-every-option\"\n      type=\"radio\"\n      [attr.id]=\"segmentId\"\n      [value]=\"mode\"\n      [checked]=\"checked\"\n      [disabled]=\"disabled\"\n      (change)=\"selected.emit()\">\n\n    <label\n      class=\"{{schema.check.label}} c-every-option-label\"\n      [attr.for]=\"segmentId\">\n      {{label}}\n    </label>\n  </div>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronEveryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cron-every', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<div class=\"{{schema.formGroup}} c-every c-segment\">\n  <div class=\"{{schema.check.root}} c-every-check\">\n    <input\n      class=\"{{schema.check.field}} c-every-option\"\n      type=\"radio\"\n      [attr.id]=\"segmentId\"\n      [value]=\"mode\"\n      [checked]=\"checked\"\n      [disabled]=\"disabled\"\n      (change)=\"selected.emit()\">\n\n    <label\n      class=\"{{schema.check.label}} c-every-option-label\"\n      [attr.for]=\"segmentId\">\n      {{label}}\n    </label>\n  </div>\n</div>\n" }]
        }], propDecorators: { selected: [{
                type: Output
            }], checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], label: [{
                type: Input
            }], segmentId: [{
                type: Input
            }], schema: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY3Jvbi9zcmMvbGliL3NoYXJlZC9ldmVyeS9ldmVyeS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jcm9uL3NyYy9saWIvc2hhcmVkL2V2ZXJ5L2V2ZXJ5Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBVXhDLE1BQU0sT0FBTyxrQkFBa0I7SUFOL0I7UUFPcUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDOUMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBR2YsU0FBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUI7K0dBVFksa0JBQWtCO21HQUFsQixrQkFBa0IsME5DWC9CLCtmQWtCQTs7NEZEUGEsa0JBQWtCO2tCQU45QixTQUFTOytCQUNJLFlBQVksbUJBRUwsdUJBQXVCLENBQUMsTUFBTSxjQUNuQyxLQUFLOzhCQUdBLFFBQVE7c0JBQTFCLE1BQU07Z0JBQ0UsT0FBTztzQkFBZixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnQHNiemVuL2Nyb24tY29yZSc7XG5cbmltcG9ydCB7IENyb25DbGFzc2VzU2NoZW1hIH0gZnJvbSAnLi8uLi8uLi9zdHlsZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Nyb24tZXZlcnknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ldmVyeS5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBzdGFuZGFsb25lOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBDcm9uRXZlcnlDb21wb25lbnQge1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBJbnB1dCgpIGNoZWNrZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWwgPSAnJztcbiAgQElucHV0KCkgc2VnbWVudElkID0gJyc7XG4gIEBJbnB1dCgpIHNjaGVtYSE6IENyb25DbGFzc2VzU2NoZW1hO1xuXG4gIHJlYWRvbmx5IG1vZGUgPSBNb2RlLkVWRVJZO1xufVxuIiwiPGRpdiBjbGFzcz1cInt7c2NoZW1hLmZvcm1Hcm91cH19IGMtZXZlcnkgYy1zZWdtZW50XCI+XG4gIDxkaXYgY2xhc3M9XCJ7e3NjaGVtYS5jaGVjay5yb290fX0gYy1ldmVyeS1jaGVja1wiPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJ7e3NjaGVtYS5jaGVjay5maWVsZH19IGMtZXZlcnktb3B0aW9uXCJcbiAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICBbYXR0ci5pZF09XCJzZWdtZW50SWRcIlxuICAgICAgW3ZhbHVlXT1cIm1vZGVcIlxuICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgKGNoYW5nZSk9XCJzZWxlY3RlZC5lbWl0KClcIj5cblxuICAgIDxsYWJlbFxuICAgICAgY2xhc3M9XCJ7e3NjaGVtYS5jaGVjay5sYWJlbH19IGMtZXZlcnktb3B0aW9uLWxhYmVsXCJcbiAgICAgIFthdHRyLmZvcl09XCJzZWdtZW50SWRcIj5cbiAgICAgIHt7bGFiZWx9fVxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=