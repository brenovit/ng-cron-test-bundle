import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Mode } from '@sbzen/cron-core';
import * as i0 from "@angular/core";
export class CronAndComponent {
    constructor(cd) {
        this.cd = cd;
        this.selected = new EventEmitter();
        this.checked = false;
        this.disabled = false;
        this.disabledControls = false;
        this.label = '';
        this.segmentId = '';
        this.options = [];
        this.isValueSelected = () => false;
        this.selectValue = () => false;
        this.mode = Mode.AND;
    }
    changeValue(e, value) {
        const status = this.selectValue(value);
        if (!status) {
            e.preventDefault();
        }
    }
    detectChanges() {
        this.cd.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronAndComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: CronAndComponent, isStandalone: false, selector: "cron-and", inputs: { checked: "checked", disabled: "disabled", disabledControls: "disabledControls", gridSize: "gridSize", label: "label", segmentId: "segmentId", options: "options", isValueSelected: "isValueSelected", selectValue: "selectValue", schema: "schema" }, outputs: { selected: "selected" }, ngImport: i0, template: "<div class=\"{{schema.formGroup}} c-and c-segment\">\n  <div class=\"{{schema.check.root}} c-and-check\">\n    <input\n      class=\"{{schema.check.field}} c-and-option\"\n      type=\"radio\"\n      [attr.id]=\"segmentId\"\n      [value]=\"mode\"\n      [checked]=\"checked\"\n      [disabled]=\"disabled\"\n      (change)=\"selected.emit()\">\n\n    <label\n      class=\"{{schema.check.label}} c-and-option-label\"\n      [attr.for]=\"segmentId\">\n      {{label}}\n    </label>\n  </div>\n\n  <div class=\"{{schema.check.row}} c-and-list\">\n    @for (item of options; track item) {\n      <div\n        class=\"{{gridSize || (schema.col2 + ' ' + schema.colMd1)}} c-and-item\"\n        [attr.item-value]=\"item.value\">\n\n        <div class=\"{{schema.check.root}} c-and-item-check\">\n          <input\n            class=\"{{schema.check.field}} c-and-item-field\"\n            type=\"checkbox\"\n            [attr.id]=\"segmentId + '_' + item.value\"\n            [value]=\"item.value\"\n            [disabled]=\"disabledControls\"\n            [checked]=\"isValueSelected(item.value)\"\n            (click)=\"changeValue($event, item.value)\">\n\n          <label\n            class=\"{{schema.check.label}} c-and-item-label\"\n            [attr.for]=\"segmentId + '_' + item.value\">\n            {{item.label}}\n          </label>\n        </div>\n      </div>\n    }\n  </div>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronAndComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cron-and', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<div class=\"{{schema.formGroup}} c-and c-segment\">\n  <div class=\"{{schema.check.root}} c-and-check\">\n    <input\n      class=\"{{schema.check.field}} c-and-option\"\n      type=\"radio\"\n      [attr.id]=\"segmentId\"\n      [value]=\"mode\"\n      [checked]=\"checked\"\n      [disabled]=\"disabled\"\n      (change)=\"selected.emit()\">\n\n    <label\n      class=\"{{schema.check.label}} c-and-option-label\"\n      [attr.for]=\"segmentId\">\n      {{label}}\n    </label>\n  </div>\n\n  <div class=\"{{schema.check.row}} c-and-list\">\n    @for (item of options; track item) {\n      <div\n        class=\"{{gridSize || (schema.col2 + ' ' + schema.colMd1)}} c-and-item\"\n        [attr.item-value]=\"item.value\">\n\n        <div class=\"{{schema.check.root}} c-and-item-check\">\n          <input\n            class=\"{{schema.check.field}} c-and-item-field\"\n            type=\"checkbox\"\n            [attr.id]=\"segmentId + '_' + item.value\"\n            [value]=\"item.value\"\n            [disabled]=\"disabledControls\"\n            [checked]=\"isValueSelected(item.value)\"\n            (click)=\"changeValue($event, item.value)\">\n\n          <label\n            class=\"{{schema.check.label}} c-and-item-label\"\n            [attr.for]=\"segmentId + '_' + item.value\">\n            {{item.label}}\n          </label>\n        </div>\n      </div>\n    }\n  </div>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { selected: [{
                type: Output
            }], checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], disabledControls: [{
                type: Input
            }], gridSize: [{
                type: Input
            }], label: [{
                type: Input
            }], segmentId: [{
                type: Input
            }], options: [{
                type: Input
            }], isValueSelected: [{
                type: Input
            }], selectValue: [{
                type: Input
            }], schema: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNyb24vc3JjL2xpYi9zaGFyZWQvYW5kL2FuZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jcm9uL3NyYy9saWIvc2hhcmVkL2FuZC9hbmQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBVXhDLE1BQU0sT0FBTyxnQkFBZ0I7SUFpQjNCLFlBQTZCLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBaEIvQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUM5QyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBRXpCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsWUFBTyxHQUdWLEVBQUUsQ0FBQztRQUNBLG9CQUFlLEdBQStCLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUMxRCxnQkFBVyxHQUErQixHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFFdEQsU0FBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFFNEIsQ0FBQztJQUV0RCxXQUFXLENBQUMsQ0FBUSxFQUFFLEtBQWE7UUFDakMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDWixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsQ0FBQztJQUNILENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDOytHQTVCVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQix3V0NYN0IsdTNDQTRDQTs7NEZEakNhLGdCQUFnQjtrQkFONUIsU0FBUzsrQkFDSSxVQUFVLG1CQUVILHVCQUF1QixDQUFDLE1BQU0sY0FDbkMsS0FBSztzRkFHQSxRQUFRO3NCQUExQixNQUFNO2dCQUNFLE9BQU87c0JBQWYsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFJRyxlQUFlO3NCQUF2QixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kZSB9IGZyb20gJ0BzYnplbi9jcm9uLWNvcmUnO1xuXG5pbXBvcnQgeyBDcm9uQ2xhc3Nlc1NjaGVtYSB9IGZyb20gJy4vLi4vLi4vc3R5bGVzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjcm9uLWFuZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FuZC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBzdGFuZGFsb25lOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBDcm9uQW5kQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBASW5wdXQoKSBjaGVja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkQ29udHJvbHMgPSBmYWxzZTtcbiAgQElucHV0KCkgZ3JpZFNpemU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XG4gIEBJbnB1dCgpIHNlZ21lbnRJZCA9ICcnO1xuICBASW5wdXQoKSBvcHRpb25zOiB7XG4gICAgbGFiZWw6IHN0cmluZ3xudW1iZXIsXG4gICAgdmFsdWU6IHN0cmluZ1xuICB9W10gPSBbXTtcbiAgQElucHV0KCkgaXNWYWx1ZVNlbGVjdGVkOiAodmFsdWU6IHN0cmluZykgPT4gYm9vbGVhbiA9ICgpID0+IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RWYWx1ZTogKHZhbHVlOiBzdHJpbmcpID0+IGJvb2xlYW4gPSAoKSA9PiBmYWxzZTtcbiAgQElucHV0KCkgc2NoZW1hITogQ3JvbkNsYXNzZXNTY2hlbWE7XG4gIHJlYWRvbmx5IG1vZGUgPSBNb2RlLkFORDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBjaGFuZ2VWYWx1ZShlOiBFdmVudCwgdmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMuc2VsZWN0VmFsdWUodmFsdWUpO1xuICAgIGlmICghc3RhdHVzKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgZGV0ZWN0Q2hhbmdlcygpIHtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInt7c2NoZW1hLmZvcm1Hcm91cH19IGMtYW5kIGMtc2VnbWVudFwiPlxuICA8ZGl2IGNsYXNzPVwie3tzY2hlbWEuY2hlY2sucm9vdH19IGMtYW5kLWNoZWNrXCI+XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cInt7c2NoZW1hLmNoZWNrLmZpZWxkfX0gYy1hbmQtb3B0aW9uXCJcbiAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICBbYXR0ci5pZF09XCJzZWdtZW50SWRcIlxuICAgICAgW3ZhbHVlXT1cIm1vZGVcIlxuICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgKGNoYW5nZSk9XCJzZWxlY3RlZC5lbWl0KClcIj5cblxuICAgIDxsYWJlbFxuICAgICAgY2xhc3M9XCJ7e3NjaGVtYS5jaGVjay5sYWJlbH19IGMtYW5kLW9wdGlvbi1sYWJlbFwiXG4gICAgICBbYXR0ci5mb3JdPVwic2VnbWVudElkXCI+XG4gICAgICB7e2xhYmVsfX1cbiAgICA8L2xhYmVsPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwie3tzY2hlbWEuY2hlY2sucm93fX0gYy1hbmQtbGlzdFwiPlxuICAgIEBmb3IgKGl0ZW0gb2Ygb3B0aW9uczsgdHJhY2sgaXRlbSkge1xuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInt7Z3JpZFNpemUgfHwgKHNjaGVtYS5jb2wyICsgJyAnICsgc2NoZW1hLmNvbE1kMSl9fSBjLWFuZC1pdGVtXCJcbiAgICAgICAgW2F0dHIuaXRlbS12YWx1ZV09XCJpdGVtLnZhbHVlXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInt7c2NoZW1hLmNoZWNrLnJvb3R9fSBjLWFuZC1pdGVtLWNoZWNrXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzcz1cInt7c2NoZW1hLmNoZWNrLmZpZWxkfX0gYy1hbmQtaXRlbS1maWVsZFwiXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgW2F0dHIuaWRdPVwic2VnbWVudElkICsgJ18nICsgaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRDb250cm9sc1wiXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJpc1ZhbHVlU2VsZWN0ZWQoaXRlbS52YWx1ZSlcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImNoYW5nZVZhbHVlKCRldmVudCwgaXRlbS52YWx1ZSlcIj5cblxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3M9XCJ7e3NjaGVtYS5jaGVjay5sYWJlbH19IGMtYW5kLWl0ZW0tbGFiZWxcIlxuICAgICAgICAgICAgW2F0dHIuZm9yXT1cInNlZ21lbnRJZCArICdfJyArIGl0ZW0udmFsdWVcIj5cbiAgICAgICAgICAgIHt7aXRlbS5sYWJlbH19XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=