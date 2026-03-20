import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Mode } from '@sbzen/cron-core';
import * as i0 from "@angular/core";
export class QuartzCronIncrementComponent {
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
        this.mode = Mode.INCREMENT;
    }
    setPrimaryValue(e) {
        const el = e.target;
        this.primaryValueChanged.emit(el.value);
    }
    setSecondaryValue(e) {
        const el = e.target;
        this.secondaryValueChanged.emit(el.value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronIncrementComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: QuartzCronIncrementComponent, isStandalone: false, selector: "quartz-cron-increment", inputs: { segmentId: "segmentId", checked: "checked", disabled: "disabled", disabledControls: "disabledControls", label: "label", label2: "label2", primaryValue: "primaryValue", primaryOptions: "primaryOptions", secondaryValue: "secondaryValue", secondaryOptions: "secondaryOptions", schema: "schema" }, outputs: { selected: "selected", primaryValueChanged: "primaryValueChanged", secondaryValueChanged: "secondaryValueChanged" }, ngImport: i0, template: "<div class=\"{{schema.formGroup}} {{schema.formInline}} c-increment c-segment\">\n  <div class=\"{{schema.check.root}} c-increment-check\">\n    <input\n      class=\"{{schema.check.field}} c-increment-option\"\n      type=\"radio\"\n      [attr.id]=\"segmentId\"\n      [value]=\"mode\"\n      [checked]=\"checked\"\n      [disabled]=\"disabled\"\n      (change)=\"selected.emit()\">\n\n    <label\n      class=\"{{schema.check.label}} c-increment-option-label\"\n      [attr.for]=\"segmentId\">\n      {{label}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-every\"\n    [disabled]=\"disabledControls\"\n    (change)=\"setPrimaryValue($event)\">\n\n    @for (item of primaryOptions; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"primaryValue === item.value\">\n        {{item.value}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-increment-option-label2\"\n    [attr.for]=\"segmentId\">\n    {{label2}}\n  </label>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.ml1}} c-increment-from\"\n    [disabled]=\"disabledControls\"\n    (change)=\"setSecondaryValue($event)\">\n\n    @for (item of secondaryOptions; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"secondaryValue === item.value\">\n        {{item.label}}\n      </option>\n    }\n  </select>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronIncrementComponent, decorators: [{
            type: Component,
            args: [{ selector: 'quartz-cron-increment', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<div class=\"{{schema.formGroup}} {{schema.formInline}} c-increment c-segment\">\n  <div class=\"{{schema.check.root}} c-increment-check\">\n    <input\n      class=\"{{schema.check.field}} c-increment-option\"\n      type=\"radio\"\n      [attr.id]=\"segmentId\"\n      [value]=\"mode\"\n      [checked]=\"checked\"\n      [disabled]=\"disabled\"\n      (change)=\"selected.emit()\">\n\n    <label\n      class=\"{{schema.check.label}} c-increment-option-label\"\n      [attr.for]=\"segmentId\">\n      {{label}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-every\"\n    [disabled]=\"disabledControls\"\n    (change)=\"setPrimaryValue($event)\">\n\n    @for (item of primaryOptions; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"primaryValue === item.value\">\n        {{item.value}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-increment-option-label2\"\n    [attr.for]=\"segmentId\">\n    {{label2}}\n  </label>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.ml1}} c-increment-from\"\n    [disabled]=\"disabledControls\"\n    (change)=\"setSecondaryValue($event)\">\n\n    @for (item of secondaryOptions; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"secondaryValue === item.value\">\n        {{item.label}}\n      </option>\n    }\n  </select>\n</div>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jcmVtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNyb24vc3JjL2xpYi9xdWFydHovdGFicy9zaGFyZWQvaW5jcmVtZW50L2luY3JlbWVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jcm9uL3NyYy9saWIvcXVhcnR6L3RhYnMvc2hhcmVkL2luY3JlbWVudC9pbmNyZW1lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFVeEMsTUFBTSxPQUFPLDRCQUE0QjtJQU56QztRQU9xQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNwQyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2pELDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDN0QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixtQkFBYyxHQUdqQixFQUFFLENBQUM7UUFDQSxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixxQkFBZ0IsR0FHbkIsRUFBRSxDQUFDO1FBRUEsU0FBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7S0FXaEM7SUFUQyxlQUFlLENBQUMsQ0FBUTtRQUN0QixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBMkIsQ0FBQztRQUN6QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsQ0FBUTtRQUN4QixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBMkIsQ0FBQztRQUN6QyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOytHQS9CVSw0QkFBNEI7bUdBQTVCLDRCQUE0QixpZ0JDWnpDLDA0Q0FvREE7OzRGRHhDYSw0QkFBNEI7a0JBTnhDLFNBQVM7K0JBQ0ksdUJBQXVCLG1CQUVoQix1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DLEtBQUs7OEJBR0EsUUFBUTtzQkFBMUIsTUFBTTtnQkFDWSxtQkFBbUI7c0JBQXJDLE1BQU07Z0JBQ1kscUJBQXFCO3NCQUF2QyxNQUFNO2dCQUNFLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUlHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUlHLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnQHNiemVuL2Nyb24tY29yZSc7XG5cbmltcG9ydCB7IENyb25DbGFzc2VzU2NoZW1hIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9zdHlsZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3F1YXJ0ei1jcm9uLWluY3JlbWVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2luY3JlbWVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBzdGFuZGFsb25lOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBRdWFydHpDcm9uSW5jcmVtZW50Q29tcG9uZW50IHtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcHJpbWFyeVZhbHVlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2Vjb25kYXJ5VmFsdWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBJbnB1dCgpIHNlZ21lbnRJZCA9ICcnO1xuICBASW5wdXQoKSBjaGVja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkQ29udHJvbHMgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWwgPSAnJztcbiAgQElucHV0KCkgbGFiZWwyID0gJyc7XG4gIEBJbnB1dCgpIHByaW1hcnlWYWx1ZSA9ICcnO1xuICBASW5wdXQoKSBwcmltYXJ5T3B0aW9uczoge1xuICAgIGxhYmVsOiBzdHJpbmd8bnVtYmVyLFxuICAgIHZhbHVlOiBzdHJpbmdcbiAgfVtdID0gW107XG4gIEBJbnB1dCgpIHNlY29uZGFyeVZhbHVlID0gJyc7XG4gIEBJbnB1dCgpIHNlY29uZGFyeU9wdGlvbnM6IHtcbiAgICBsYWJlbDogc3RyaW5nfG51bWJlcixcbiAgICB2YWx1ZTogc3RyaW5nXG4gIH1bXSA9IFtdO1xuICBASW5wdXQoKSBzY2hlbWEhOiBDcm9uQ2xhc3Nlc1NjaGVtYTtcbiAgcmVhZG9ubHkgbW9kZSA9IE1vZGUuSU5DUkVNRU5UO1xuXG4gIHNldFByaW1hcnlWYWx1ZShlOiBFdmVudCkge1xuICAgIGNvbnN0IGVsID0gZS50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgdGhpcy5wcmltYXJ5VmFsdWVDaGFuZ2VkLmVtaXQoZWwudmFsdWUpO1xuICB9XG5cbiAgc2V0U2Vjb25kYXJ5VmFsdWUoZTogRXZlbnQpIHtcbiAgICBjb25zdCBlbCA9IGUudGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHRoaXMuc2Vjb25kYXJ5VmFsdWVDaGFuZ2VkLmVtaXQoZWwudmFsdWUpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwie3tzY2hlbWEuZm9ybUdyb3VwfX0ge3tzY2hlbWEuZm9ybUlubGluZX19IGMtaW5jcmVtZW50IGMtc2VnbWVudFwiPlxuICA8ZGl2IGNsYXNzPVwie3tzY2hlbWEuY2hlY2sucm9vdH19IGMtaW5jcmVtZW50LWNoZWNrXCI+XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cInt7c2NoZW1hLmNoZWNrLmZpZWxkfX0gYy1pbmNyZW1lbnQtb3B0aW9uXCJcbiAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICBbYXR0ci5pZF09XCJzZWdtZW50SWRcIlxuICAgICAgW3ZhbHVlXT1cIm1vZGVcIlxuICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgKGNoYW5nZSk9XCJzZWxlY3RlZC5lbWl0KClcIj5cblxuICAgIDxsYWJlbFxuICAgICAgY2xhc3M9XCJ7e3NjaGVtYS5jaGVjay5sYWJlbH19IGMtaW5jcmVtZW50LW9wdGlvbi1sYWJlbFwiXG4gICAgICBbYXR0ci5mb3JdPVwic2VnbWVudElkXCI+XG4gICAgICB7e2xhYmVsfX1cbiAgICA8L2xhYmVsPlxuICA8L2Rpdj5cblxuICA8c2VsZWN0XG4gICAgY2xhc3M9XCJ7e3NjaGVtYS5mb3JtQ29udHJvbH19IHt7c2NoZW1hLm14MX19IGMtaW5jcmVtZW50LWV2ZXJ5XCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRDb250cm9sc1wiXG4gICAgKGNoYW5nZSk9XCJzZXRQcmltYXJ5VmFsdWUoJGV2ZW50KVwiPlxuXG4gICAgQGZvciAoaXRlbSBvZiBwcmltYXJ5T3B0aW9uczsgdHJhY2sgaXRlbSkge1xuICAgICAgPG9wdGlvblxuICAgICAgICBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgIFtzZWxlY3RlZF09XCJwcmltYXJ5VmFsdWUgPT09IGl0ZW0udmFsdWVcIj5cbiAgICAgICAge3tpdGVtLnZhbHVlfX1cbiAgICAgIDwvb3B0aW9uPlxuICAgIH1cbiAgPC9zZWxlY3Q+XG5cbiAgPGxhYmVsXG4gICAgY2xhc3M9XCJjLWluY3JlbWVudC1vcHRpb24tbGFiZWwyXCJcbiAgICBbYXR0ci5mb3JdPVwic2VnbWVudElkXCI+XG4gICAge3tsYWJlbDJ9fVxuICA8L2xhYmVsPlxuXG4gIDxzZWxlY3RcbiAgICBjbGFzcz1cInt7c2NoZW1hLmZvcm1Db250cm9sfX0ge3tzY2hlbWEubWwxfX0gYy1pbmNyZW1lbnQtZnJvbVwiXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkQ29udHJvbHNcIlxuICAgIChjaGFuZ2UpPVwic2V0U2Vjb25kYXJ5VmFsdWUoJGV2ZW50KVwiPlxuXG4gICAgQGZvciAoaXRlbSBvZiBzZWNvbmRhcnlPcHRpb25zOyB0cmFjayBpdGVtKSB7XG4gICAgICA8b3B0aW9uXG4gICAgICAgIFt2YWx1ZV09XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgW3NlbGVjdGVkXT1cInNlY29uZGFyeVZhbHVlID09PSBpdGVtLnZhbHVlXCI+XG4gICAgICAgIHt7aXRlbS5sYWJlbH19XG4gICAgICA8L29wdGlvbj5cbiAgICB9XG4gIDwvc2VsZWN0PlxuPC9kaXY+XG4iXX0=