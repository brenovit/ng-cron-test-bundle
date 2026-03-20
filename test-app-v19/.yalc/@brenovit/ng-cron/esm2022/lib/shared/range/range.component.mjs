import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Mode } from '@sbzen/cron-core';
import * as i0 from "@angular/core";
export class CronRangeComponent {
    constructor() {
        this.selected = new EventEmitter();
        this.primaryValueChanged = new EventEmitter();
        this.secondaryValueChanged = new EventEmitter();
        this.segmentId = '';
        this.checked = false;
        this.disabled = false;
        this.disabledControls = false;
        this.label = '';
        this.label2 = '';
        this.primaryValue = '';
        this.primaryOptions = [];
        this.secondaryValue = '';
        this.secondaryOptions = [];
        this.mode = Mode.RANGE;
    }
    setPrimaryValue(e) {
        const el = e.target;
        this.primaryValueChanged.emit(el.value);
    }
    setSecondaryValue(e) {
        const el = e.target;
        this.secondaryValueChanged.emit(el.value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronRangeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: CronRangeComponent, isStandalone: false, selector: "cron-range", inputs: { segmentId: "segmentId", checked: "checked", disabled: "disabled", disabledControls: "disabledControls", label: "label", label2: "label2", primaryValue: "primaryValue", primaryOptions: "primaryOptions", secondaryValue: "secondaryValue", secondaryOptions: "secondaryOptions", schema: "schema" }, outputs: { selected: "selected", primaryValueChanged: "primaryValueChanged", secondaryValueChanged: "secondaryValueChanged" }, ngImport: i0, template: "<div class=\"{{schema.formGroup}} {{schema.formInline}} c-range c-segment\">\n  <div class=\"{{schema.check.root}} c-range-check\">\n    <input\n      class=\"{{schema.check.field}} c-range-option\"\n      type=\"radio\"\n      [attr.id]=\"segmentId\"\n      [value]=\"mode\"\n      [checked]=\"checked\"\n      [disabled]=\"disabled\"\n      (change)=\"selected.emit()\">\n\n    <label\n      class=\"{{schema.check.label}} c-range-option-label\"\n      [attr.for]=\"segmentId\">\n      {{label}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-range-from\"\n    [disabled]=\"disabledControls\"\n    (change)=\"setPrimaryValue($event)\">\n\n    @for (item of primaryOptions; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"primaryValue === item.value\">\n        {{item.label}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-range-option-label2\"\n    [attr.for]=\"segmentId\">\n    {{label2}}\n  </label>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.ml1}} c-range-to\"\n    [disabled]=\"disabledControls\"\n    (change)=\"setSecondaryValue($event)\">\n\n    @for (item of secondaryOptions; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"secondaryValue === item.value\">\n        {{item.label}}\n      </option>\n    }\n  </select>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cron-range', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<div class=\"{{schema.formGroup}} {{schema.formInline}} c-range c-segment\">\n  <div class=\"{{schema.check.root}} c-range-check\">\n    <input\n      class=\"{{schema.check.field}} c-range-option\"\n      type=\"radio\"\n      [attr.id]=\"segmentId\"\n      [value]=\"mode\"\n      [checked]=\"checked\"\n      [disabled]=\"disabled\"\n      (change)=\"selected.emit()\">\n\n    <label\n      class=\"{{schema.check.label}} c-range-option-label\"\n      [attr.for]=\"segmentId\">\n      {{label}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-range-from\"\n    [disabled]=\"disabledControls\"\n    (change)=\"setPrimaryValue($event)\">\n\n    @for (item of primaryOptions; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"primaryValue === item.value\">\n        {{item.label}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-range-option-label2\"\n    [attr.for]=\"segmentId\">\n    {{label2}}\n  </label>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.ml1}} c-range-to\"\n    [disabled]=\"disabledControls\"\n    (change)=\"setSecondaryValue($event)\">\n\n    @for (item of secondaryOptions; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"secondaryValue === item.value\">\n        {{item.label}}\n      </option>\n    }\n  </select>\n</div>\n" }]
        }], propDecorators: { selected: [{
                type: Output
            }], primaryValueChanged: [{
                type: Output
            }], secondaryValueChanged: [{
                type: Output
            }], segmentId: [{
                type: Input
            }], checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], disabledControls: [{
                type: Input
            }], label: [{
                type: Input
            }], label2: [{
                type: Input
            }], primaryValue: [{
                type: Input
            }], primaryOptions: [{
                type: Input
            }], secondaryValue: [{
                type: Input
            }], secondaryOptions: [{
                type: Input
            }], schema: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY3Jvbi9zcmMvbGliL3NoYXJlZC9yYW5nZS9yYW5nZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jcm9uL3NyYy9saWIvc2hhcmVkL3JhbmdlL3JhbmdlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBVXhDLE1BQU0sT0FBTyxrQkFBa0I7SUFOL0I7UUFPcUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDcEMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNqRCwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzdELGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsbUJBQWMsR0FHakIsRUFBRSxDQUFDO1FBQ0EsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIscUJBQWdCLEdBR25CLEVBQUUsQ0FBQztRQUVBLFNBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBVzVCO0lBVEMsZUFBZSxDQUFDLENBQVE7UUFDdEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQTJCLENBQUM7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGlCQUFpQixDQUFDLENBQVE7UUFDeEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQTJCLENBQUM7UUFDekMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQzsrR0EvQlUsa0JBQWtCO21HQUFsQixrQkFBa0Isc2ZDWC9CLDIyQ0FvREE7OzRGRHpDYSxrQkFBa0I7a0JBTjlCLFNBQVM7K0JBQ0ksWUFBWSxtQkFFTCx1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DLEtBQUs7OEJBR0EsUUFBUTtzQkFBMUIsTUFBTTtnQkFDWSxtQkFBbUI7c0JBQXJDLE1BQU07Z0JBQ1kscUJBQXFCO3NCQUF2QyxNQUFNO2dCQUNFLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUlHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUlHLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kZSB9IGZyb20gJ0BzYnplbi9jcm9uLWNvcmUnO1xuXG5pbXBvcnQgeyBDcm9uQ2xhc3Nlc1NjaGVtYSB9IGZyb20gJy4vLi4vLi4vc3R5bGVzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjcm9uLXJhbmdlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmFuZ2UuaHRtbCcsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgc3RhbmRhbG9uZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgQ3JvblJhbmdlQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcHJpbWFyeVZhbHVlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2Vjb25kYXJ5VmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBJbnB1dCgpIHNlZ21lbnRJZCA9ICcnO1xuICBASW5wdXQoKSBjaGVja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkQ29udHJvbHMgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWwgPSAnJztcbiAgQElucHV0KCkgbGFiZWwyID0gJyc7XG4gIEBJbnB1dCgpIHByaW1hcnlWYWx1ZSA9ICcnO1xuICBASW5wdXQoKSBwcmltYXJ5T3B0aW9uczoge1xuICAgIGxhYmVsOiBzdHJpbmd8bnVtYmVyLFxuICAgIHZhbHVlOiBzdHJpbmdcbiAgfVtdID0gW107XG4gIEBJbnB1dCgpIHNlY29uZGFyeVZhbHVlID0gJyc7XG4gIEBJbnB1dCgpIHNlY29uZGFyeU9wdGlvbnM6IHtcbiAgICBsYWJlbDogc3RyaW5nfG51bWJlcixcbiAgICB2YWx1ZTogc3RyaW5nXG4gIH1bXSA9IFtdO1xuICBASW5wdXQoKSBzY2hlbWEhOiBDcm9uQ2xhc3Nlc1NjaGVtYTtcbiAgcmVhZG9ubHkgbW9kZSA9IE1vZGUuUkFOR0U7XG5cbiAgc2V0UHJpbWFyeVZhbHVlKGU6IEV2ZW50KSB7XG4gICAgY29uc3QgZWwgPSBlLnRhcmdldCBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICB0aGlzLnByaW1hcnlWYWx1ZUNoYW5nZWQuZW1pdChlbC52YWx1ZSk7XG4gIH1cblxuICBzZXRTZWNvbmRhcnlWYWx1ZShlOiBFdmVudCkge1xuICAgIGNvbnN0IGVsID0gZS50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgdGhpcy5zZWNvbmRhcnlWYWx1ZUNoYW5nZWQuZW1pdChlbC52YWx1ZSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ7e3NjaGVtYS5mb3JtR3JvdXB9fSB7e3NjaGVtYS5mb3JtSW5saW5lfX0gYy1yYW5nZSBjLXNlZ21lbnRcIj5cbiAgPGRpdiBjbGFzcz1cInt7c2NoZW1hLmNoZWNrLnJvb3R9fSBjLXJhbmdlLWNoZWNrXCI+XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cInt7c2NoZW1hLmNoZWNrLmZpZWxkfX0gYy1yYW5nZS1vcHRpb25cIlxuICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgIFthdHRyLmlkXT1cInNlZ21lbnRJZFwiXG4gICAgICBbdmFsdWVdPVwibW9kZVwiXG4gICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAoY2hhbmdlKT1cInNlbGVjdGVkLmVtaXQoKVwiPlxuXG4gICAgPGxhYmVsXG4gICAgICBjbGFzcz1cInt7c2NoZW1hLmNoZWNrLmxhYmVsfX0gYy1yYW5nZS1vcHRpb24tbGFiZWxcIlxuICAgICAgW2F0dHIuZm9yXT1cInNlZ21lbnRJZFwiPlxuICAgICAge3tsYWJlbH19XG4gICAgPC9sYWJlbD5cbiAgPC9kaXY+XG5cbiAgPHNlbGVjdFxuICAgIGNsYXNzPVwie3tzY2hlbWEuZm9ybUNvbnRyb2x9fSB7e3NjaGVtYS5teDF9fSBjLXJhbmdlLWZyb21cIlxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZENvbnRyb2xzXCJcbiAgICAoY2hhbmdlKT1cInNldFByaW1hcnlWYWx1ZSgkZXZlbnQpXCI+XG5cbiAgICBAZm9yIChpdGVtIG9mIHByaW1hcnlPcHRpb25zOyB0cmFjayBpdGVtKSB7XG4gICAgICA8b3B0aW9uXG4gICAgICAgIFt2YWx1ZV09XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgW3NlbGVjdGVkXT1cInByaW1hcnlWYWx1ZSA9PT0gaXRlbS52YWx1ZVwiPlxuICAgICAgICB7e2l0ZW0ubGFiZWx9fVxuICAgICAgPC9vcHRpb24+XG4gICAgfVxuICA8L3NlbGVjdD5cblxuICA8bGFiZWxcbiAgICBjbGFzcz1cImMtcmFuZ2Utb3B0aW9uLWxhYmVsMlwiXG4gICAgW2F0dHIuZm9yXT1cInNlZ21lbnRJZFwiPlxuICAgIHt7bGFiZWwyfX1cbiAgPC9sYWJlbD5cblxuICA8c2VsZWN0XG4gICAgY2xhc3M9XCJ7e3NjaGVtYS5mb3JtQ29udHJvbH19IHt7c2NoZW1hLm1sMX19IGMtcmFuZ2UtdG9cIlxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZENvbnRyb2xzXCJcbiAgICAoY2hhbmdlKT1cInNldFNlY29uZGFyeVZhbHVlKCRldmVudClcIj5cblxuICAgIEBmb3IgKGl0ZW0gb2Ygc2Vjb25kYXJ5T3B0aW9uczsgdHJhY2sgaXRlbSkge1xuICAgICAgPG9wdGlvblxuICAgICAgICBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgIFtzZWxlY3RlZF09XCJzZWNvbmRhcnlWYWx1ZSA9PT0gaXRlbS52YWx1ZVwiPlxuICAgICAgICB7e2l0ZW0ubGFiZWx9fVxuICAgICAgPC9vcHRpb24+XG4gICAgfVxuICA8L3NlbGVjdD5cbjwvZGl2PlxuIl19