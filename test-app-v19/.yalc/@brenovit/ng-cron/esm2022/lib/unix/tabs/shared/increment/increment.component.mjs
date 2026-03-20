import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Mode } from '@sbzen/cron-core';
import * as i0 from "@angular/core";
export class UnixCronIncrementComponent {
    constructor() {
        this.selected = new EventEmitter();
        this.primaryValueChanged = new EventEmitter();
        this.segmentId = '';
        this.checked = false;
        this.disabled = false;
        this.disabledControls = false;
        this.label = '';
        this.label2 = '';
        this.primaryValue = '';
        this.primaryOptions = [];
        this.mode = Mode.INCREMENT;
    }
    setPrimaryValue(e) {
        const el = e.target;
        this.primaryValueChanged.emit(el.value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronIncrementComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: UnixCronIncrementComponent, isStandalone: false, selector: "unix-cron-increment", inputs: { segmentId: "segmentId", checked: "checked", disabled: "disabled", disabledControls: "disabledControls", label: "label", label2: "label2", primaryValue: "primaryValue", primaryOptions: "primaryOptions", schema: "schema" }, outputs: { selected: "selected", primaryValueChanged: "primaryValueChanged" }, ngImport: i0, template: "<div class=\"{{schema.formGroup}} {{schema.formInline}} c-increment c-segment\">\n  <div class=\"{{schema.check.root}} c-increment-check\">\n    <input\n      class=\"{{schema.check.field}} c-increment-option\"\n      type=\"radio\"\n      [attr.id]=\"segmentId\"\n      [value]=\"mode\"\n      [checked]=\"checked\"\n      [disabled]=\"disabled\"\n      (change)=\"selected.emit()\">\n\n    <label\n      class=\"{{schema.check.label}} c-increment-option-label\"\n      [attr.for]=\"segmentId\">\n      {{label}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-every\"\n    [disabled]=\"disabledControls\"\n    (change)=\"setPrimaryValue($event)\">\n\n    @for (item of primaryOptions; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"primaryValue === item.value\">\n        {{item.value}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-increment-option-label2\"\n    [attr.for]=\"segmentId\">\n    {{label2}}\n  </label>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronIncrementComponent, decorators: [{
            type: Component,
            args: [{ selector: 'unix-cron-increment', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<div class=\"{{schema.formGroup}} {{schema.formInline}} c-increment c-segment\">\n  <div class=\"{{schema.check.root}} c-increment-check\">\n    <input\n      class=\"{{schema.check.field}} c-increment-option\"\n      type=\"radio\"\n      [attr.id]=\"segmentId\"\n      [value]=\"mode\"\n      [checked]=\"checked\"\n      [disabled]=\"disabled\"\n      (change)=\"selected.emit()\">\n\n    <label\n      class=\"{{schema.check.label}} c-increment-option-label\"\n      [attr.for]=\"segmentId\">\n      {{label}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-every\"\n    [disabled]=\"disabledControls\"\n    (change)=\"setPrimaryValue($event)\">\n\n    @for (item of primaryOptions; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"primaryValue === item.value\">\n        {{item.value}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-increment-option-label2\"\n    [attr.for]=\"segmentId\">\n    {{label2}}\n  </label>\n</div>\n" }]
        }], propDecorators: { selected: [{
                type: Output
            }], primaryValueChanged: [{
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
            }], schema: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jcmVtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNyb24vc3JjL2xpYi91bml4L3RhYnMvc2hhcmVkL2luY3JlbWVudC9pbmNyZW1lbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY3Jvbi9zcmMvbGliL3VuaXgvdGFicy9zaGFyZWQvaW5jcmVtZW50L2luY3JlbWVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQVV4QyxNQUFNLE9BQU8sMEJBQTBCO0lBTnZDO1FBT3FCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3BDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDM0QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixtQkFBYyxHQUdqQixFQUFFLENBQUM7UUFFQSxTQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztLQU1oQztJQUpDLGVBQWUsQ0FBQyxDQUFRO1FBQ3RCLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUEyQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7K0dBcEJVLDBCQUEwQjttR0FBMUIsMEJBQTBCLHVZQ1p2Qyw2Z0NBc0NBOzs0RkQxQmEsMEJBQTBCO2tCQU50QyxTQUFTOytCQUNJLHFCQUFxQixtQkFFZCx1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DLEtBQUs7OEJBR0EsUUFBUTtzQkFBMUIsTUFBTTtnQkFDWSxtQkFBbUI7c0JBQXJDLE1BQU07Z0JBQ0UsU0FBUztzQkFBakIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBSUcsTUFBTTtzQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vZGUgfSBmcm9tICdAc2J6ZW4vY3Jvbi1jb3JlJztcblxuaW1wb3J0IHsgQ3JvbkNsYXNzZXNTY2hlbWEgfSBmcm9tICcuLy4uLy4uLy4uLy4uL3N0eWxlcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndW5peC1jcm9uLWluY3JlbWVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2luY3JlbWVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBzdGFuZGFsb25lOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBVbml4Q3JvbkluY3JlbWVudENvbXBvbmVudCB7XG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHByaW1hcnlWYWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQElucHV0KCkgc2VnbWVudElkID0gJyc7XG4gIEBJbnB1dCgpIGNoZWNrZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWRDb250cm9scyA9IGZhbHNlO1xuICBASW5wdXQoKSBsYWJlbCA9ICcnO1xuICBASW5wdXQoKSBsYWJlbDIgPSAnJztcbiAgQElucHV0KCkgcHJpbWFyeVZhbHVlID0gJyc7XG4gIEBJbnB1dCgpIHByaW1hcnlPcHRpb25zOiB7XG4gICAgbGFiZWw6IHN0cmluZ3xudW1iZXIsXG4gICAgdmFsdWU6IHN0cmluZ1xuICB9W10gPSBbXTtcbiAgQElucHV0KCkgc2NoZW1hITogQ3JvbkNsYXNzZXNTY2hlbWE7XG4gIHJlYWRvbmx5IG1vZGUgPSBNb2RlLklOQ1JFTUVOVDtcblxuICBzZXRQcmltYXJ5VmFsdWUoZTogRXZlbnQpIHtcbiAgICBjb25zdCBlbCA9IGUudGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHRoaXMucHJpbWFyeVZhbHVlQ2hhbmdlZC5lbWl0KGVsLnZhbHVlKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInt7c2NoZW1hLmZvcm1Hcm91cH19IHt7c2NoZW1hLmZvcm1JbmxpbmV9fSBjLWluY3JlbWVudCBjLXNlZ21lbnRcIj5cbiAgPGRpdiBjbGFzcz1cInt7c2NoZW1hLmNoZWNrLnJvb3R9fSBjLWluY3JlbWVudC1jaGVja1wiPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJ7e3NjaGVtYS5jaGVjay5maWVsZH19IGMtaW5jcmVtZW50LW9wdGlvblwiXG4gICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgW2F0dHIuaWRdPVwic2VnbWVudElkXCJcbiAgICAgIFt2YWx1ZV09XCJtb2RlXCJcbiAgICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIChjaGFuZ2UpPVwic2VsZWN0ZWQuZW1pdCgpXCI+XG5cbiAgICA8bGFiZWxcbiAgICAgIGNsYXNzPVwie3tzY2hlbWEuY2hlY2subGFiZWx9fSBjLWluY3JlbWVudC1vcHRpb24tbGFiZWxcIlxuICAgICAgW2F0dHIuZm9yXT1cInNlZ21lbnRJZFwiPlxuICAgICAge3tsYWJlbH19XG4gICAgPC9sYWJlbD5cbiAgPC9kaXY+XG5cbiAgPHNlbGVjdFxuICAgIGNsYXNzPVwie3tzY2hlbWEuZm9ybUNvbnRyb2x9fSB7e3NjaGVtYS5teDF9fSBjLWluY3JlbWVudC1ldmVyeVwiXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkQ29udHJvbHNcIlxuICAgIChjaGFuZ2UpPVwic2V0UHJpbWFyeVZhbHVlKCRldmVudClcIj5cblxuICAgIEBmb3IgKGl0ZW0gb2YgcHJpbWFyeU9wdGlvbnM7IHRyYWNrIGl0ZW0pIHtcbiAgICAgIDxvcHRpb25cbiAgICAgICAgW3ZhbHVlXT1cIml0ZW0udmFsdWVcIlxuICAgICAgICBbc2VsZWN0ZWRdPVwicHJpbWFyeVZhbHVlID09PSBpdGVtLnZhbHVlXCI+XG4gICAgICAgIHt7aXRlbS52YWx1ZX19XG4gICAgICA8L29wdGlvbj5cbiAgICB9XG4gIDwvc2VsZWN0PlxuXG4gIDxsYWJlbFxuICAgIGNsYXNzPVwiYy1pbmNyZW1lbnQtb3B0aW9uLWxhYmVsMlwiXG4gICAgW2F0dHIuZm9yXT1cInNlZ21lbnRJZFwiPlxuICAgIHt7bGFiZWwyfX1cbiAgPC9sYWJlbD5cbjwvZGl2PlxuIl19