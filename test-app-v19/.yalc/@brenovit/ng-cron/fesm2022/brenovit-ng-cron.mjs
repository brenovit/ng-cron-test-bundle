import * as i1$1 from '@sbzen/cron-core';
import { Type, Mode, Segment, getList, getMonthCodes, getDaysOfWeekCodes, CronQuartzUIService, CronUnixUIService } from '@sbzen/cron-core';
export { Type as Tab } from '@sbzen/cron-core';
import * as i0 from '@angular/core';
import { EventEmitter, ElementRef, Component, ChangeDetectionStrategy, ContentChild, ViewChildren, Output, Input, NgModule, Directive, ViewChild, forwardRef } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class CronContainerComponent {
    constructor(cd) {
        this.cd = cd;
        this.tabEls = null;
        this.tabChanged = new EventEmitter();
        this.hostClass = '';
        this.activeTab = Type.MINUTES;
        this.tabs = [];
        this.hideTabs = false;
        this.tabsLocalizationKeys = {
            [Type.DAY]: 'day',
            [Type.HOURS]: 'hours',
            [Type.MINUTES]: 'minutes',
            [Type.MONTH]: 'month',
            [Type.SECONDS]: 'seconds',
            [Type.YEAR]: 'year'
        };
    }
    navigateTab(code, tab) {
        if (!this.tabEls || code !== 'ArrowRight' && code !== 'ArrowLeft') {
            return;
        }
        const tabEls = this.tabEls.toArray().map(er => er.nativeElement);
        const tabs = this.tabs;
        const pos = tabs.indexOf(tab);
        let toPos = 0;
        if (code === 'ArrowRight') {
            const nextPos = pos + 1;
            toPos = (nextPos === tabs.length) ? 0 : nextPos;
        }
        if (code === 'ArrowLeft') {
            const prevPos = pos - 1;
            toPos = (prevPos < 0) ? tabs.length - 1 : prevPos;
        }
        this.setTab(tabs[toPos]);
        const tabEl = tabEls[toPos];
        if (tabEl) {
            tabEl.focus();
            this.cd.detectChanges();
        }
    }
    setTab(tab) {
        this.activeTab = tab;
        this.cd.detectChanges();
        this.tabChanged.emit(tab);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronContainerComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: CronContainerComponent, isStandalone: false, selector: "cron-container", inputs: { localization: "localization", hostClass: "hostClass", activeTab: "activeTab", tabs: "tabs", hideTabs: "hideTabs", schema: "schema" }, outputs: { tabChanged: "tabChanged" }, queries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], viewQueries: [{ propertyName: "tabEls", predicate: ["tabEl"], descendants: true, read: ElementRef }], ngImport: i0, template: "<div class=\"c-host {{hostClass}}\">\n  @if (!hideTabs && tabs.length) {\n    <ul\n      class=\"{{schema.tabs.root}} c-tabs\"\n      role=\"tablist\"\n      aria-label=\"Cron Generator Tabs\">\n\n      @for (item of tabs; track item) {\n        <li\n          class=\"{{schema.tabs.item}} c-tab-item\"\n          role=\"presentation\">\n\n          <button\n            role=\"tab\"\n            #tabEl\n            type=\"button\"\n            class=\"{{schema.tabs.link}} {{ activeTab === item ? schema.tabs.active : '' }} {{item}} c-tab\"\n            [attr.aria-selected]=\"activeTab === item\"\n            [attr.tabindex]=\"activeTab === item ? 0 : -1\"\n            (click)=\"setTab(item)\"\n            (keyup)=\"navigateTab($event.code, activeTab)\">\n\n            {{localization.tabs[tabsLocalizationKeys[item]]}}\n          </button>\n        </li>\n      }\n    </ul>\n  }\n\n  <div\n    class=\"c-tab-content\"\n    role=\"tabpanel\"\n    tabindex=\"0\"\n    [attr.tab-name]=\"activeTab\">\n\n    <ng-container *ngTemplateOutlet=\"content; context: { $implicit: activeTab }\"></ng-container>\n  </div>\n</div>\n", styles: [".c-tab-content{outline:none}\n"], dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cron-container', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<div class=\"c-host {{hostClass}}\">\n  @if (!hideTabs && tabs.length) {\n    <ul\n      class=\"{{schema.tabs.root}} c-tabs\"\n      role=\"tablist\"\n      aria-label=\"Cron Generator Tabs\">\n\n      @for (item of tabs; track item) {\n        <li\n          class=\"{{schema.tabs.item}} c-tab-item\"\n          role=\"presentation\">\n\n          <button\n            role=\"tab\"\n            #tabEl\n            type=\"button\"\n            class=\"{{schema.tabs.link}} {{ activeTab === item ? schema.tabs.active : '' }} {{item}} c-tab\"\n            [attr.aria-selected]=\"activeTab === item\"\n            [attr.tabindex]=\"activeTab === item ? 0 : -1\"\n            (click)=\"setTab(item)\"\n            (keyup)=\"navigateTab($event.code, activeTab)\">\n\n            {{localization.tabs[tabsLocalizationKeys[item]]}}\n          </button>\n        </li>\n      }\n    </ul>\n  }\n\n  <div\n    class=\"c-tab-content\"\n    role=\"tabpanel\"\n    tabindex=\"0\"\n    [attr.tab-name]=\"activeTab\">\n\n    <ng-container *ngTemplateOutlet=\"content; context: { $implicit: activeTab }\"></ng-container>\n  </div>\n</div>\n", styles: [".c-tab-content{outline:none}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { content: [{
                type: ContentChild,
                args: ['content']
            }], tabEls: [{
                type: ViewChildren,
                args: ['tabEl', { read: ElementRef }]
            }], tabChanged: [{
                type: Output
            }], localization: [{
                type: Input
            }], hostClass: [{
                type: Input
            }], activeTab: [{
                type: Input
            }], tabs: [{
                type: Input
            }], hideTabs: [{
                type: Input
            }], schema: [{
                type: Input
            }] } });

class CronContainerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronContainerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: CronContainerModule, declarations: [CronContainerComponent], imports: [CommonModule], exports: [CronContainerComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronContainerModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronContainerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [CronContainerComponent],
                    exports: [CronContainerComponent]
                }]
        }] });

class CronAndComponent {
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

class CronAndModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronAndModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: CronAndModule, declarations: [CronAndComponent], imports: [CommonModule], exports: [CronAndComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronAndModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronAndModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [CronAndComponent],
                    exports: [CronAndComponent]
                }]
        }] });

class CronEveryComponent {
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

class CronEveryModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronEveryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: CronEveryModule, declarations: [CronEveryComponent], imports: [CommonModule], exports: [CronEveryComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronEveryModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronEveryModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [CronEveryComponent],
                    exports: [CronEveryComponent]
                }]
        }] });

class CronRangeComponent {
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

class CronRangeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronRangeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: CronRangeModule, declarations: [CronRangeComponent], imports: [CommonModule], exports: [CronRangeComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronRangeModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronRangeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [CronRangeComponent],
                    exports: [CronRangeComponent]
                }]
        }] });

class CronTabComponent {
    constructor() {
        this.changed = new EventEmitter();
        this.sessionId = Date.now().toString();
        this.unListener = null;
        this.mode = Mode;
    }
    ngOnInit() {
        this.unListener = this.cronUI.listen(this.segments, () => {
            this.cd.detectChanges();
            this.applyChanges();
        });
    }
    ngOnDestroy() {
        if (this.unListener) {
            this.unListener();
        }
    }
    genId(mode, extra) {
        return `${mode}-${extra || ''}${this.sessionId}`;
    }
    localizeList(list, localizationStore) {
        return list.map(v => ({
            ...v,
            label: this.localizeLabel(v.label, localizationStore)
        }));
    }
    localizeLabel(label, localizationStore) {
        return localizationStore[label.toLowerCase()];
    }
    applyChanges() {
        this.changed.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronTabComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.20", type: CronTabComponent, isStandalone: true, inputs: { localization: "localization", schema: "schema" }, outputs: { changed: "changed" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronTabComponent, decorators: [{
            type: Directive
        }], propDecorators: { changed: [{
                type: Output
            }], localization: [{
                type: Input
            }], schema: [{
                type: Input
            }] } });

class CronTabSingleSegmentComponent extends CronTabComponent {
    constructor(tab) {
        super();
        this.and = null;
        this.segments = this.getSegments(tab);
    }
    applyChanges() {
        if (this.and) {
            this.and.detectChanges();
        }
        super.applyChanges();
    }
    getSegments(tab) {
        const segment = new Map([
            [Type.HOURS, Segment.hours],
            [Type.MINUTES, Segment.minutes],
            [Type.MONTH, Segment.month],
            [Type.SECONDS, Segment.seconds],
            [Type.YEAR, Segment.year]
        ]).get(tab);
        if (!segment) {
            throw `No segments for tab: ${tab}`;
        }
        return [segment];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronTabSingleSegmentComponent, deps: "invalid", target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.20", type: CronTabSingleSegmentComponent, isStandalone: true, viewQueries: [{ propertyName: "and", first: true, predicate: CronAndComponent, descendants: true, static: true }], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronTabSingleSegmentComponent, decorators: [{
            type: Directive
        }], ctorParameters: () => [{ type: undefined }], propDecorators: { and: [{
                type: ViewChild,
                args: [CronAndComponent, { static: true }]
            }] } });

class QuartzCronIncrementComponent {
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

class QuartzCronMinuteComponent extends CronTabSingleSegmentComponent {
    constructor(cronUI, cd) {
        super(Type.MINUTES);
        this.cronUI = cronUI;
        this.cd = cd;
        this.minuteCodes = getList(Segment.minutes, true);
        this.minutes = getList(Segment.minutes);
        this.api = this.cronUI.getApi(Type.MINUTES);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronMinuteComponent, deps: [{ token: i1$1.CronQuartzUIService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.20", type: QuartzCronMinuteComponent, isStandalone: false, selector: "quartz-cron-minute", usesInheritance: true, ngImport: i0, template: "<cron-every\n  [label]=\"localization.quartz.minute.every.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isEverySelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.EVERY)\"\n  (selected)=\"api.selectEvery()\">\n</cron-every>\n\n<quartz-cron-increment\n  [label]=\"localization.quartz.minute.increment.label1\"\n  [label2]=\"localization.quartz.minute.increment.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isIncrementSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.INCREMENT)\"\n  [disabledControls]=\"api.isIncrementControlsDisabled()\"\n  [primaryOptions]=\"minuteCodes\"\n  [secondaryOptions]=\"minutes\"\n  [primaryValue]=\"api.getIncrementPrimaryValue()\"\n  [secondaryValue]=\"api.getIncrementSecondaryValue()\"\n  (selected)=\"api.selectIncrement()\"\n  (primaryValueChanged)=\"api.setIncrementPrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setIncrementSecondaryValue($event)\">\n</quartz-cron-increment>\n\n<cron-and\n  [label]=\"localization.quartz.minute.and.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isAndSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.AND)\"\n  [options]=\"minutes\"\n  [disabledControls]=\"api.isAndControlsDisabled()\"\n  [isValueSelected]=\"api.isSelectedAndValue\"\n  [selectValue]=\"api.selectAndValue\"\n  (selected)=\"api.selectAnd()\">\n</cron-and>\n\n<cron-range\n  [label]=\"localization.quartz.minute.range.label1\"\n  [label2]=\"localization.quartz.minute.range.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isRangeControlsDisabled()\"\n  [primaryOptions]=\"minutes\"\n  [secondaryOptions]=\"minutes\"\n  [primaryValue]=\"api.getRangePrimaryValue()\"\n  [secondaryValue]=\"api.getRangeSecondaryValue()\"\n  (selected)=\"api.selectRange()\"\n  (primaryValueChanged)=\"api.setRangePrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setRangeSecondaryValue($event)\">\n</cron-range>\n", dependencies: [{ kind: "component", type: CronEveryComponent, selector: "cron-every", inputs: ["checked", "disabled", "label", "segmentId", "schema"], outputs: ["selected"] }, { kind: "component", type: CronRangeComponent, selector: "cron-range", inputs: ["segmentId", "checked", "disabled", "disabledControls", "label", "label2", "primaryValue", "primaryOptions", "secondaryValue", "secondaryOptions", "schema"], outputs: ["selected", "primaryValueChanged", "secondaryValueChanged"] }, { kind: "component", type: CronAndComponent, selector: "cron-and", inputs: ["checked", "disabled", "disabledControls", "gridSize", "label", "segmentId", "options", "isValueSelected", "selectValue", "schema"], outputs: ["selected"] }, { kind: "component", type: QuartzCronIncrementComponent, selector: "quartz-cron-increment", inputs: ["segmentId", "checked", "disabled", "disabledControls", "label", "label2", "primaryValue", "primaryOptions", "secondaryValue", "secondaryOptions", "schema"], outputs: ["selected", "primaryValueChanged", "secondaryValueChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronMinuteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'quartz-cron-minute', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<cron-every\n  [label]=\"localization.quartz.minute.every.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isEverySelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.EVERY)\"\n  (selected)=\"api.selectEvery()\">\n</cron-every>\n\n<quartz-cron-increment\n  [label]=\"localization.quartz.minute.increment.label1\"\n  [label2]=\"localization.quartz.minute.increment.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isIncrementSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.INCREMENT)\"\n  [disabledControls]=\"api.isIncrementControlsDisabled()\"\n  [primaryOptions]=\"minuteCodes\"\n  [secondaryOptions]=\"minutes\"\n  [primaryValue]=\"api.getIncrementPrimaryValue()\"\n  [secondaryValue]=\"api.getIncrementSecondaryValue()\"\n  (selected)=\"api.selectIncrement()\"\n  (primaryValueChanged)=\"api.setIncrementPrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setIncrementSecondaryValue($event)\">\n</quartz-cron-increment>\n\n<cron-and\n  [label]=\"localization.quartz.minute.and.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isAndSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.AND)\"\n  [options]=\"minutes\"\n  [disabledControls]=\"api.isAndControlsDisabled()\"\n  [isValueSelected]=\"api.isSelectedAndValue\"\n  [selectValue]=\"api.selectAndValue\"\n  (selected)=\"api.selectAnd()\">\n</cron-and>\n\n<cron-range\n  [label]=\"localization.quartz.minute.range.label1\"\n  [label2]=\"localization.quartz.minute.range.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isRangeControlsDisabled()\"\n  [primaryOptions]=\"minutes\"\n  [secondaryOptions]=\"minutes\"\n  [primaryValue]=\"api.getRangePrimaryValue()\"\n  [secondaryValue]=\"api.getRangeSecondaryValue()\"\n  (selected)=\"api.selectRange()\"\n  (primaryValueChanged)=\"api.setRangePrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setRangeSecondaryValue($event)\">\n</cron-range>\n" }]
        }], ctorParameters: () => [{ type: i1$1.CronQuartzUIService }, { type: i0.ChangeDetectorRef }] });

class QuartzCronIncrementModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronIncrementModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronIncrementModule, declarations: [QuartzCronIncrementComponent], imports: [CommonModule], exports: [QuartzCronIncrementComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronIncrementModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronIncrementModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [QuartzCronIncrementComponent],
                    exports: [QuartzCronIncrementComponent]
                }]
        }] });

class QuartzCronMinuteModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronMinuteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronMinuteModule, declarations: [QuartzCronMinuteComponent], imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            QuartzCronIncrementModule], exports: [QuartzCronMinuteComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronMinuteModule, imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            QuartzCronIncrementModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronMinuteModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        CronEveryModule,
                        CronRangeModule,
                        CronAndModule,
                        QuartzCronIncrementModule
                    ],
                    declarations: [QuartzCronMinuteComponent],
                    exports: [QuartzCronMinuteComponent]
                }]
        }] });

class QuartzCronMonthComponent extends CronTabSingleSegmentComponent {
    constructor(cronUI, cd) {
        super(Type.MONTH);
        this.cronUI = cronUI;
        this.cd = cd;
        this.monthCodes = getMonthCodes();
        this.monthes = getList(Segment.month);
        this.incrementPrimaryOptions = this.monthes.map((v, i) => ({
            ...v,
            label: i + 1
        }));
        this.api = this.cronUI.getApi(Type.MONTH);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronMonthComponent, deps: [{ token: i1$1.CronQuartzUIService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.20", type: QuartzCronMonthComponent, isStandalone: false, selector: "quartz-cron-month", usesInheritance: true, ngImport: i0, template: "<cron-every\n  [label]=\"localization.quartz.month.every.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isEverySelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.EVERY)\"\n  (selected)=\"api.selectEvery()\">\n</cron-every>\n\n<quartz-cron-increment\n  [label]=\"localization.quartz.month.increment.label1\"\n  [label2]=\"localization.quartz.month.increment.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isIncrementSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.INCREMENT)\"\n  [disabledControls]=\"api.isIncrementControlsDisabled()\"\n  [primaryOptions]=\"incrementPrimaryOptions\"\n  [secondaryOptions]=\"localizeList(monthes, localization.common.month)\"\n  [primaryValue]=\"api.getIncrementPrimaryValue()\"\n  [secondaryValue]=\"api.getIncrementSecondaryValue()\"\n  (selected)=\"api.selectIncrement()\"\n  (primaryValueChanged)=\"api.setIncrementPrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setIncrementSecondaryValue($event)\">\n</quartz-cron-increment>\n\n<cron-and\n  gridSize=\"{{schema.col3}} {{schema.colMd2}}\"\n  [label]=\"localization.quartz.month.and.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isAndSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.AND)\"\n  [options]=\"localizeList(monthCodes, localization.common.month)\"\n  [disabledControls]=\"api.isAndControlsDisabled()\"\n  [isValueSelected]=\"api.isSelectedAndValue\"\n  [selectValue]=\"api.selectAndValue\"\n  (selected)=\"api.selectAnd()\">\n</cron-and>\n\n<cron-range\n  [label]=\"localization.quartz.month.range.label1\"\n  [label2]=\"localization.quartz.month.range.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isRangeControlsDisabled()\"\n  [primaryOptions]=\"localizeList(monthes, localization.common.month)\"\n  [secondaryOptions]=\"localizeList(monthes, localization.common.month)\"\n  [primaryValue]=\"api.getRangePrimaryValue()\"\n  [secondaryValue]=\"api.getRangeSecondaryValue()\"\n  (selected)=\"api.selectRange()\"\n  (primaryValueChanged)=\"api.setRangePrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setRangeSecondaryValue($event)\">\n</cron-range>\n", dependencies: [{ kind: "component", type: CronEveryComponent, selector: "cron-every", inputs: ["checked", "disabled", "label", "segmentId", "schema"], outputs: ["selected"] }, { kind: "component", type: CronRangeComponent, selector: "cron-range", inputs: ["segmentId", "checked", "disabled", "disabledControls", "label", "label2", "primaryValue", "primaryOptions", "secondaryValue", "secondaryOptions", "schema"], outputs: ["selected", "primaryValueChanged", "secondaryValueChanged"] }, { kind: "component", type: CronAndComponent, selector: "cron-and", inputs: ["checked", "disabled", "disabledControls", "gridSize", "label", "segmentId", "options", "isValueSelected", "selectValue", "schema"], outputs: ["selected"] }, { kind: "component", type: QuartzCronIncrementComponent, selector: "quartz-cron-increment", inputs: ["segmentId", "checked", "disabled", "disabledControls", "label", "label2", "primaryValue", "primaryOptions", "secondaryValue", "secondaryOptions", "schema"], outputs: ["selected", "primaryValueChanged", "secondaryValueChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronMonthComponent, decorators: [{
            type: Component,
            args: [{ selector: 'quartz-cron-month', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<cron-every\n  [label]=\"localization.quartz.month.every.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isEverySelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.EVERY)\"\n  (selected)=\"api.selectEvery()\">\n</cron-every>\n\n<quartz-cron-increment\n  [label]=\"localization.quartz.month.increment.label1\"\n  [label2]=\"localization.quartz.month.increment.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isIncrementSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.INCREMENT)\"\n  [disabledControls]=\"api.isIncrementControlsDisabled()\"\n  [primaryOptions]=\"incrementPrimaryOptions\"\n  [secondaryOptions]=\"localizeList(monthes, localization.common.month)\"\n  [primaryValue]=\"api.getIncrementPrimaryValue()\"\n  [secondaryValue]=\"api.getIncrementSecondaryValue()\"\n  (selected)=\"api.selectIncrement()\"\n  (primaryValueChanged)=\"api.setIncrementPrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setIncrementSecondaryValue($event)\">\n</quartz-cron-increment>\n\n<cron-and\n  gridSize=\"{{schema.col3}} {{schema.colMd2}}\"\n  [label]=\"localization.quartz.month.and.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isAndSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.AND)\"\n  [options]=\"localizeList(monthCodes, localization.common.month)\"\n  [disabledControls]=\"api.isAndControlsDisabled()\"\n  [isValueSelected]=\"api.isSelectedAndValue\"\n  [selectValue]=\"api.selectAndValue\"\n  (selected)=\"api.selectAnd()\">\n</cron-and>\n\n<cron-range\n  [label]=\"localization.quartz.month.range.label1\"\n  [label2]=\"localization.quartz.month.range.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isRangeControlsDisabled()\"\n  [primaryOptions]=\"localizeList(monthes, localization.common.month)\"\n  [secondaryOptions]=\"localizeList(monthes, localization.common.month)\"\n  [primaryValue]=\"api.getRangePrimaryValue()\"\n  [secondaryValue]=\"api.getRangeSecondaryValue()\"\n  (selected)=\"api.selectRange()\"\n  (primaryValueChanged)=\"api.setRangePrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setRangeSecondaryValue($event)\">\n</cron-range>\n" }]
        }], ctorParameters: () => [{ type: i1$1.CronQuartzUIService }, { type: i0.ChangeDetectorRef }] });

class QuartzCronMonthModule {
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

class QuartzCronHourComponent extends CronTabSingleSegmentComponent {
    constructor(cronUI, cd) {
        super(Type.HOURS);
        this.cronUI = cronUI;
        this.cd = cd;
        this.hourCodes = getList(Segment.hours, true);
        this.hours = getList(Segment.hours);
        this.api = this.cronUI.getApi(Type.HOURS);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronHourComponent, deps: [{ token: i1$1.CronQuartzUIService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.20", type: QuartzCronHourComponent, isStandalone: false, selector: "quartz-cron-hour", usesInheritance: true, ngImport: i0, template: "<cron-every\n  [label]=\"localization.quartz.hour.every.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isEverySelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.EVERY)\"\n  (selected)=\"api.selectEvery()\">\n</cron-every>\n\n<quartz-cron-increment\n  [label]=\"localization.quartz.hour.increment.label1\"\n  [label2]=\"localization.quartz.hour.increment.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isIncrementSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.INCREMENT)\"\n  [disabledControls]=\"api.isIncrementControlsDisabled()\"\n  [primaryOptions]=\"hourCodes\"\n  [secondaryOptions]=\"hours\"\n  [primaryValue]=\"api.getIncrementPrimaryValue()\"\n  [secondaryValue]=\"api.getIncrementSecondaryValue()\"\n  (selected)=\"api.selectIncrement()\"\n  (primaryValueChanged)=\"api.setIncrementPrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setIncrementSecondaryValue($event)\">\n</quartz-cron-increment>\n\n<cron-and\n  [label]=\"localization.quartz.hour.and.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isAndSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.AND)\"\n  [options]=\"hours\"\n  [disabledControls]=\"api.isAndControlsDisabled()\"\n  [isValueSelected]=\"api.isSelectedAndValue\"\n  [selectValue]=\"api.selectAndValue\"\n  (selected)=\"api.selectAnd()\">\n</cron-and>\n\n<cron-range\n  [label]=\"localization.quartz.hour.range.label1\"\n  [label2]=\"localization.quartz.hour.range.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isRangeControlsDisabled()\"\n  [primaryOptions]=\"hours\"\n  [secondaryOptions]=\"hours\"\n  [primaryValue]=\"api.getRangePrimaryValue()\"\n  [secondaryValue]=\"api.getRangeSecondaryValue()\"\n  (selected)=\"api.selectRange()\"\n  (primaryValueChanged)=\"api.setRangePrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setRangeSecondaryValue($event)\">\n</cron-range>\n", dependencies: [{ kind: "component", type: CronEveryComponent, selector: "cron-every", inputs: ["checked", "disabled", "label", "segmentId", "schema"], outputs: ["selected"] }, { kind: "component", type: CronRangeComponent, selector: "cron-range", inputs: ["segmentId", "checked", "disabled", "disabledControls", "label", "label2", "primaryValue", "primaryOptions", "secondaryValue", "secondaryOptions", "schema"], outputs: ["selected", "primaryValueChanged", "secondaryValueChanged"] }, { kind: "component", type: CronAndComponent, selector: "cron-and", inputs: ["checked", "disabled", "disabledControls", "gridSize", "label", "segmentId", "options", "isValueSelected", "selectValue", "schema"], outputs: ["selected"] }, { kind: "component", type: QuartzCronIncrementComponent, selector: "quartz-cron-increment", inputs: ["segmentId", "checked", "disabled", "disabledControls", "label", "label2", "primaryValue", "primaryOptions", "secondaryValue", "secondaryOptions", "schema"], outputs: ["selected", "primaryValueChanged", "secondaryValueChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronHourComponent, decorators: [{
            type: Component,
            args: [{ selector: 'quartz-cron-hour', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<cron-every\n  [label]=\"localization.quartz.hour.every.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isEverySelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.EVERY)\"\n  (selected)=\"api.selectEvery()\">\n</cron-every>\n\n<quartz-cron-increment\n  [label]=\"localization.quartz.hour.increment.label1\"\n  [label2]=\"localization.quartz.hour.increment.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isIncrementSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.INCREMENT)\"\n  [disabledControls]=\"api.isIncrementControlsDisabled()\"\n  [primaryOptions]=\"hourCodes\"\n  [secondaryOptions]=\"hours\"\n  [primaryValue]=\"api.getIncrementPrimaryValue()\"\n  [secondaryValue]=\"api.getIncrementSecondaryValue()\"\n  (selected)=\"api.selectIncrement()\"\n  (primaryValueChanged)=\"api.setIncrementPrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setIncrementSecondaryValue($event)\">\n</quartz-cron-increment>\n\n<cron-and\n  [label]=\"localization.quartz.hour.and.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isAndSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.AND)\"\n  [options]=\"hours\"\n  [disabledControls]=\"api.isAndControlsDisabled()\"\n  [isValueSelected]=\"api.isSelectedAndValue\"\n  [selectValue]=\"api.selectAndValue\"\n  (selected)=\"api.selectAnd()\">\n</cron-and>\n\n<cron-range\n  [label]=\"localization.quartz.hour.range.label1\"\n  [label2]=\"localization.quartz.hour.range.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isRangeControlsDisabled()\"\n  [primaryOptions]=\"hours\"\n  [secondaryOptions]=\"hours\"\n  [primaryValue]=\"api.getRangePrimaryValue()\"\n  [secondaryValue]=\"api.getRangeSecondaryValue()\"\n  (selected)=\"api.selectRange()\"\n  (primaryValueChanged)=\"api.setRangePrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setRangeSecondaryValue($event)\">\n</cron-range>\n" }]
        }], ctorParameters: () => [{ type: i1$1.CronQuartzUIService }, { type: i0.ChangeDetectorRef }] });

class QuartzCronHourModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronHourModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronHourModule, declarations: [QuartzCronHourComponent], imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            QuartzCronIncrementModule], exports: [QuartzCronHourComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronHourModule, imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            QuartzCronIncrementModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronHourModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        CronEveryModule,
                        CronRangeModule,
                        CronAndModule,
                        QuartzCronIncrementModule
                    ],
                    declarations: [QuartzCronHourComponent],
                    exports: [QuartzCronHourComponent]
                }]
        }] });

class QuartzCronSecondComponent extends CronTabSingleSegmentComponent {
    constructor(cronUI, cd) {
        super(Type.SECONDS);
        this.cronUI = cronUI;
        this.cd = cd;
        this.secondCodes = getList(Segment.seconds, true);
        this.seconds = getList(Segment.seconds);
        this.api = this.cronUI.getApi(Type.SECONDS);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronSecondComponent, deps: [{ token: i1$1.CronQuartzUIService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.20", type: QuartzCronSecondComponent, isStandalone: false, selector: "quartz-cron-second", usesInheritance: true, ngImport: i0, template: "<cron-every\n  [label]=\"localization.quartz.second.every.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isEverySelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.EVERY)\"\n  (selected)=\"api.selectEvery()\">\n</cron-every>\n\n<quartz-cron-increment\n  [label]=\"localization.quartz.second.increment.label1\"\n  [label2]=\"localization.quartz.second.increment.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isIncrementSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.INCREMENT)\"\n  [disabledControls]=\"api.isIncrementControlsDisabled()\"\n  [primaryOptions]=\"secondCodes\"\n  [secondaryOptions]=\"seconds\"\n  [primaryValue]=\"api.getIncrementPrimaryValue()\"\n  [secondaryValue]=\"api.getIncrementSecondaryValue()\"\n  (selected)=\"api.selectIncrement()\"\n  (primaryValueChanged)=\"api.setIncrementPrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setIncrementSecondaryValue($event)\">\n</quartz-cron-increment>\n\n<cron-and\n  [label]=\"localization.quartz.second.and.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isAndSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.AND)\"\n  [options]=\"seconds\"\n  [disabledControls]=\"api.isAndControlsDisabled()\"\n  [isValueSelected]=\"api.isSelectedAndValue\"\n  [selectValue]=\"api.selectAndValue\"\n  (selected)=\"api.selectAnd()\">\n</cron-and>\n\n<cron-range\n  [label]=\"localization.quartz.second.range.label1\"\n  [label2]=\"localization.quartz.second.range.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isRangeControlsDisabled()\"\n  [primaryOptions]=\"seconds\"\n  [secondaryOptions]=\"seconds\"\n  [primaryValue]=\"api.getRangePrimaryValue()\"\n  [secondaryValue]=\"api.getRangeSecondaryValue()\"\n  (selected)=\"api.selectRange()\"\n  (primaryValueChanged)=\"api.setRangePrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setRangeSecondaryValue($event)\">\n</cron-range>\n", dependencies: [{ kind: "component", type: CronEveryComponent, selector: "cron-every", inputs: ["checked", "disabled", "label", "segmentId", "schema"], outputs: ["selected"] }, { kind: "component", type: CronRangeComponent, selector: "cron-range", inputs: ["segmentId", "checked", "disabled", "disabledControls", "label", "label2", "primaryValue", "primaryOptions", "secondaryValue", "secondaryOptions", "schema"], outputs: ["selected", "primaryValueChanged", "secondaryValueChanged"] }, { kind: "component", type: CronAndComponent, selector: "cron-and", inputs: ["checked", "disabled", "disabledControls", "gridSize", "label", "segmentId", "options", "isValueSelected", "selectValue", "schema"], outputs: ["selected"] }, { kind: "component", type: QuartzCronIncrementComponent, selector: "quartz-cron-increment", inputs: ["segmentId", "checked", "disabled", "disabledControls", "label", "label2", "primaryValue", "primaryOptions", "secondaryValue", "secondaryOptions", "schema"], outputs: ["selected", "primaryValueChanged", "secondaryValueChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronSecondComponent, decorators: [{
            type: Component,
            args: [{ selector: 'quartz-cron-second', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<cron-every\n  [label]=\"localization.quartz.second.every.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isEverySelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.EVERY)\"\n  (selected)=\"api.selectEvery()\">\n</cron-every>\n\n<quartz-cron-increment\n  [label]=\"localization.quartz.second.increment.label1\"\n  [label2]=\"localization.quartz.second.increment.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isIncrementSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.INCREMENT)\"\n  [disabledControls]=\"api.isIncrementControlsDisabled()\"\n  [primaryOptions]=\"secondCodes\"\n  [secondaryOptions]=\"seconds\"\n  [primaryValue]=\"api.getIncrementPrimaryValue()\"\n  [secondaryValue]=\"api.getIncrementSecondaryValue()\"\n  (selected)=\"api.selectIncrement()\"\n  (primaryValueChanged)=\"api.setIncrementPrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setIncrementSecondaryValue($event)\">\n</quartz-cron-increment>\n\n<cron-and\n  [label]=\"localization.quartz.second.and.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isAndSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.AND)\"\n  [options]=\"seconds\"\n  [disabledControls]=\"api.isAndControlsDisabled()\"\n  [isValueSelected]=\"api.isSelectedAndValue\"\n  [selectValue]=\"api.selectAndValue\"\n  (selected)=\"api.selectAnd()\">\n</cron-and>\n\n<cron-range\n  [label]=\"localization.quartz.second.range.label1\"\n  [label2]=\"localization.quartz.second.range.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isRangeControlsDisabled()\"\n  [primaryOptions]=\"seconds\"\n  [secondaryOptions]=\"seconds\"\n  [primaryValue]=\"api.getRangePrimaryValue()\"\n  [secondaryValue]=\"api.getRangeSecondaryValue()\"\n  (selected)=\"api.selectRange()\"\n  (primaryValueChanged)=\"api.setRangePrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setRangeSecondaryValue($event)\">\n</cron-range>\n" }]
        }], ctorParameters: () => [{ type: i1$1.CronQuartzUIService }, { type: i0.ChangeDetectorRef }] });

class QuartzCronSecondModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronSecondModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronSecondModule, declarations: [QuartzCronSecondComponent], imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            QuartzCronIncrementModule], exports: [QuartzCronSecondComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronSecondModule, imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            QuartzCronIncrementModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronSecondModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        CronEveryModule,
                        CronRangeModule,
                        CronAndModule,
                        QuartzCronIncrementModule
                    ],
                    declarations: [QuartzCronSecondComponent],
                    exports: [QuartzCronSecondComponent]
                }]
        }] });

class QuartzCronYearComponent extends CronTabSingleSegmentComponent {
    constructor(cronUI, cd) {
        super(Type.YEAR);
        this.cronUI = cronUI;
        this.cd = cd;
        this.yearCodes = getList(Segment.year, true);
        this.years = getList(Segment.year);
        this.api = this.cronUI.getApi(Type.YEAR);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronYearComponent, deps: [{ token: i1$1.CronQuartzUIService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.20", type: QuartzCronYearComponent, isStandalone: false, selector: "quartz-cron-year", usesInheritance: true, ngImport: i0, template: "<cron-every\n  [label]=\"localization.quartz.year.every.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isEverySelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.EVERY)\"\n  (selected)=\"api.selectEvery()\">\n</cron-every>\n\n<quartz-cron-increment\n  [label]=\"localization.quartz.year.increment.label1\"\n  [label2]=\"localization.quartz.year.increment.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isIncrementSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.INCREMENT)\"\n  [disabledControls]=\"api.isIncrementControlsDisabled()\"\n  [primaryOptions]=\"yearCodes\"\n  [secondaryOptions]=\"years\"\n  [primaryValue]=\"api.getIncrementPrimaryValue()\"\n  [secondaryValue]=\"api.getIncrementSecondaryValue()\"\n  (selected)=\"api.selectIncrement()\"\n  (primaryValueChanged)=\"api.setIncrementPrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setIncrementSecondaryValue($event)\">\n</quartz-cron-increment>\n\n<cron-and\n  [label]=\"localization.quartz.year.and.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isAndSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.AND)\"\n  [options]=\"years\"\n  [disabledControls]=\"api.isAndControlsDisabled()\"\n  [isValueSelected]=\"api.isSelectedAndValue\"\n  [selectValue]=\"api.selectAndValue\"\n  (selected)=\"api.selectAnd()\">\n</cron-and>\n\n<cron-range\n  [label]=\"localization.quartz.year.range.label1\"\n  [label2]=\"localization.quartz.year.range.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isRangeControlsDisabled()\"\n  [primaryOptions]=\"years\"\n  [secondaryOptions]=\"years\"\n  [primaryValue]=\"api.getRangePrimaryValue()\"\n  [secondaryValue]=\"api.getRangeSecondaryValue()\"\n  (selected)=\"api.selectRange()\"\n  (primaryValueChanged)=\"api.setRangePrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setRangeSecondaryValue($event)\">\n</cron-range>\n", dependencies: [{ kind: "component", type: CronEveryComponent, selector: "cron-every", inputs: ["checked", "disabled", "label", "segmentId", "schema"], outputs: ["selected"] }, { kind: "component", type: CronRangeComponent, selector: "cron-range", inputs: ["segmentId", "checked", "disabled", "disabledControls", "label", "label2", "primaryValue", "primaryOptions", "secondaryValue", "secondaryOptions", "schema"], outputs: ["selected", "primaryValueChanged", "secondaryValueChanged"] }, { kind: "component", type: CronAndComponent, selector: "cron-and", inputs: ["checked", "disabled", "disabledControls", "gridSize", "label", "segmentId", "options", "isValueSelected", "selectValue", "schema"], outputs: ["selected"] }, { kind: "component", type: QuartzCronIncrementComponent, selector: "quartz-cron-increment", inputs: ["segmentId", "checked", "disabled", "disabledControls", "label", "label2", "primaryValue", "primaryOptions", "secondaryValue", "secondaryOptions", "schema"], outputs: ["selected", "primaryValueChanged", "secondaryValueChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronYearComponent, decorators: [{
            type: Component,
            args: [{ selector: 'quartz-cron-year', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<cron-every\n  [label]=\"localization.quartz.year.every.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isEverySelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.EVERY)\"\n  (selected)=\"api.selectEvery()\">\n</cron-every>\n\n<quartz-cron-increment\n  [label]=\"localization.quartz.year.increment.label1\"\n  [label2]=\"localization.quartz.year.increment.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isIncrementSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.INCREMENT)\"\n  [disabledControls]=\"api.isIncrementControlsDisabled()\"\n  [primaryOptions]=\"yearCodes\"\n  [secondaryOptions]=\"years\"\n  [primaryValue]=\"api.getIncrementPrimaryValue()\"\n  [secondaryValue]=\"api.getIncrementSecondaryValue()\"\n  (selected)=\"api.selectIncrement()\"\n  (primaryValueChanged)=\"api.setIncrementPrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setIncrementSecondaryValue($event)\">\n</quartz-cron-increment>\n\n<cron-and\n  [label]=\"localization.quartz.year.and.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isAndSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.AND)\"\n  [options]=\"years\"\n  [disabledControls]=\"api.isAndControlsDisabled()\"\n  [isValueSelected]=\"api.isSelectedAndValue\"\n  [selectValue]=\"api.selectAndValue\"\n  (selected)=\"api.selectAnd()\">\n</cron-and>\n\n<cron-range\n  [label]=\"localization.quartz.year.range.label1\"\n  [label2]=\"localization.quartz.year.range.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isRangeControlsDisabled()\"\n  [primaryOptions]=\"years\"\n  [secondaryOptions]=\"years\"\n  [primaryValue]=\"api.getRangePrimaryValue()\"\n  [secondaryValue]=\"api.getRangeSecondaryValue()\"\n  (selected)=\"api.selectRange()\"\n  (primaryValueChanged)=\"api.setRangePrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setRangeSecondaryValue($event)\">\n</cron-range>\n" }]
        }], ctorParameters: () => [{ type: i1$1.CronQuartzUIService }, { type: i0.ChangeDetectorRef }] });

class QuartzCronYearModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronYearModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronYearModule, declarations: [QuartzCronYearComponent], imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            QuartzCronIncrementModule], exports: [QuartzCronYearComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronYearModule, imports: [CommonModule,
            CronEveryModule,
            CronRangeModule,
            CronAndModule,
            QuartzCronIncrementModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronYearModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        CronEveryModule,
                        CronRangeModule,
                        CronAndModule,
                        QuartzCronIncrementModule
                    ],
                    declarations: [QuartzCronYearComponent],
                    exports: [QuartzCronYearComponent]
                }]
        }] });

class QuartzCronDayComponent extends CronTabComponent {
    constructor(cronUI, cd) {
        super();
        this.cronUI = cronUI;
        this.cd = cd;
        this.api = this.cronUI.getApi(Type.DAY);
        this.segment = Segment;
        this.segments = [Segment.dayOfMonth, Segment.dayOfWeek];
        this.daysOfWeekEvery = getList(Segment.dayOfWeek, true);
        this.daysOfWeek = getList(Segment.dayOfWeek);
        this.daysOfWeekCodes = getDaysOfWeekCodes();
        this.daysOfMonthEvery = getList(Segment.dayOfMonth, true);
        this.daysOfMonth = getList(Segment.dayOfMonth);
        this.limitedDaysOfMonth = this.daysOfMonthEvery.slice(0, 5);
    }
    setDayOfWeekIncrementPrimary(e) {
        const value = this.getEventValue(e);
        this.api.setDayOfWeekIncrementPrimary(value);
    }
    setDayOfWeekIncrementSecondary(e) {
        const value = this.getEventValue(e);
        this.api.setDayOfWeekIncrementSecondary(value);
    }
    setDayOfMonthIncrementPrimary(e) {
        const value = this.getEventValue(e);
        this.api.setDayOfMonthIncrementPrimary(value);
    }
    setDayOfMonthIncrementSecondary(e) {
        const value = this.getEventValue(e);
        this.api.setDayOfMonthIncrementSecondary(value);
    }
    setDayOfWeekLastNTHDayWeekValue(e) {
        const value = this.getEventValue(e);
        this.api.setDayOfWeekLastNTHDayWeekValue(value);
    }
    setDayOfMonthDaysBeforeEndMonthValue(e) {
        const value = this.getEventValue(e);
        this.api.setDayOfMonthDaysBeforeEndMonthValue(value);
    }
    setDayOfMonthNearestWeekDayOfMonthValue(e) {
        const value = this.getEventValue(e);
        this.api.setDayOfMonthNearestWeekDayOfMonthValue(value);
    }
    setDayOfWeekNTHWeekDayOfMonthPrimaryValue(e) {
        const value = this.getEventValue(e);
        this.api.setDayOfWeekNTHWeekDayOfMonthPrimaryValue(value);
    }
    setDayOfWeekNTHWeekDayOfMonthSecondaryValue(e) {
        const value = this.getEventValue(e);
        this.api.setDayOfWeekNTHWeekDayOfMonthSecondaryValue(value);
    }
    getEventValue(e) {
        const el = e.target;
        return el.value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronDayComponent, deps: [{ token: i1$1.CronQuartzUIService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: QuartzCronDayComponent, isStandalone: false, selector: "quartz-cron-day", usesInheritance: true, ngImport: i0, template: "<div class=\"{{schema.formGroup}} c-every-weekday c-segment\">\n  <div class=\"{{schema.check.root}} c-every-weekday-check\">\n    <input\n      class=\"{{schema.check.field}} c-every-weekday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.EVERY, segment.dayOfWeek)\"\n      [value]=\"mode.EVERY\"\n      [checked]=\"api.isEverySelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectEvery()\">\n\n    <label\n      class=\"{{schema.check.label}} c-every-weekday-option-label\"\n      [attr.for]=\"genId(mode.EVERY, segment.dayOfWeek)\">\n\n      {{localization.quartz.day.every.label}}\n    </label>\n  </div>\n</div>\n\n<div class=\"{{schema.formGroup}} {{schema.formInline}} c-increment-weekday c-segment\">\n  <div class=\"{{schema.check.root}} c-increment-weekday-check\">\n    <input\n      class=\"{{schema.check.field}} c-increment-weekday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.INCREMENT, segment.dayOfWeek)\"\n      [value]=\"mode.INCREMENT\"\n      [checked]=\"api.isDayOfWeekIncrementSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfWeekIncrement()\">\n\n    <label\n      class=\"{{schema.check.label}} c-increment-weekday-option-label\"\n      [attr.for]=\"genId(mode.INCREMENT, segment.dayOfWeek)\">\n\n      {{localization.quartz.day.dayOfWeekIncrement.label1}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-weekday-every\"\n    [disabled]=\"api.isDayOfWeekIncrementControlsDisabled()\"\n    (change)=\"setDayOfWeekIncrementPrimary($event)\">\n\n    @for (item of daysOfWeekEvery; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfWeekIncrementPrimary() === item.value\">\n        {{item.value}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-increment-weekday-option-label2\"\n    [attr.for]=\"genId(mode.INCREMENT, segment.dayOfWeek)\">\n    {{localization.quartz.day.dayOfWeekIncrement.label2}}\n  </label>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-weekday-from\"\n    [disabled]=\"api.isDayOfWeekIncrementControlsDisabled()\"\n    (change)=\"setDayOfWeekIncrementSecondary($event)\">\n\n    @for (item of daysOfWeek; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfWeekIncrementSecondary() === item.value\">\n\n        {{localizeLabel(item.label, this.localization.common.dayOfWeek)}}\n      </option>\n    }\n  </select>\n</div>\n\n<div class=\"{{schema.formGroup}} {{schema.formInline}} c-increment-monthday c-segment\">\n  <div class=\"{{schema.check.root}} c-increment-monthday-check\">\n    <input\n      class=\"{{schema.check.field}} c-increment-monthday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.INCREMENT, segment.dayOfMonth)\"\n      [value]=\"mode.INCREMENT\"\n      [checked]=\"api.isDayOfMonthIncrementSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfMonthIncrement()\">\n\n    <label\n      class=\"{{schema.check.label}} c-increment-monthday-option-label\"\n      [attr.for]=\"genId(mode.INCREMENT, segment.dayOfMonth)\">\n\n      {{localization.quartz.day.dayOfMonthIncrement.label1}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-monthday-every\"\n    [disabled]=\"api.isDayOfMonthIncrementControlsDisabled()\"\n    (change)=\"setDayOfMonthIncrementPrimary($event)\">\n\n    @for (item of daysOfMonth; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfMonthIncrementPrimary() === item.value\">\n        {{item.value}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-increment-monthday-option-label2\"\n    [attr.for]=\"genId(mode.INCREMENT, segment.dayOfMonth)\">\n\n    {{localization.quartz.day.dayOfMonthIncrement.label2}}\n  </label>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-monthday-from\"\n    [disabled]=\"api.isDayOfMonthIncrementControlsDisabled()\"\n    (change)=\"setDayOfMonthIncrementSecondary($event)\">\n\n    @for (item of daysOfMonthEvery; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfMonthIncrementSecondary() === item.value\">\n\n        {{localizeLabel(item.label, localization.common.dayOfMonth)}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-increment-monthday-option-label3\"\n    [attr.for]=\"genId(mode.INCREMENT, segment.dayOfMonth)\">\n\n    {{localization.quartz.day.dayOfMonthIncrement.label3}}\n  </label>\n</div>\n\n<div class=\"{{schema.formGroup}} c-and-weekday c-segment\">\n  <div class=\"{{schema.check.root}} c-and-weekday-check\">\n    <input\n      class=\"{{schema.check.field}} c-and-weekday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.AND, segment.dayOfWeek)\"\n      [value]=\"mode.INCREMENT\"\n      [checked]=\"api.isDayOfWeekAndSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfWeekAnd()\">\n\n    <label\n      class=\"{{schema.check.label}} c-and-weekday-option-label\"\n      [attr.for]=\"genId(mode.AND, segment.dayOfWeek)\">\n\n      {{localization.quartz.day.dayOfWeekAnd.label}}\n    </label>\n  </div>\n\n  <div class=\"{{schema.check.row}} c-and-weekday-list\">\n    @for (item of daysOfWeekCodes; track item) {\n      <div\n        class=\"{{schema.col3}} {{schema.colMd2}} c-and-weekday-item\"\n        [attr.item-value]=\"item.value\">\n\n        <div class=\"{{schema.check.root}} c-and-weekday-item-check\">\n          <input\n            class=\"{{schema.check.field}} c-and-weekday-item-field\"\n            type=\"checkbox\"\n            [attr.id]=\"genId(mode.AND, segment.dayOfWeek + item.value)\"\n            [value]=\"item.value\"\n            [disabled]=\"api.isDayOfWeekAndControlsDisabled()\"\n            [checked]=\"api.isSelectedDayOfWeekAndValue(item.value)\"\n            (click)=\"api.selectDayOfWeekAndValue(item.value)\">\n\n          <label\n            class=\"{{schema.check.label}} c-and-weekday-item-label\"\n            [attr.for]=\"genId(mode.AND, segment.dayOfWeek + item.value)\">\n            {{localizeLabel(item.label, localization.common.dayOfWeek)}}\n          </label>\n        </div>\n      </div>\n    }\n  </div>\n</div>\n\n<cron-range\n  [label]=\"localization.quartz.day.dayOfWeekRange.label1\"\n  [label2]=\"localization.quartz.day.dayOfWeekRange.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isDayOfWeekRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isDayOfWeekRangeControlsDisabled()\"\n  [primaryOptions]=\"localizeList(daysOfWeekCodes, localization.common.dayOfWeek)\"\n  [secondaryOptions]=\"localizeList(daysOfWeekCodes, localization.common.dayOfWeek)\"\n  [primaryValue]=\"api.getDayOfWeekRangePrimary()\"\n  [secondaryValue]=\"api.getDayOfWeekRangeSecondary()\"\n  (selected)=\"api.selectDayOfWeekRange()\"\n  (primaryValueChanged)=\"api.setDayOfWeekRangePrimary($event)\"\n  (secondaryValueChanged)=\"api.setDayOfWeekRangeSecondary($event)\">\n</cron-range>\n\n<div class=\"{{schema.formGroup}} c-and-monthday c-segment\">\n  <div class=\"{{schema.check.root}} c-and-monthday-check\">\n    <input\n      class=\"{{schema.check.field}} c-and-monthday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.AND, segment.dayOfMonth)\"\n      [value]=\"mode.INCREMENT\"\n      [checked]=\"api.isDayOfMonthAndSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfMonthAnd()\">\n\n    <label\n      class=\"{{schema.check.label}} c-and-monthday-option-label\"\n      [attr.for]=\"genId(mode.AND, segment.dayOfMonth)\">\n\n      {{localization.quartz.day.dayOfMonthAnd.label}}\n    </label>\n  </div>\n\n  <div class=\"{{schema.check.row}} c-and-monthday-list\">\n    @for (item of daysOfMonth; track item) {\n      <div\n        class=\"{{schema.col2}} {{schema.colMd1}} c-and-monthday-item\"\n        [attr.item-value]=\"item.value\">\n\n        <div class=\"{{schema.check.root}} c-and-monthday-item-check\">\n          <input\n            class=\"{{schema.check.field}} c-and-monthday-item-field\"\n            type=\"checkbox\"\n            [attr.id]=\"genId(mode.AND, segment.dayOfMonth + item.value)\"\n            [value]=\"item.value\"\n            [disabled]=\"api.isDayOfMonthAndControlsDisabled()\"\n            [checked]=\"api.isSelectedDayOfMonthAndValue(item.value)\"\n            (click)=\"api.selectDayOfMonthAndValue(item.value)\">\n\n          <label\n            class=\"{{schema.check.label}} c-and-monthday-item-label\"\n            [attr.for]=\"genId(mode.AND, segment.dayOfMonth + item.value)\">\n            {{item.label}}\n          </label>\n        </div>\n      </div>\n    }\n  </div>\n</div>\n\n<div class=\"{{schema.formGroup}} c-last-monthday c-segment\">\n  <div class=\"{{schema.check.root}} c-last-monthday-check\">\n    <input\n      class=\"{{schema.check.field}} c-last-monthday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.LAST_DAY, segment.dayOfMonth)\"\n      [value]=\"mode.LAST_DAY\"\n      [checked]=\"api.isDayOfMonthLastDaySelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfMonthLastDay()\">\n\n    <label\n      class=\"{{schema.check.label}} c-last-monthday-option-label\"\n      [attr.for]=\"genId(mode.LAST_DAY, segment.dayOfMonth)\">\n\n      {{localization.quartz.day.dayOfMonthLastDay.label}}\n    </label>\n  </div>\n</div>\n\n<div class=\"{{schema.formGroup}} c-last-weekday c-segment\">\n  <div class=\"{{schema.check.root}} c-last-weekday-check\">\n    <input\n      class=\"{{schema.check.field}} c-last-weekday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.LAST_DAY_WEEK, segment.dayOfMonth)\"\n      [value]=\"mode.LAST_DAY_WEEK\"\n      [checked]=\"api.isDayOfMonthLastDayWeekSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfMonthLastDayWeek()\">\n\n    <label\n      class=\"{{schema.check.label}} c-last-weekday-option-label\"\n      [attr.for]=\"genId(mode.LAST_DAY_WEEK, segment.dayOfMonth)\">\n\n      {{localization.quartz.day.dayOfMonthLastDayWeek.label}}\n    </label>\n  </div>\n</div>\n\n<div class=\"{{schema.formGroup}} {{schema.formInline}} c-last-nth c-segment\">\n  <div class=\"{{schema.check.root}} c-last-nth-check\">\n    <input\n      class=\"{{schema.check.field}} c-last-nth-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.LAST_NTH_DAY_WEEK, segment.dayOfWeek)\"\n      [value]=\"mode.LAST_NTH_DAY_WEEK\"\n      [checked]=\"api.isDayOfWeekLastNTHDayWeekSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfWeekLastNTHDayWeek()\">\n\n    <label\n      class=\"{{schema.check.label}} c-last-nth-option-label\"\n      [attr.for]=\"genId(mode.LAST_NTH_DAY_WEEK, segment.dayOfWeek)\">\n\n      {{localization.quartz.day.dayOfWeekLastNTHDayWeek.label1}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-last-nth-weekday\"\n    [disabled]=\"api.isDayOfWeekLastNTHDayWeekControlsDisabled()\"\n    (change)=\"setDayOfWeekLastNTHDayWeekValue($event)\">\n\n    @for (item of daysOfWeek; track item) {\n      <option\n        [value]=\"item.value + 'L'\"\n        [selected]=\"api.getDayOfWeekLastNTHDayWeekValue() === item.value\">\n        {{localizeLabel(item.label, localization.common.dayOfWeek)}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-last-nth-option-label2\"\n    [attr.for]=\"genId(mode.LAST_NTH_DAY_WEEK, segment.dayOfWeek)\">\n    {{localization.quartz.day.dayOfWeekLastNTHDayWeek.label2}}\n  </label>\n</div>\n\n<div class=\"{{schema.formGroup}} {{schema.formInline}} c-day-before-end c-segment\">\n  <div class=\"{{schema.check.root}} c-day-before-end-check\">\n    <input\n      class=\"{{schema.check.field}} c-day-before-end-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.DAYS_BEFORE_END_MONTH, segment.dayOfMonth)\"\n      [value]=\"mode.DAYS_BEFORE_END_MONTH\"\n      [checked]=\"api.isDayOfMonthDaysBeforeEndMonthSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfMonthDaysBeforeEndMonth()\">\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-day-before-end-monthday\"\n    [disabled]=\"api.isDayOfMonthDaysBeforeEndMonthControlsDisabled()\"\n    (change)=\"setDayOfMonthDaysBeforeEndMonthValue($event)\">\n\n    @for (item of daysOfMonth; track item) {\n      <option\n        [value]=\"'L-' + item.value\"\n        [selected]=\"api.getDayOfMonthDaysBeforeEndMonthValue() === item.value\">\n        {{item.label}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-day-before-end-option-label\"\n    [attr.for]=\"genId(mode.DAYS_BEFORE_END_MONTH, segment.dayOfMonth)\">\n    {{localization.quartz.day.dayOfMonthDaysBeforeEndMonth.label}}\n  </label>\n</div>\n\n<div class=\"{{schema.formGroup}} {{schema.formInline}} c-nearest c-segment\">\n  <div class=\"{{schema.check.root}} c-nearest-check\">\n    <input\n      class=\"{{schema.check.field}} c-nearest-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.NEAREST_WEEKDAY_OF_MONTH, segment.dayOfMonth)\"\n      [value]=\"mode.NEAREST_WEEKDAY_OF_MONTH\"\n      [checked]=\"api.isDayOfMonthNearestWeekDayOfMonthSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfMonthNearestWeekDayOfMonth()\">\n\n    <label\n      class=\"{{schema.check.label}} c-nearest-option-label\"\n      [attr.for]=\"genId(mode.NEAREST_WEEKDAY_OF_MONTH, segment.dayOfMonth)\">\n\n      {{localization.quartz.day.dayOfMonthNearestWeekDayOfMonth.label1}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-nearest-monthday\"\n    [disabled]=\"api.isDayOfMonthNearestWeekDayOfMonthControlsDisabled()\"\n    (change)=\"setDayOfMonthNearestWeekDayOfMonthValue($event)\">\n\n    @for (item of daysOfMonthEvery; track item) {\n      <option\n        [value]=\"item.value + 'W'\"\n        [selected]=\"api.getDayOfMonthNearestWeekDayOfMonthValue() === item.value\">\n        {{localizeLabel(item.label, localization.common.dayOfMonth)}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-nearest-option-label2\"\n    [attr.for]=\"genId(mode.NEAREST_WEEKDAY_OF_MONTH, segment.dayOfMonth)\">\n    {{localization.quartz.day.dayOfMonthNearestWeekDayOfMonth.label2}}\n  </label>\n</div>\n\n<div class=\"{{schema.formGroup}} {{schema.formInline}} c-nth c-segment\">\n  <div class=\"{{schema.check.root}} c-nth-check\">\n    <input\n      class=\"{{schema.check.field}} c-nth-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.NTH_WEEKDAY_OF_MONTH, segment.dayOfWeek)\"\n      [value]=\"mode.NTH_WEEKDAY_OF_MONTH\"\n      [checked]=\"api.isDayOfWeekNTHWeekDayOfMonthSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfWeekNTHWeekDayOfMonth()\">\n\n    <label\n      class=\"{{schema.check.label}} c-nth-option-label\"\n      [attr.for]=\"genId(mode.NTH_WEEKDAY_OF_MONTH, segment.dayOfWeek)\">\n\n      {{localization.quartz.day.dayOfWeekNTHWeekDayOfMonth.label1}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-nth-every\"\n    [disabled]=\"api.isDayOfWeekNTHWeekDayOfMonthControlsDisabled()\"\n    (change)=\"setDayOfWeekNTHWeekDayOfMonthPrimaryValue($event)\">\n\n    @for (item of limitedDaysOfMonth; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfWeekNTHWeekDayOfMonthPrimaryValue() === item.value\">\n        {{localizeLabel(item.label, localization.common.dayOfMonth)}}\n      </option>\n    }\n  </select>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-nth-every-weekday\"\n    [disabled]=\"api.isDayOfWeekNTHWeekDayOfMonthControlsDisabled()\"\n    (change)=\"setDayOfWeekNTHWeekDayOfMonthSecondaryValue($event)\">\n\n    @for (item of daysOfWeek; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfWeekNTHWeekDayOfMonthSecondaryValue() === item.value\">\n        {{localizeLabel(item.label, localization.common.dayOfWeek)}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-nth-option-label2\"\n    [attr.for]=\"genId(mode.NTH_WEEKDAY_OF_MONTH, segment.dayOfWeek)\">\n    {{localization.quartz.day.dayOfWeekNTHWeekDayOfMonth.label2}}\n  </label>\n</div>\n", dependencies: [{ kind: "component", type: CronRangeComponent, selector: "cron-range", inputs: ["segmentId", "checked", "disabled", "disabledControls", "label", "label2", "primaryValue", "primaryOptions", "secondaryValue", "secondaryOptions", "schema"], outputs: ["selected", "primaryValueChanged", "secondaryValueChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronDayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'quartz-cron-day', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<div class=\"{{schema.formGroup}} c-every-weekday c-segment\">\n  <div class=\"{{schema.check.root}} c-every-weekday-check\">\n    <input\n      class=\"{{schema.check.field}} c-every-weekday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.EVERY, segment.dayOfWeek)\"\n      [value]=\"mode.EVERY\"\n      [checked]=\"api.isEverySelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectEvery()\">\n\n    <label\n      class=\"{{schema.check.label}} c-every-weekday-option-label\"\n      [attr.for]=\"genId(mode.EVERY, segment.dayOfWeek)\">\n\n      {{localization.quartz.day.every.label}}\n    </label>\n  </div>\n</div>\n\n<div class=\"{{schema.formGroup}} {{schema.formInline}} c-increment-weekday c-segment\">\n  <div class=\"{{schema.check.root}} c-increment-weekday-check\">\n    <input\n      class=\"{{schema.check.field}} c-increment-weekday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.INCREMENT, segment.dayOfWeek)\"\n      [value]=\"mode.INCREMENT\"\n      [checked]=\"api.isDayOfWeekIncrementSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfWeekIncrement()\">\n\n    <label\n      class=\"{{schema.check.label}} c-increment-weekday-option-label\"\n      [attr.for]=\"genId(mode.INCREMENT, segment.dayOfWeek)\">\n\n      {{localization.quartz.day.dayOfWeekIncrement.label1}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-weekday-every\"\n    [disabled]=\"api.isDayOfWeekIncrementControlsDisabled()\"\n    (change)=\"setDayOfWeekIncrementPrimary($event)\">\n\n    @for (item of daysOfWeekEvery; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfWeekIncrementPrimary() === item.value\">\n        {{item.value}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-increment-weekday-option-label2\"\n    [attr.for]=\"genId(mode.INCREMENT, segment.dayOfWeek)\">\n    {{localization.quartz.day.dayOfWeekIncrement.label2}}\n  </label>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-weekday-from\"\n    [disabled]=\"api.isDayOfWeekIncrementControlsDisabled()\"\n    (change)=\"setDayOfWeekIncrementSecondary($event)\">\n\n    @for (item of daysOfWeek; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfWeekIncrementSecondary() === item.value\">\n\n        {{localizeLabel(item.label, this.localization.common.dayOfWeek)}}\n      </option>\n    }\n  </select>\n</div>\n\n<div class=\"{{schema.formGroup}} {{schema.formInline}} c-increment-monthday c-segment\">\n  <div class=\"{{schema.check.root}} c-increment-monthday-check\">\n    <input\n      class=\"{{schema.check.field}} c-increment-monthday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.INCREMENT, segment.dayOfMonth)\"\n      [value]=\"mode.INCREMENT\"\n      [checked]=\"api.isDayOfMonthIncrementSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfMonthIncrement()\">\n\n    <label\n      class=\"{{schema.check.label}} c-increment-monthday-option-label\"\n      [attr.for]=\"genId(mode.INCREMENT, segment.dayOfMonth)\">\n\n      {{localization.quartz.day.dayOfMonthIncrement.label1}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-monthday-every\"\n    [disabled]=\"api.isDayOfMonthIncrementControlsDisabled()\"\n    (change)=\"setDayOfMonthIncrementPrimary($event)\">\n\n    @for (item of daysOfMonth; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfMonthIncrementPrimary() === item.value\">\n        {{item.value}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-increment-monthday-option-label2\"\n    [attr.for]=\"genId(mode.INCREMENT, segment.dayOfMonth)\">\n\n    {{localization.quartz.day.dayOfMonthIncrement.label2}}\n  </label>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-monthday-from\"\n    [disabled]=\"api.isDayOfMonthIncrementControlsDisabled()\"\n    (change)=\"setDayOfMonthIncrementSecondary($event)\">\n\n    @for (item of daysOfMonthEvery; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfMonthIncrementSecondary() === item.value\">\n\n        {{localizeLabel(item.label, localization.common.dayOfMonth)}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-increment-monthday-option-label3\"\n    [attr.for]=\"genId(mode.INCREMENT, segment.dayOfMonth)\">\n\n    {{localization.quartz.day.dayOfMonthIncrement.label3}}\n  </label>\n</div>\n\n<div class=\"{{schema.formGroup}} c-and-weekday c-segment\">\n  <div class=\"{{schema.check.root}} c-and-weekday-check\">\n    <input\n      class=\"{{schema.check.field}} c-and-weekday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.AND, segment.dayOfWeek)\"\n      [value]=\"mode.INCREMENT\"\n      [checked]=\"api.isDayOfWeekAndSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfWeekAnd()\">\n\n    <label\n      class=\"{{schema.check.label}} c-and-weekday-option-label\"\n      [attr.for]=\"genId(mode.AND, segment.dayOfWeek)\">\n\n      {{localization.quartz.day.dayOfWeekAnd.label}}\n    </label>\n  </div>\n\n  <div class=\"{{schema.check.row}} c-and-weekday-list\">\n    @for (item of daysOfWeekCodes; track item) {\n      <div\n        class=\"{{schema.col3}} {{schema.colMd2}} c-and-weekday-item\"\n        [attr.item-value]=\"item.value\">\n\n        <div class=\"{{schema.check.root}} c-and-weekday-item-check\">\n          <input\n            class=\"{{schema.check.field}} c-and-weekday-item-field\"\n            type=\"checkbox\"\n            [attr.id]=\"genId(mode.AND, segment.dayOfWeek + item.value)\"\n            [value]=\"item.value\"\n            [disabled]=\"api.isDayOfWeekAndControlsDisabled()\"\n            [checked]=\"api.isSelectedDayOfWeekAndValue(item.value)\"\n            (click)=\"api.selectDayOfWeekAndValue(item.value)\">\n\n          <label\n            class=\"{{schema.check.label}} c-and-weekday-item-label\"\n            [attr.for]=\"genId(mode.AND, segment.dayOfWeek + item.value)\">\n            {{localizeLabel(item.label, localization.common.dayOfWeek)}}\n          </label>\n        </div>\n      </div>\n    }\n  </div>\n</div>\n\n<cron-range\n  [label]=\"localization.quartz.day.dayOfWeekRange.label1\"\n  [label2]=\"localization.quartz.day.dayOfWeekRange.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isDayOfWeekRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isDayOfWeekRangeControlsDisabled()\"\n  [primaryOptions]=\"localizeList(daysOfWeekCodes, localization.common.dayOfWeek)\"\n  [secondaryOptions]=\"localizeList(daysOfWeekCodes, localization.common.dayOfWeek)\"\n  [primaryValue]=\"api.getDayOfWeekRangePrimary()\"\n  [secondaryValue]=\"api.getDayOfWeekRangeSecondary()\"\n  (selected)=\"api.selectDayOfWeekRange()\"\n  (primaryValueChanged)=\"api.setDayOfWeekRangePrimary($event)\"\n  (secondaryValueChanged)=\"api.setDayOfWeekRangeSecondary($event)\">\n</cron-range>\n\n<div class=\"{{schema.formGroup}} c-and-monthday c-segment\">\n  <div class=\"{{schema.check.root}} c-and-monthday-check\">\n    <input\n      class=\"{{schema.check.field}} c-and-monthday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.AND, segment.dayOfMonth)\"\n      [value]=\"mode.INCREMENT\"\n      [checked]=\"api.isDayOfMonthAndSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfMonthAnd()\">\n\n    <label\n      class=\"{{schema.check.label}} c-and-monthday-option-label\"\n      [attr.for]=\"genId(mode.AND, segment.dayOfMonth)\">\n\n      {{localization.quartz.day.dayOfMonthAnd.label}}\n    </label>\n  </div>\n\n  <div class=\"{{schema.check.row}} c-and-monthday-list\">\n    @for (item of daysOfMonth; track item) {\n      <div\n        class=\"{{schema.col2}} {{schema.colMd1}} c-and-monthday-item\"\n        [attr.item-value]=\"item.value\">\n\n        <div class=\"{{schema.check.root}} c-and-monthday-item-check\">\n          <input\n            class=\"{{schema.check.field}} c-and-monthday-item-field\"\n            type=\"checkbox\"\n            [attr.id]=\"genId(mode.AND, segment.dayOfMonth + item.value)\"\n            [value]=\"item.value\"\n            [disabled]=\"api.isDayOfMonthAndControlsDisabled()\"\n            [checked]=\"api.isSelectedDayOfMonthAndValue(item.value)\"\n            (click)=\"api.selectDayOfMonthAndValue(item.value)\">\n\n          <label\n            class=\"{{schema.check.label}} c-and-monthday-item-label\"\n            [attr.for]=\"genId(mode.AND, segment.dayOfMonth + item.value)\">\n            {{item.label}}\n          </label>\n        </div>\n      </div>\n    }\n  </div>\n</div>\n\n<div class=\"{{schema.formGroup}} c-last-monthday c-segment\">\n  <div class=\"{{schema.check.root}} c-last-monthday-check\">\n    <input\n      class=\"{{schema.check.field}} c-last-monthday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.LAST_DAY, segment.dayOfMonth)\"\n      [value]=\"mode.LAST_DAY\"\n      [checked]=\"api.isDayOfMonthLastDaySelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfMonthLastDay()\">\n\n    <label\n      class=\"{{schema.check.label}} c-last-monthday-option-label\"\n      [attr.for]=\"genId(mode.LAST_DAY, segment.dayOfMonth)\">\n\n      {{localization.quartz.day.dayOfMonthLastDay.label}}\n    </label>\n  </div>\n</div>\n\n<div class=\"{{schema.formGroup}} c-last-weekday c-segment\">\n  <div class=\"{{schema.check.root}} c-last-weekday-check\">\n    <input\n      class=\"{{schema.check.field}} c-last-weekday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.LAST_DAY_WEEK, segment.dayOfMonth)\"\n      [value]=\"mode.LAST_DAY_WEEK\"\n      [checked]=\"api.isDayOfMonthLastDayWeekSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfMonthLastDayWeek()\">\n\n    <label\n      class=\"{{schema.check.label}} c-last-weekday-option-label\"\n      [attr.for]=\"genId(mode.LAST_DAY_WEEK, segment.dayOfMonth)\">\n\n      {{localization.quartz.day.dayOfMonthLastDayWeek.label}}\n    </label>\n  </div>\n</div>\n\n<div class=\"{{schema.formGroup}} {{schema.formInline}} c-last-nth c-segment\">\n  <div class=\"{{schema.check.root}} c-last-nth-check\">\n    <input\n      class=\"{{schema.check.field}} c-last-nth-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.LAST_NTH_DAY_WEEK, segment.dayOfWeek)\"\n      [value]=\"mode.LAST_NTH_DAY_WEEK\"\n      [checked]=\"api.isDayOfWeekLastNTHDayWeekSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfWeekLastNTHDayWeek()\">\n\n    <label\n      class=\"{{schema.check.label}} c-last-nth-option-label\"\n      [attr.for]=\"genId(mode.LAST_NTH_DAY_WEEK, segment.dayOfWeek)\">\n\n      {{localization.quartz.day.dayOfWeekLastNTHDayWeek.label1}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-last-nth-weekday\"\n    [disabled]=\"api.isDayOfWeekLastNTHDayWeekControlsDisabled()\"\n    (change)=\"setDayOfWeekLastNTHDayWeekValue($event)\">\n\n    @for (item of daysOfWeek; track item) {\n      <option\n        [value]=\"item.value + 'L'\"\n        [selected]=\"api.getDayOfWeekLastNTHDayWeekValue() === item.value\">\n        {{localizeLabel(item.label, localization.common.dayOfWeek)}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-last-nth-option-label2\"\n    [attr.for]=\"genId(mode.LAST_NTH_DAY_WEEK, segment.dayOfWeek)\">\n    {{localization.quartz.day.dayOfWeekLastNTHDayWeek.label2}}\n  </label>\n</div>\n\n<div class=\"{{schema.formGroup}} {{schema.formInline}} c-day-before-end c-segment\">\n  <div class=\"{{schema.check.root}} c-day-before-end-check\">\n    <input\n      class=\"{{schema.check.field}} c-day-before-end-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.DAYS_BEFORE_END_MONTH, segment.dayOfMonth)\"\n      [value]=\"mode.DAYS_BEFORE_END_MONTH\"\n      [checked]=\"api.isDayOfMonthDaysBeforeEndMonthSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfMonthDaysBeforeEndMonth()\">\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-day-before-end-monthday\"\n    [disabled]=\"api.isDayOfMonthDaysBeforeEndMonthControlsDisabled()\"\n    (change)=\"setDayOfMonthDaysBeforeEndMonthValue($event)\">\n\n    @for (item of daysOfMonth; track item) {\n      <option\n        [value]=\"'L-' + item.value\"\n        [selected]=\"api.getDayOfMonthDaysBeforeEndMonthValue() === item.value\">\n        {{item.label}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-day-before-end-option-label\"\n    [attr.for]=\"genId(mode.DAYS_BEFORE_END_MONTH, segment.dayOfMonth)\">\n    {{localization.quartz.day.dayOfMonthDaysBeforeEndMonth.label}}\n  </label>\n</div>\n\n<div class=\"{{schema.formGroup}} {{schema.formInline}} c-nearest c-segment\">\n  <div class=\"{{schema.check.root}} c-nearest-check\">\n    <input\n      class=\"{{schema.check.field}} c-nearest-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.NEAREST_WEEKDAY_OF_MONTH, segment.dayOfMonth)\"\n      [value]=\"mode.NEAREST_WEEKDAY_OF_MONTH\"\n      [checked]=\"api.isDayOfMonthNearestWeekDayOfMonthSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfMonthNearestWeekDayOfMonth()\">\n\n    <label\n      class=\"{{schema.check.label}} c-nearest-option-label\"\n      [attr.for]=\"genId(mode.NEAREST_WEEKDAY_OF_MONTH, segment.dayOfMonth)\">\n\n      {{localization.quartz.day.dayOfMonthNearestWeekDayOfMonth.label1}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-nearest-monthday\"\n    [disabled]=\"api.isDayOfMonthNearestWeekDayOfMonthControlsDisabled()\"\n    (change)=\"setDayOfMonthNearestWeekDayOfMonthValue($event)\">\n\n    @for (item of daysOfMonthEvery; track item) {\n      <option\n        [value]=\"item.value + 'W'\"\n        [selected]=\"api.getDayOfMonthNearestWeekDayOfMonthValue() === item.value\">\n        {{localizeLabel(item.label, localization.common.dayOfMonth)}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-nearest-option-label2\"\n    [attr.for]=\"genId(mode.NEAREST_WEEKDAY_OF_MONTH, segment.dayOfMonth)\">\n    {{localization.quartz.day.dayOfMonthNearestWeekDayOfMonth.label2}}\n  </label>\n</div>\n\n<div class=\"{{schema.formGroup}} {{schema.formInline}} c-nth c-segment\">\n  <div class=\"{{schema.check.root}} c-nth-check\">\n    <input\n      class=\"{{schema.check.field}} c-nth-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.NTH_WEEKDAY_OF_MONTH, segment.dayOfWeek)\"\n      [value]=\"mode.NTH_WEEKDAY_OF_MONTH\"\n      [checked]=\"api.isDayOfWeekNTHWeekDayOfMonthSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfWeekNTHWeekDayOfMonth()\">\n\n    <label\n      class=\"{{schema.check.label}} c-nth-option-label\"\n      [attr.for]=\"genId(mode.NTH_WEEKDAY_OF_MONTH, segment.dayOfWeek)\">\n\n      {{localization.quartz.day.dayOfWeekNTHWeekDayOfMonth.label1}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-nth-every\"\n    [disabled]=\"api.isDayOfWeekNTHWeekDayOfMonthControlsDisabled()\"\n    (change)=\"setDayOfWeekNTHWeekDayOfMonthPrimaryValue($event)\">\n\n    @for (item of limitedDaysOfMonth; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfWeekNTHWeekDayOfMonthPrimaryValue() === item.value\">\n        {{localizeLabel(item.label, localization.common.dayOfMonth)}}\n      </option>\n    }\n  </select>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-nth-every-weekday\"\n    [disabled]=\"api.isDayOfWeekNTHWeekDayOfMonthControlsDisabled()\"\n    (change)=\"setDayOfWeekNTHWeekDayOfMonthSecondaryValue($event)\">\n\n    @for (item of daysOfWeek; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfWeekNTHWeekDayOfMonthSecondaryValue() === item.value\">\n        {{localizeLabel(item.label, localization.common.dayOfWeek)}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-nth-option-label2\"\n    [attr.for]=\"genId(mode.NTH_WEEKDAY_OF_MONTH, segment.dayOfWeek)\">\n    {{localization.quartz.day.dayOfWeekNTHWeekDayOfMonth.label2}}\n  </label>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1$1.CronQuartzUIService }, { type: i0.ChangeDetectorRef }] });

class QuartzCronDayModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronDayModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronDayModule, declarations: [QuartzCronDayComponent], imports: [CommonModule,
            CronRangeModule], exports: [QuartzCronDayComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronDayModule, imports: [CommonModule,
            CronRangeModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronDayModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        CronRangeModule
                    ],
                    declarations: [QuartzCronDayComponent],
                    exports: [QuartzCronDayComponent]
                }]
        }] });

const localization = {
    common: {
        month: {
            january: 'January',
            february: 'February',
            march: 'March',
            april: 'April',
            may: 'May',
            june: 'June',
            july: 'July',
            august: 'August',
            september: 'September',
            october: 'October',
            november: 'November',
            december: 'December'
        },
        dayOfWeek: {
            sunday: 'Sunday',
            monday: 'Monday',
            tuesday: 'Tuesday',
            wednesday: 'Wednesday',
            thursday: 'Thursday',
            friday: 'Friday',
            saturday: 'Saturday'
        },
        dayOfMonth: {
            '1st': '1st',
            '2nd': '2nd',
            '3rd': '3rd',
            '4th': '4th',
            '5th': '5th',
            '6th': '6th',
            '7th': '7th',
            '8th': '8th',
            '9th': '9th',
            '10th': '10th',
            '11th': '11th',
            '12th': '12th',
            '13th': '13th',
            '14th': '14th',
            '15th': '15th',
            '16th': '16th',
            '17th': '17th',
            '18th': '18th',
            '19th': '19th',
            '20th': '20th',
            '21st': '21st',
            '22nd': '22nd',
            '23rd': '23rd',
            '24th': '24th',
            '25th': '25th',
            '26th': '26th',
            '27th': '27th',
            '28th': '28th',
            '29th': '29th',
            '30th': '30th',
            '31st': '31st'
        }
    },
    tabs: {
        seconds: 'Seconds',
        minutes: 'Minutes',
        hours: 'Hours',
        day: 'Day',
        month: 'Month',
        year: 'Year'
    },
    quartz: {
        day: {
            every: {
                label: 'Every day'
            },
            dayOfWeekIncrement: {
                label1: 'Every',
                label2: 'day(s) starting on'
            },
            dayOfMonthIncrement: {
                label1: 'Every',
                label2: 'day(s) starting on the',
                label3: 'of the month'
            },
            dayOfWeekAnd: {
                label: 'Specific day of week (choose one or many)'
            },
            dayOfWeekRange: {
                label1: 'Every day between',
                label2: 'and'
            },
            dayOfMonthAnd: {
                label: 'Specific day of month (choose one or many)'
            },
            dayOfMonthLastDay: {
                label: 'On the last day of the month'
            },
            dayOfMonthLastDayWeek: {
                label: 'On the last weekday of the month'
            },
            dayOfWeekLastNTHDayWeek: {
                label1: 'On the last',
                label2: 'of the month'
            },
            dayOfMonthDaysBeforeEndMonth: {
                label: 'day(s) before the end of the month'
            },
            dayOfMonthNearestWeekDayOfMonth: {
                label1: 'Nearest weekday (Monday to Friday) to the',
                label2: 'of the month'
            },
            dayOfWeekNTHWeekDayOfMonth: {
                label1: 'On the',
                label2: 'of the month'
            }
        },
        month: {
            every: {
                label: 'Every month'
            },
            increment: {
                label1: 'Every',
                label2: 'month(s) starting at month',
            },
            and: {
                label: 'Specific month (choose one or many)'
            },
            range: {
                label1: 'Every month between month',
                label2: 'and month'
            }
        },
        second: {
            every: {
                label: 'Every second'
            },
            increment: {
                label1: 'Every',
                label2: 'second(s) starting at second',
            },
            and: {
                label: 'Specific second (choose one or many)'
            },
            range: {
                label1: 'Every second between second',
                label2: 'and second'
            }
        },
        minute: {
            every: {
                label: 'Every minute'
            },
            increment: {
                label1: 'Every',
                label2: 'minute(s) starting at minute',
            },
            and: {
                label: 'Specific minute (choose one or many)'
            },
            range: {
                label1: 'Every minute between minute',
                label2: 'and minute'
            }
        },
        hour: {
            every: {
                label: 'Every hour'
            },
            increment: {
                label1: 'Every',
                label2: 'hour(s) starting at hour',
            },
            and: {
                label: 'Specific hour (choose one or many)'
            },
            range: {
                label1: 'Every hour between hour',
                label2: 'and hour'
            }
        },
        year: {
            every: {
                label: 'Any year'
            },
            increment: {
                label1: 'Every',
                label2: 'year(s) starting at year',
            },
            and: {
                label: 'Specific year (choose one or many)'
            },
            range: {
                label1: 'Every year between year',
                label2: 'and year'
            }
        }
    },
    unix: {
        day: {
            every: {
                label: 'Every day'
            },
            dayOfWeekIncrement: {
                label1: 'Every',
                label2: 'day(s) of week'
            },
            dayOfMonthIncrement: {
                label1: 'Every',
                label2: 'day(s) of month'
            },
            dayOfWeekAnd: {
                label: 'Specific day of week (choose one or many)'
            },
            dayOfMonthAnd: {
                label: 'Specific day of month (choose one or many)'
            }
        },
        month: {
            every: {
                label: 'Every month'
            },
            increment: {
                label1: 'Every',
                label2: 'month(s)',
            },
            and: {
                label: 'Specific month (choose one or many)'
            },
            range: {
                label1: 'Every month between month',
                label2: 'and month'
            }
        },
        minute: {
            every: {
                label: 'Every minute'
            },
            increment: {
                label1: 'Every',
                label2: 'minute(s)',
            },
            and: {
                label: 'Specific minute (choose one or many)'
            },
            range: {
                label1: 'Every minute between minute',
                label2: 'and minute'
            }
        },
        hour: {
            every: {
                label: 'Every hour'
            },
            increment: {
                label1: 'Every',
                label2: 'hour(s)',
            },
            and: {
                label: 'Specific hour (choose one or many)'
            },
            range: {
                label1: 'Every hour between hour',
                label2: 'and hour'
            }
        }
    }
};

const generateSchema = (schema, cssClassPrefix) => {
    const { tabs, formInline, formGroup, formControl, mx1, ml1, col2, col3, colMd1, colMd2, check } = schema;
    return {
        tabs: {
            root: generateClasses(tabs.root, cssClassPrefix),
            item: generateClasses(tabs.item, cssClassPrefix),
            link: generateClasses(tabs.link, cssClassPrefix),
            active: generateClasses(tabs.active, cssClassPrefix)
        },
        formInline: generateClasses(formInline, cssClassPrefix),
        formGroup: generateClasses(formGroup, cssClassPrefix),
        formControl: generateClasses(formControl, cssClassPrefix),
        mx1: generateClasses(mx1, cssClassPrefix),
        ml1: generateClasses(ml1, cssClassPrefix),
        col2: generateClasses(col2, cssClassPrefix),
        col3: generateClasses(col3, cssClassPrefix),
        colMd1: generateClasses(colMd1, cssClassPrefix),
        colMd2: generateClasses(colMd2, cssClassPrefix),
        check: {
            root: generateClasses(check.root, cssClassPrefix),
            field: generateClasses(check.field, cssClassPrefix),
            label: generateClasses(check.label, cssClassPrefix),
            row: generateClasses(check.row, cssClassPrefix)
        }
    };
};
const generateClasses = (classes, cssClassPrefix) => {
    return classes
        .split(' ')
        .map(c => `${cssClassPrefix || ''}${c}`)
        .join(' ');
};

const cronBootstrap4 = {
    tabs: {
        root: 'nav nav-tabs mb-2',
        item: 'nav-item',
        link: 'nav-link',
        active: 'active'
    },
    formInline: 'form-inline',
    formGroup: 'form-group',
    formControl: 'form-control form-control-sm',
    check: {
        root: 'form-check',
        field: 'form-check-input',
        label: 'form-check-label',
        row: 'row pl-3 pt-1'
    },
    mx1: 'mx-1',
    ml1: 'ml-1',
    col2: 'col-2',
    col3: 'col-3',
    colMd1: 'col-md-1',
    colMd2: 'col-md-2'
};

const cronBootstrap5 = {
    tabs: {
        root: 'nav nav-tabs mb-2',
        item: 'nav-item',
        link: 'nav-link',
        active: 'active'
    },
    formInline: 'align-items-center d-flex',
    formGroup: 'mb-3',
    formControl: 'form-control form-control-sm w-auto',
    check: {
        root: 'form-check',
        field: 'form-check-input',
        label: 'form-check-label',
        row: 'row ps-3 pt-1'
    },
    mx1: 'mx-1',
    ml1: 'ms-1',
    col2: 'col-2',
    col3: 'col-3',
    colMd1: 'col-md-1',
    colMd2: 'col-md-2'
};

class CronHostComponent {
    set disabled(value) {
        const disableFields = value != null && `${value}` !== 'false';
        this.cronUI.setDisabled(disableFields);
    }
    constructor(cd, cronUI, initialTabs, styles) {
        this.cd = cd;
        this.cronUI = cronUI;
        this.initialTabs = initialTabs;
        this.styles = styles;
        this.changed = new EventEmitter();
        this.tabChanged = new EventEmitter();
        this.cssClassPrefix = '';
        this.activeTab = this.getActiveTab();
        this.tabs = null;
        this.hideTabs = false;
        this.onChange = null;
        this.onTouched = null;
        this.type = Type;
        this.schema = generateSchema(styles, this.cssClassPrefix);
    }
    ngOnChanges(changes) {
        const cssClassPrefix = changes['cssClassPrefix'];
        const shouldUpdate = (cssClassPrefix && cssClassPrefix.currentValue !== cssClassPrefix.previousValue);
        if (shouldUpdate) {
            this.schema = generateSchema(this.styles, this.cssClassPrefix);
            this.cd.detectChanges();
        }
    }
    writeValue(cronValue) {
        this.cronUI.fillFromExpression(cronValue || '');
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    applyChanges() {
        const str = this.cronUI.toString();
        if (this.onChange) {
            this.onChange(str);
        }
        if (this.onTouched) {
            this.onTouched();
        }
        this.changed.emit(str);
    }
    getActiveTab() {
        const tabs = this.getTabs();
        const [firstTab] = tabs.length ? tabs : [this.initialTabs[0]];
        return this.activeTab || firstTab;
    }
    getTabs() {
        return this.tabs || this.initialTabs;
    }
    getLocalization() {
        const args = [localization];
        if (this.localization) {
            args.push(this.localization);
        }
        return this.mergeDeep(...args);
    }
    mergeDeep(...objects) {
        return objects.reduce((prev, obj) => {
            Object.keys(obj).forEach(key => {
                const pVal = prev[key];
                const oVal = obj[key];
                if (pVal && typeof pVal === 'object' && oVal && typeof oVal === 'object') {
                    prev[key] = this.mergeDeep(pVal, oVal);
                }
                else {
                    prev[key] = oVal;
                }
            });
            return prev;
        }, {});
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronHostComponent, deps: "invalid", target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.20", type: CronHostComponent, isStandalone: true, inputs: { cssClassPrefix: "cssClassPrefix", activeTab: "activeTab", tabs: "tabs", hideTabs: "hideTabs", localization: "localization", disabled: "disabled" }, outputs: { changed: "changed", tabChanged: "tabChanged" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronHostComponent, decorators: [{
            type: Directive
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: undefined }, { type: undefined }, { type: undefined }], propDecorators: { changed: [{
                type: Output
            }], tabChanged: [{
                type: Output
            }], cssClassPrefix: [{
                type: Input
            }], activeTab: [{
                type: Input
            }], tabs: [{
                type: Input
            }], hideTabs: [{
                type: Input
            }], localization: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

function quartzCronServiceFactory() {
    return new CronQuartzUIService();
}
;
class QuartzCronComponent extends CronHostComponent {
    constructor(cd, cronQuartzUI) {
        super(cd, cronQuartzUI, [
            Type.SECONDS,
            Type.MINUTES,
            Type.HOURS,
            Type.DAY,
            Type.MONTH,
            Type.YEAR
        ], cronBootstrap4);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1$1.CronQuartzUIService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: QuartzCronComponent, isStandalone: false, selector: "quartz-cron", providers: [
            {
                provide: CronQuartzUIService,
                useFactory: quartzCronServiceFactory
            },
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => QuartzCronComponent),
                multi: true
            }
        ], usesInheritance: true, ngImport: i0, template: "<cron-container\n  hostClass=\"c-quartz\"\n  [localization]=\"getLocalization()\"\n  [tabs]=\"getTabs()\"\n  [activeTab]=\"getActiveTab()\"\n  [hideTabs]=\"hideTabs\"\n  [schema]=\"schema\"\n  (tabChanged)=\"tabChanged.emit($event)\">\n\n  <ng-template\n    #content\n    let-activeTab>\n\n    @if (activeTab === type.MONTH) {\n      <quartz-cron-month\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-month>\n    } @else if (activeTab === type.MINUTES) {\n      <quartz-cron-minute\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-minute>\n    } @else if (activeTab === type.HOURS) {\n      <quartz-cron-hour\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-hour>\n    } @else if (activeTab === type.SECONDS) {\n      <quartz-cron-second\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-second>\n    } @else if (activeTab === type.YEAR) {\n      <quartz-cron-year\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-year>\n    } @else if (activeTab === type.DAY) {\n      <quartz-cron-day\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-day>\n    }\n  </ng-template>\n</cron-container>\n", dependencies: [{ kind: "component", type: QuartzCronMonthComponent, selector: "quartz-cron-month" }, { kind: "component", type: QuartzCronMinuteComponent, selector: "quartz-cron-minute" }, { kind: "component", type: QuartzCronHourComponent, selector: "quartz-cron-hour" }, { kind: "component", type: QuartzCronSecondComponent, selector: "quartz-cron-second" }, { kind: "component", type: QuartzCronYearComponent, selector: "quartz-cron-year" }, { kind: "component", type: QuartzCronDayComponent, selector: "quartz-cron-day" }, { kind: "component", type: CronContainerComponent, selector: "cron-container", inputs: ["localization", "hostClass", "activeTab", "tabs", "hideTabs", "schema"], outputs: ["tabChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronComponent, decorators: [{
            type: Component,
            args: [{ selector: 'quartz-cron', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: CronQuartzUIService,
                            useFactory: quartzCronServiceFactory
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => QuartzCronComponent),
                            multi: true
                        }
                    ], standalone: false, template: "<cron-container\n  hostClass=\"c-quartz\"\n  [localization]=\"getLocalization()\"\n  [tabs]=\"getTabs()\"\n  [activeTab]=\"getActiveTab()\"\n  [hideTabs]=\"hideTabs\"\n  [schema]=\"schema\"\n  (tabChanged)=\"tabChanged.emit($event)\">\n\n  <ng-template\n    #content\n    let-activeTab>\n\n    @if (activeTab === type.MONTH) {\n      <quartz-cron-month\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-month>\n    } @else if (activeTab === type.MINUTES) {\n      <quartz-cron-minute\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-minute>\n    } @else if (activeTab === type.HOURS) {\n      <quartz-cron-hour\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-hour>\n    } @else if (activeTab === type.SECONDS) {\n      <quartz-cron-second\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-second>\n    } @else if (activeTab === type.YEAR) {\n      <quartz-cron-year\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-year>\n    } @else if (activeTab === type.DAY) {\n      <quartz-cron-day\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-day>\n    }\n  </ng-template>\n</cron-container>\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i1$1.CronQuartzUIService }] });

class QuartzCronModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronModule, declarations: [QuartzCronComponent], imports: [CommonModule,
            QuartzCronMonthModule,
            QuartzCronMinuteModule,
            QuartzCronHourModule,
            QuartzCronSecondModule,
            QuartzCronYearModule,
            QuartzCronDayModule,
            CronContainerModule], exports: [QuartzCronComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronModule, imports: [CommonModule,
            QuartzCronMonthModule,
            QuartzCronMinuteModule,
            QuartzCronHourModule,
            QuartzCronSecondModule,
            QuartzCronYearModule,
            QuartzCronDayModule,
            CronContainerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: QuartzCronModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        QuartzCronMonthModule,
                        QuartzCronMinuteModule,
                        QuartzCronHourModule,
                        QuartzCronSecondModule,
                        QuartzCronYearModule,
                        QuartzCronDayModule,
                        CronContainerModule
                    ],
                    declarations: [QuartzCronComponent],
                    exports: [QuartzCronComponent]
                }]
        }] });

class UnixCronIncrementComponent {
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

class UnixCronMinuteComponent extends CronTabSingleSegmentComponent {
    constructor(cronUI, cd) {
        super(Type.MINUTES);
        this.cronUI = cronUI;
        this.cd = cd;
        this.minuteCodes = getList(Segment.minutes, true);
        this.minutes = getList(Segment.minutes);
        this.api = this.cronUI.getApi(Type.MINUTES);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronMinuteComponent, deps: [{ token: i1$1.CronUnixUIService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.20", type: UnixCronMinuteComponent, isStandalone: false, selector: "unix-cron-minute", usesInheritance: true, ngImport: i0, template: "<cron-every\n  [label]=\"localization.unix.minute.every.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isEverySelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.EVERY)\"\n  (selected)=\"api.selectEvery()\">\n</cron-every>\n\n<unix-cron-increment\n  [label]=\"localization.unix.minute.increment.label1\"\n  [label2]=\"localization.unix.minute.increment.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isIncrementSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.INCREMENT)\"\n  [disabledControls]=\"api.isIncrementControlsDisabled()\"\n  [primaryOptions]=\"minuteCodes\"\n  [primaryValue]=\"api.getIncrementPrimaryValue()\"\n  (selected)=\"api.selectIncrement()\"\n  (primaryValueChanged)=\"api.setIncrementPrimaryValue($event)\">\n</unix-cron-increment>\n\n<cron-and\n  [label]=\"localization.unix.minute.and.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isAndSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.AND)\"\n  [options]=\"minutes\"\n  [disabledControls]=\"api.isAndControlsDisabled()\"\n  [isValueSelected]=\"api.isSelectedAndValue\"\n  [selectValue]=\"api.selectAndValue\"\n  (selected)=\"api.selectAnd()\">\n</cron-and>\n\n<cron-range\n  [label]=\"localization.unix.minute.range.label1\"\n  [label2]=\"localization.unix.minute.range.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isRangeControlsDisabled()\"\n  [primaryOptions]=\"minutes\"\n  [secondaryOptions]=\"minutes\"\n  [primaryValue]=\"api.getRangePrimaryValue()\"\n  [secondaryValue]=\"api.getRangeSecondaryValue()\"\n  (selected)=\"api.selectRange()\"\n  (primaryValueChanged)=\"api.setRangePrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setRangeSecondaryValue($event)\">\n</cron-range>\n", dependencies: [{ kind: "component", type: CronEveryComponent, selector: "cron-every", inputs: ["checked", "disabled", "label", "segmentId", "schema"], outputs: ["selected"] }, { kind: "component", type: CronRangeComponent, selector: "cron-range", inputs: ["segmentId", "checked", "disabled", "disabledControls", "label", "label2", "primaryValue", "primaryOptions", "secondaryValue", "secondaryOptions", "schema"], outputs: ["selected", "primaryValueChanged", "secondaryValueChanged"] }, { kind: "component", type: CronAndComponent, selector: "cron-and", inputs: ["checked", "disabled", "disabledControls", "gridSize", "label", "segmentId", "options", "isValueSelected", "selectValue", "schema"], outputs: ["selected"] }, { kind: "component", type: UnixCronIncrementComponent, selector: "unix-cron-increment", inputs: ["segmentId", "checked", "disabled", "disabledControls", "label", "label2", "primaryValue", "primaryOptions", "schema"], outputs: ["selected", "primaryValueChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronMinuteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'unix-cron-minute', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<cron-every\n  [label]=\"localization.unix.minute.every.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isEverySelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.EVERY)\"\n  (selected)=\"api.selectEvery()\">\n</cron-every>\n\n<unix-cron-increment\n  [label]=\"localization.unix.minute.increment.label1\"\n  [label2]=\"localization.unix.minute.increment.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isIncrementSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.INCREMENT)\"\n  [disabledControls]=\"api.isIncrementControlsDisabled()\"\n  [primaryOptions]=\"minuteCodes\"\n  [primaryValue]=\"api.getIncrementPrimaryValue()\"\n  (selected)=\"api.selectIncrement()\"\n  (primaryValueChanged)=\"api.setIncrementPrimaryValue($event)\">\n</unix-cron-increment>\n\n<cron-and\n  [label]=\"localization.unix.minute.and.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isAndSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.AND)\"\n  [options]=\"minutes\"\n  [disabledControls]=\"api.isAndControlsDisabled()\"\n  [isValueSelected]=\"api.isSelectedAndValue\"\n  [selectValue]=\"api.selectAndValue\"\n  (selected)=\"api.selectAnd()\">\n</cron-and>\n\n<cron-range\n  [label]=\"localization.unix.minute.range.label1\"\n  [label2]=\"localization.unix.minute.range.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isRangeControlsDisabled()\"\n  [primaryOptions]=\"minutes\"\n  [secondaryOptions]=\"minutes\"\n  [primaryValue]=\"api.getRangePrimaryValue()\"\n  [secondaryValue]=\"api.getRangeSecondaryValue()\"\n  (selected)=\"api.selectRange()\"\n  (primaryValueChanged)=\"api.setRangePrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setRangeSecondaryValue($event)\">\n</cron-range>\n" }]
        }], ctorParameters: () => [{ type: i1$1.CronUnixUIService }, { type: i0.ChangeDetectorRef }] });

class UnixCronIncrementModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronIncrementModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: UnixCronIncrementModule, declarations: [UnixCronIncrementComponent], imports: [CommonModule], exports: [UnixCronIncrementComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronIncrementModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronIncrementModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [UnixCronIncrementComponent],
                    exports: [UnixCronIncrementComponent]
                }]
        }] });

class UnixCronMinuteModule {
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

class UnixCronMonthComponent extends CronTabSingleSegmentComponent {
    constructor(cronUI, cd) {
        super(Type.MONTH);
        this.cronUI = cronUI;
        this.cd = cd;
        this.monthCodes = getMonthCodes();
        this.monthes = getList(Segment.month);
        this.incrementPrimaryOptions = this.monthes.map((v, i) => ({
            ...v,
            label: i + 1
        }));
        this.api = this.cronUI.getApi(Type.MONTH);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronMonthComponent, deps: [{ token: i1$1.CronUnixUIService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.20", type: UnixCronMonthComponent, isStandalone: false, selector: "unix-cron-month", usesInheritance: true, ngImport: i0, template: "<cron-every\n  [label]=\"localization.unix.month.every.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isEverySelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.EVERY)\"\n  (selected)=\"api.selectEvery()\">\n</cron-every>\n\n<unix-cron-increment\n  [label]=\"localization.unix.month.increment.label1\"\n  [label2]=\"localization.unix.month.increment.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isIncrementSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.INCREMENT)\"\n  [disabledControls]=\"api.isIncrementControlsDisabled()\"\n  [primaryOptions]=\"incrementPrimaryOptions\"\n  [primaryValue]=\"api.getIncrementPrimaryValue()\"\n  (selected)=\"api.selectIncrement()\"\n  (primaryValueChanged)=\"api.setIncrementPrimaryValue($event)\">\n</unix-cron-increment>\n\n<cron-and\n  gridSize=\"{{schema.col3}} {{schema.colMd2}}\"\n  [label]=\"localization.unix.month.and.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isAndSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.AND)\"\n  [options]=\"localizeList(monthCodes, localization.common.month)\"\n  [disabledControls]=\"api.isAndControlsDisabled()\"\n  [isValueSelected]=\"api.isSelectedAndValue\"\n  [selectValue]=\"api.selectAndValue\"\n  (selected)=\"api.selectAnd()\">\n</cron-and>\n\n<cron-range\n  [label]=\"localization.unix.month.range.label1\"\n  [label2]=\"localization.unix.month.range.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isRangeControlsDisabled()\"\n  [primaryOptions]=\"localizeList(monthes, localization.common.month)\"\n  [secondaryOptions]=\"localizeList(monthes, localization.common.month)\"\n  [primaryValue]=\"api.getRangePrimaryValue()\"\n  [secondaryValue]=\"api.getRangeSecondaryValue()\"\n  (selected)=\"api.selectRange()\"\n  (primaryValueChanged)=\"api.setRangePrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setRangeSecondaryValue($event)\">\n</cron-range>\n", dependencies: [{ kind: "component", type: CronEveryComponent, selector: "cron-every", inputs: ["checked", "disabled", "label", "segmentId", "schema"], outputs: ["selected"] }, { kind: "component", type: CronRangeComponent, selector: "cron-range", inputs: ["segmentId", "checked", "disabled", "disabledControls", "label", "label2", "primaryValue", "primaryOptions", "secondaryValue", "secondaryOptions", "schema"], outputs: ["selected", "primaryValueChanged", "secondaryValueChanged"] }, { kind: "component", type: CronAndComponent, selector: "cron-and", inputs: ["checked", "disabled", "disabledControls", "gridSize", "label", "segmentId", "options", "isValueSelected", "selectValue", "schema"], outputs: ["selected"] }, { kind: "component", type: UnixCronIncrementComponent, selector: "unix-cron-increment", inputs: ["segmentId", "checked", "disabled", "disabledControls", "label", "label2", "primaryValue", "primaryOptions", "schema"], outputs: ["selected", "primaryValueChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronMonthComponent, decorators: [{
            type: Component,
            args: [{ selector: 'unix-cron-month', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<cron-every\n  [label]=\"localization.unix.month.every.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isEverySelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.EVERY)\"\n  (selected)=\"api.selectEvery()\">\n</cron-every>\n\n<unix-cron-increment\n  [label]=\"localization.unix.month.increment.label1\"\n  [label2]=\"localization.unix.month.increment.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isIncrementSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.INCREMENT)\"\n  [disabledControls]=\"api.isIncrementControlsDisabled()\"\n  [primaryOptions]=\"incrementPrimaryOptions\"\n  [primaryValue]=\"api.getIncrementPrimaryValue()\"\n  (selected)=\"api.selectIncrement()\"\n  (primaryValueChanged)=\"api.setIncrementPrimaryValue($event)\">\n</unix-cron-increment>\n\n<cron-and\n  gridSize=\"{{schema.col3}} {{schema.colMd2}}\"\n  [label]=\"localization.unix.month.and.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isAndSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.AND)\"\n  [options]=\"localizeList(monthCodes, localization.common.month)\"\n  [disabledControls]=\"api.isAndControlsDisabled()\"\n  [isValueSelected]=\"api.isSelectedAndValue\"\n  [selectValue]=\"api.selectAndValue\"\n  (selected)=\"api.selectAnd()\">\n</cron-and>\n\n<cron-range\n  [label]=\"localization.unix.month.range.label1\"\n  [label2]=\"localization.unix.month.range.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isRangeControlsDisabled()\"\n  [primaryOptions]=\"localizeList(monthes, localization.common.month)\"\n  [secondaryOptions]=\"localizeList(monthes, localization.common.month)\"\n  [primaryValue]=\"api.getRangePrimaryValue()\"\n  [secondaryValue]=\"api.getRangeSecondaryValue()\"\n  (selected)=\"api.selectRange()\"\n  (primaryValueChanged)=\"api.setRangePrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setRangeSecondaryValue($event)\">\n</cron-range>\n" }]
        }], ctorParameters: () => [{ type: i1$1.CronUnixUIService }, { type: i0.ChangeDetectorRef }] });

class UnixCronMonthModule {
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

class UnixCronHourComponent extends CronTabSingleSegmentComponent {
    constructor(cronUI, cd) {
        super(Type.HOURS);
        this.cronUI = cronUI;
        this.cd = cd;
        this.hourCodes = getList(Segment.hours, true);
        this.hours = getList(Segment.hours);
        this.api = this.cronUI.getApi(Type.HOURS);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronHourComponent, deps: [{ token: i1$1.CronUnixUIService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.20", type: UnixCronHourComponent, isStandalone: false, selector: "unix-cron-hour", usesInheritance: true, ngImport: i0, template: "<cron-every\n  [label]=\"localization.unix.hour.every.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isEverySelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.EVERY)\"\n  (selected)=\"api.selectEvery()\">\n</cron-every>\n\n<unix-cron-increment\n  [label]=\"localization.unix.hour.increment.label1\"\n  [label2]=\"localization.unix.hour.increment.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isIncrementSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.INCREMENT)\"\n  [disabledControls]=\"api.isIncrementControlsDisabled()\"\n  [primaryOptions]=\"hourCodes\"\n  [primaryValue]=\"api.getIncrementPrimaryValue()\"\n  (selected)=\"api.selectIncrement()\"\n  (primaryValueChanged)=\"api.setIncrementPrimaryValue($event)\">\n</unix-cron-increment>\n\n<cron-and\n  [label]=\"localization.unix.hour.and.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isAndSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.AND)\"\n  [options]=\"hours\"\n  [disabledControls]=\"api.isAndControlsDisabled()\"\n  [isValueSelected]=\"api.isSelectedAndValue\"\n  [selectValue]=\"api.selectAndValue\"\n  (selected)=\"api.selectAnd()\">\n</cron-and>\n\n<cron-range\n  [label]=\"localization.unix.hour.range.label1\"\n  [label2]=\"localization.unix.hour.range.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isRangeControlsDisabled()\"\n  [primaryOptions]=\"hours\"\n  [secondaryOptions]=\"hours\"\n  [primaryValue]=\"api.getRangePrimaryValue()\"\n  [secondaryValue]=\"api.getRangeSecondaryValue()\"\n  (selected)=\"api.selectRange()\"\n  (primaryValueChanged)=\"api.setRangePrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setRangeSecondaryValue($event)\">\n</cron-range>\n", dependencies: [{ kind: "component", type: CronEveryComponent, selector: "cron-every", inputs: ["checked", "disabled", "label", "segmentId", "schema"], outputs: ["selected"] }, { kind: "component", type: CronRangeComponent, selector: "cron-range", inputs: ["segmentId", "checked", "disabled", "disabledControls", "label", "label2", "primaryValue", "primaryOptions", "secondaryValue", "secondaryOptions", "schema"], outputs: ["selected", "primaryValueChanged", "secondaryValueChanged"] }, { kind: "component", type: CronAndComponent, selector: "cron-and", inputs: ["checked", "disabled", "disabledControls", "gridSize", "label", "segmentId", "options", "isValueSelected", "selectValue", "schema"], outputs: ["selected"] }, { kind: "component", type: UnixCronIncrementComponent, selector: "unix-cron-increment", inputs: ["segmentId", "checked", "disabled", "disabledControls", "label", "label2", "primaryValue", "primaryOptions", "schema"], outputs: ["selected", "primaryValueChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronHourComponent, decorators: [{
            type: Component,
            args: [{ selector: 'unix-cron-hour', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<cron-every\n  [label]=\"localization.unix.hour.every.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isEverySelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.EVERY)\"\n  (selected)=\"api.selectEvery()\">\n</cron-every>\n\n<unix-cron-increment\n  [label]=\"localization.unix.hour.increment.label1\"\n  [label2]=\"localization.unix.hour.increment.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isIncrementSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.INCREMENT)\"\n  [disabledControls]=\"api.isIncrementControlsDisabled()\"\n  [primaryOptions]=\"hourCodes\"\n  [primaryValue]=\"api.getIncrementPrimaryValue()\"\n  (selected)=\"api.selectIncrement()\"\n  (primaryValueChanged)=\"api.setIncrementPrimaryValue($event)\">\n</unix-cron-increment>\n\n<cron-and\n  [label]=\"localization.unix.hour.and.label\"\n  [schema]=\"schema\"\n  [checked]=\"api.isAndSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.AND)\"\n  [options]=\"hours\"\n  [disabledControls]=\"api.isAndControlsDisabled()\"\n  [isValueSelected]=\"api.isSelectedAndValue\"\n  [selectValue]=\"api.selectAndValue\"\n  (selected)=\"api.selectAnd()\">\n</cron-and>\n\n<cron-range\n  [label]=\"localization.unix.hour.range.label1\"\n  [label2]=\"localization.unix.hour.range.label2\"\n  [schema]=\"schema\"\n  [checked]=\"api.isRangeSelected()\"\n  [disabled]=\"cronUI.isDisabled()\"\n  [segmentId]=\"genId(mode.RANGE)\"\n  [disabledControls]=\"api.isRangeControlsDisabled()\"\n  [primaryOptions]=\"hours\"\n  [secondaryOptions]=\"hours\"\n  [primaryValue]=\"api.getRangePrimaryValue()\"\n  [secondaryValue]=\"api.getRangeSecondaryValue()\"\n  (selected)=\"api.selectRange()\"\n  (primaryValueChanged)=\"api.setRangePrimaryValue($event)\"\n  (secondaryValueChanged)=\"api.setRangeSecondaryValue($event)\">\n</cron-range>\n" }]
        }], ctorParameters: () => [{ type: i1$1.CronUnixUIService }, { type: i0.ChangeDetectorRef }] });

class UnixCronHourModule {
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

class UnixCronDayComponent extends CronTabComponent {
    constructor(cronUI, cd) {
        super();
        this.cronUI = cronUI;
        this.cd = cd;
        this.api = this.cronUI.getApi(Type.DAY);
        this.segment = Segment;
        this.daysOfWeekEvery = getList(Segment.dayOfWeek, true);
        this.daysOfWeek = getList(Segment.dayOfWeek);
        this.daysOfWeekCodes = getDaysOfWeekCodes();
        this.daysOfMonthEvery = getList(Segment.dayOfMonth, true);
        this.daysOfMonth = getList(Segment.dayOfMonth);
        this.segments = [Segment.dayOfMonth, Segment.dayOfWeek];
    }
    setDayOfWeekIncrementPrimary(e) {
        const value = this.getEventValue(e);
        this.api.setDayOfWeekIncrementPrimary(value);
    }
    setDayOfWeekIncrementSecondary(e) {
        const value = this.getEventValue(e);
        this.api.setDayOfWeekIncrementSecondary(value);
    }
    setDayOfMonthIncrementPrimary(e) {
        const value = this.getEventValue(e);
        this.api.setDayOfMonthIncrementPrimary(value);
    }
    setDayOfMonthIncrementSecondary(e) {
        const value = this.getEventValue(e);
        this.api.setDayOfMonthIncrementSecondary(value);
    }
    getEventValue(e) {
        const el = e.target;
        return el.value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronDayComponent, deps: [{ token: i1$1.CronUnixUIService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: UnixCronDayComponent, isStandalone: false, selector: "unix-cron-day", usesInheritance: true, ngImport: i0, template: "<div class=\"{{schema.formGroup}} c-every-weekday c-segment\">\n  <div class=\"{{schema.check.root}} c-every-weekday-check\">\n    <input\n      class=\"{{schema.check.field}} c-every-weekday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.EVERY, segment.dayOfWeek)\"\n      [value]=\"mode.EVERY\"\n      [checked]=\"api.isEverySelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectEvery()\">\n\n    <label\n      class=\"{{schema.check.label}} c-every-weekday-option-label\"\n      [attr.for]=\"genId(mode.EVERY, segment.dayOfWeek)\">\n\n      {{localization.unix.day.every.label}}\n    </label>\n  </div>\n</div>\n\n<div class=\"{{schema.formGroup}} {{schema.formInline}} c-increment-weekday c-segment\">\n  <div class=\"{{schema.check.root}} c-increment-weekday-check\">\n    <input\n      class=\"{{schema.check.field}} c-increment-weekday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.INCREMENT, segment.dayOfWeek)\"\n      [value]=\"mode.INCREMENT\"\n      [checked]=\"api.isDayOfWeekIncrementSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfWeekIncrement()\">\n\n    <label\n      class=\"{{schema.check.label}} c-increment-weekday-option-label\"\n      [attr.for]=\"genId(mode.INCREMENT, segment.dayOfWeek)\">\n\n      {{localization.unix.day.dayOfWeekIncrement.label1}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-weekday-every\"\n    [disabled]=\"api.isDayOfWeekIncrementControlsDisabled()\"\n    (change)=\"setDayOfWeekIncrementPrimary($event)\">\n\n    @for (item of daysOfWeekEvery; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfWeekIncrementPrimary() === item.value\">\n        {{item.value}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-increment-weekday-option-label2\"\n    [attr.for]=\"genId(mode.INCREMENT, segment.dayOfWeek)\">\n    {{localization.unix.day.dayOfWeekIncrement.label2}}\n  </label>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-weekday-from\"\n    [disabled]=\"api.isDayOfWeekIncrementControlsDisabled()\"\n    (change)=\"setDayOfWeekIncrementSecondary($event)\">\n\n    @for (item of daysOfWeek; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfWeekIncrementSecondary() === item.value\">\n        {{localizeLabel(item.label, this.localization.common.dayOfWeek)}}\n      </option>\n    }\n  </select>\n</div>\n\n<div class=\"{{schema.formGroup}} {{schema.formInline}} c-increment-monthday c-segment\">\n  <div class=\"{{schema.check.root}} c-increment-monthday-check\">\n    <input\n      class=\"{{schema.check.field}} c-increment-monthday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.INCREMENT, segment.dayOfMonth)\"\n      [value]=\"mode.INCREMENT\"\n      [checked]=\"api.isDayOfMonthIncrementSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfMonthIncrement()\">\n\n    <label\n      class=\"{{schema.check.label}} c-increment-monthday-option-label\"\n      [attr.for]=\"genId(mode.INCREMENT, segment.dayOfMonth)\">\n\n      {{localization.unix.day.dayOfMonthIncrement.label1}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-monthday-every\"\n    [disabled]=\"api.isDayOfMonthIncrementControlsDisabled()\"\n    (change)=\"setDayOfMonthIncrementPrimary($event)\">\n\n    @for (item of daysOfMonth; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfMonthIncrementPrimary() === item.value\">\n        {{item.value}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-increment-monthday-option-label2\"\n    [attr.for]=\"genId(mode.INCREMENT, segment.dayOfMonth)\">\n    {{localization.unix.day.dayOfMonthIncrement.label2}}\n  </label>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-monthday-from\"\n    [disabled]=\"api.isDayOfMonthIncrementControlsDisabled()\"\n    (change)=\"setDayOfMonthIncrementSecondary($event)\">\n\n    @for (item of daysOfMonthEvery; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfMonthIncrementSecondary() === item.value\">\n\n        {{localizeLabel(item.label, localization.common.dayOfMonth)}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-increment-monthday-option-label3\"\n    [attr.for]=\"genId(mode.INCREMENT, segment.dayOfMonth)\">\n    {{localization.unix.day.dayOfMonthIncrement.label2}}\n  </label>\n</div>\n\n<div class=\"{{schema.formGroup}} c-and-weekday c-segment\">\n  <div class=\"{{schema.check.root}} c-and-weekday-check\">\n    <input\n      class=\"{{schema.check.field}} c-and-weekday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.AND, segment.dayOfWeek)\"\n      [value]=\"mode.INCREMENT\"\n      [checked]=\"api.isDayOfWeekAndSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfWeekAnd()\">\n\n    <label\n      class=\"{{schema.check.label}} c-and-weekday-option-label\"\n      [attr.for]=\"genId(mode.AND, segment.dayOfWeek)\">\n\n      {{localization.unix.day.dayOfWeekAnd.label}}\n    </label>\n  </div>\n\n  <div class=\"{{schema.check.row}} c-and-weekday-list\">\n    @for (item of daysOfWeekCodes; track item) {\n      <div\n        class=\"{{schema.col3}} {{schema.colMd2}} c-and-weekday-item\"\n        [attr.item-value]=\"item.value\">\n\n        <div class=\"{{schema.check.root}} c-and-weekday-item-check\">\n          <input\n            class=\"{{schema.check.field}} c-and-weekday-item-field\"\n            type=\"checkbox\"\n            [attr.id]=\"genId(mode.AND, segment.dayOfWeek + item.value)\"\n            [value]=\"item.value\"\n            [disabled]=\"api.isDayOfWeekAndControlsDisabled()\"\n            [checked]=\"api.isSelectedDayOfWeekAndValue(item.value)\"\n            (click)=\"api.selectDayOfWeekAndValue(item.value)\">\n\n          <label\n            class=\"{{schema.check.label}} c-and-weekday-item-label\"\n            [attr.for]=\"genId(mode.AND, segment.dayOfWeek + item.value)\">\n            {{localizeLabel(item.label, localization.common.dayOfWeek)}}\n          </label>\n        </div>\n      </div>\n    }\n  </div>\n</div>\n\n<div class=\"{{schema.formGroup}} c-and-monthday c-segment\">\n  <div class=\"{{schema.check.root}} c-and-monthday-check\">\n    <input\n      class=\"{{schema.check.field}} c-and-monthday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.AND, segment.dayOfMonth)\"\n      [value]=\"mode.INCREMENT\"\n      [checked]=\"api.isDayOfMonthAndSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfMonthAnd()\">\n\n    <label\n      class=\"{{schema.check.label}} c-and-monthday-option-label\"\n      [attr.for]=\"genId(mode.AND, segment.dayOfMonth)\">\n\n      {{localization.unix.day.dayOfMonthAnd.label}}\n    </label>\n  </div>\n\n  <div class=\"{{schema.check.row}} c-and-monthday-list\">\n    @for (item of daysOfMonth; track item) {\n      <div\n        class=\"{{schema.col2}} {{schema.colMd1}} c-and-monthday-item\"\n        [attr.item-value]=\"item.value\">\n\n        <div class=\"{{schema.check.root}} c-and-monthday-item-check\">\n          <input\n            class=\"{{schema.check.field}} c-and-monthday-item-field\"\n            type=\"checkbox\"\n            [attr.id]=\"genId(mode.AND, segment.dayOfMonth + item.value)\"\n            [value]=\"item.value\"\n            [disabled]=\"api.isDayOfMonthAndControlsDisabled()\"\n            [checked]=\"api.isSelectedDayOfMonthAndValue(item.value)\"\n            (click)=\"api.selectDayOfMonthAndValue(item.value)\">\n\n          <label\n            class=\"{{schema.check.label}} c-and-monthday-item-label\"\n            [attr.for]=\"genId(mode.AND, segment.dayOfMonth + item.value)\">\n            {{item.label}}\n          </label>\n        </div>\n      </div>\n    }\n  </div>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronDayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'unix-cron-day', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<div class=\"{{schema.formGroup}} c-every-weekday c-segment\">\n  <div class=\"{{schema.check.root}} c-every-weekday-check\">\n    <input\n      class=\"{{schema.check.field}} c-every-weekday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.EVERY, segment.dayOfWeek)\"\n      [value]=\"mode.EVERY\"\n      [checked]=\"api.isEverySelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectEvery()\">\n\n    <label\n      class=\"{{schema.check.label}} c-every-weekday-option-label\"\n      [attr.for]=\"genId(mode.EVERY, segment.dayOfWeek)\">\n\n      {{localization.unix.day.every.label}}\n    </label>\n  </div>\n</div>\n\n<div class=\"{{schema.formGroup}} {{schema.formInline}} c-increment-weekday c-segment\">\n  <div class=\"{{schema.check.root}} c-increment-weekday-check\">\n    <input\n      class=\"{{schema.check.field}} c-increment-weekday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.INCREMENT, segment.dayOfWeek)\"\n      [value]=\"mode.INCREMENT\"\n      [checked]=\"api.isDayOfWeekIncrementSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfWeekIncrement()\">\n\n    <label\n      class=\"{{schema.check.label}} c-increment-weekday-option-label\"\n      [attr.for]=\"genId(mode.INCREMENT, segment.dayOfWeek)\">\n\n      {{localization.unix.day.dayOfWeekIncrement.label1}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-weekday-every\"\n    [disabled]=\"api.isDayOfWeekIncrementControlsDisabled()\"\n    (change)=\"setDayOfWeekIncrementPrimary($event)\">\n\n    @for (item of daysOfWeekEvery; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfWeekIncrementPrimary() === item.value\">\n        {{item.value}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-increment-weekday-option-label2\"\n    [attr.for]=\"genId(mode.INCREMENT, segment.dayOfWeek)\">\n    {{localization.unix.day.dayOfWeekIncrement.label2}}\n  </label>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-weekday-from\"\n    [disabled]=\"api.isDayOfWeekIncrementControlsDisabled()\"\n    (change)=\"setDayOfWeekIncrementSecondary($event)\">\n\n    @for (item of daysOfWeek; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfWeekIncrementSecondary() === item.value\">\n        {{localizeLabel(item.label, this.localization.common.dayOfWeek)}}\n      </option>\n    }\n  </select>\n</div>\n\n<div class=\"{{schema.formGroup}} {{schema.formInline}} c-increment-monthday c-segment\">\n  <div class=\"{{schema.check.root}} c-increment-monthday-check\">\n    <input\n      class=\"{{schema.check.field}} c-increment-monthday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.INCREMENT, segment.dayOfMonth)\"\n      [value]=\"mode.INCREMENT\"\n      [checked]=\"api.isDayOfMonthIncrementSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfMonthIncrement()\">\n\n    <label\n      class=\"{{schema.check.label}} c-increment-monthday-option-label\"\n      [attr.for]=\"genId(mode.INCREMENT, segment.dayOfMonth)\">\n\n      {{localization.unix.day.dayOfMonthIncrement.label1}}\n    </label>\n  </div>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-monthday-every\"\n    [disabled]=\"api.isDayOfMonthIncrementControlsDisabled()\"\n    (change)=\"setDayOfMonthIncrementPrimary($event)\">\n\n    @for (item of daysOfMonth; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfMonthIncrementPrimary() === item.value\">\n        {{item.value}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-increment-monthday-option-label2\"\n    [attr.for]=\"genId(mode.INCREMENT, segment.dayOfMonth)\">\n    {{localization.unix.day.dayOfMonthIncrement.label2}}\n  </label>\n\n  <select\n    class=\"{{schema.formControl}} {{schema.mx1}} c-increment-monthday-from\"\n    [disabled]=\"api.isDayOfMonthIncrementControlsDisabled()\"\n    (change)=\"setDayOfMonthIncrementSecondary($event)\">\n\n    @for (item of daysOfMonthEvery; track item) {\n      <option\n        [value]=\"item.value\"\n        [selected]=\"api.getDayOfMonthIncrementSecondary() === item.value\">\n\n        {{localizeLabel(item.label, localization.common.dayOfMonth)}}\n      </option>\n    }\n  </select>\n\n  <label\n    class=\"c-increment-monthday-option-label3\"\n    [attr.for]=\"genId(mode.INCREMENT, segment.dayOfMonth)\">\n    {{localization.unix.day.dayOfMonthIncrement.label2}}\n  </label>\n</div>\n\n<div class=\"{{schema.formGroup}} c-and-weekday c-segment\">\n  <div class=\"{{schema.check.root}} c-and-weekday-check\">\n    <input\n      class=\"{{schema.check.field}} c-and-weekday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.AND, segment.dayOfWeek)\"\n      [value]=\"mode.INCREMENT\"\n      [checked]=\"api.isDayOfWeekAndSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfWeekAnd()\">\n\n    <label\n      class=\"{{schema.check.label}} c-and-weekday-option-label\"\n      [attr.for]=\"genId(mode.AND, segment.dayOfWeek)\">\n\n      {{localization.unix.day.dayOfWeekAnd.label}}\n    </label>\n  </div>\n\n  <div class=\"{{schema.check.row}} c-and-weekday-list\">\n    @for (item of daysOfWeekCodes; track item) {\n      <div\n        class=\"{{schema.col3}} {{schema.colMd2}} c-and-weekday-item\"\n        [attr.item-value]=\"item.value\">\n\n        <div class=\"{{schema.check.root}} c-and-weekday-item-check\">\n          <input\n            class=\"{{schema.check.field}} c-and-weekday-item-field\"\n            type=\"checkbox\"\n            [attr.id]=\"genId(mode.AND, segment.dayOfWeek + item.value)\"\n            [value]=\"item.value\"\n            [disabled]=\"api.isDayOfWeekAndControlsDisabled()\"\n            [checked]=\"api.isSelectedDayOfWeekAndValue(item.value)\"\n            (click)=\"api.selectDayOfWeekAndValue(item.value)\">\n\n          <label\n            class=\"{{schema.check.label}} c-and-weekday-item-label\"\n            [attr.for]=\"genId(mode.AND, segment.dayOfWeek + item.value)\">\n            {{localizeLabel(item.label, localization.common.dayOfWeek)}}\n          </label>\n        </div>\n      </div>\n    }\n  </div>\n</div>\n\n<div class=\"{{schema.formGroup}} c-and-monthday c-segment\">\n  <div class=\"{{schema.check.root}} c-and-monthday-check\">\n    <input\n      class=\"{{schema.check.field}} c-and-monthday-option\"\n      type=\"radio\"\n      [attr.id]=\"genId(mode.AND, segment.dayOfMonth)\"\n      [value]=\"mode.INCREMENT\"\n      [checked]=\"api.isDayOfMonthAndSelected()\"\n      [disabled]=\"cronUI.isDisabled()\"\n      (change)=\"api.selectDayOfMonthAnd()\">\n\n    <label\n      class=\"{{schema.check.label}} c-and-monthday-option-label\"\n      [attr.for]=\"genId(mode.AND, segment.dayOfMonth)\">\n\n      {{localization.unix.day.dayOfMonthAnd.label}}\n    </label>\n  </div>\n\n  <div class=\"{{schema.check.row}} c-and-monthday-list\">\n    @for (item of daysOfMonth; track item) {\n      <div\n        class=\"{{schema.col2}} {{schema.colMd1}} c-and-monthday-item\"\n        [attr.item-value]=\"item.value\">\n\n        <div class=\"{{schema.check.root}} c-and-monthday-item-check\">\n          <input\n            class=\"{{schema.check.field}} c-and-monthday-item-field\"\n            type=\"checkbox\"\n            [attr.id]=\"genId(mode.AND, segment.dayOfMonth + item.value)\"\n            [value]=\"item.value\"\n            [disabled]=\"api.isDayOfMonthAndControlsDisabled()\"\n            [checked]=\"api.isSelectedDayOfMonthAndValue(item.value)\"\n            (click)=\"api.selectDayOfMonthAndValue(item.value)\">\n\n          <label\n            class=\"{{schema.check.label}} c-and-monthday-item-label\"\n            [attr.for]=\"genId(mode.AND, segment.dayOfMonth + item.value)\">\n            {{item.label}}\n          </label>\n        </div>\n      </div>\n    }\n  </div>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1$1.CronUnixUIService }, { type: i0.ChangeDetectorRef }] });

class UnixCronDayModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronDayModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: UnixCronDayModule, declarations: [UnixCronDayComponent], imports: [CommonModule], exports: [UnixCronDayComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronDayModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronDayModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [UnixCronDayComponent],
                    exports: [UnixCronDayComponent]
                }]
        }] });

function unixCronServiceFactory() {
    return new CronUnixUIService();
}
;
class UnixCronComponent extends CronHostComponent {
    constructor(cd, cronUnixUI) {
        super(cd, cronUnixUI, [Type.MINUTES, Type.HOURS, Type.DAY, Type.MONTH], cronBootstrap4);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1$1.CronUnixUIService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: UnixCronComponent, isStandalone: false, selector: "unix-cron", providers: [
            {
                provide: CronUnixUIService,
                useFactory: unixCronServiceFactory
            },
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UnixCronComponent),
                multi: true
            }
        ], usesInheritance: true, ngImport: i0, template: "<cron-container\n  hostClass=\"c-unix\"\n  [localization]=\"getLocalization()\"\n  [tabs]=\"getTabs()\"\n  [activeTab]=\"getActiveTab()\"\n  [hideTabs]=\"hideTabs\"\n  [schema]=\"schema\"\n  (tabChanged)=\"tabChanged.emit($event)\">\n\n  <ng-template\n    #content\n    let-activeTab>\n\n    @if (activeTab === type.MONTH) {\n      <unix-cron-month\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </unix-cron-month>\n    } @else if (activeTab === type.MINUTES) {\n      <unix-cron-minute\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </unix-cron-minute>\n    } @else if (activeTab === type.HOURS) {\n      <unix-cron-hour\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </unix-cron-hour>\n    } @else if (activeTab === type.DAY) {\n      <unix-cron-day\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </unix-cron-day>\n    }\n  </ng-template>\n</cron-container>\n", dependencies: [{ kind: "component", type: UnixCronMinuteComponent, selector: "unix-cron-minute" }, { kind: "component", type: UnixCronMonthComponent, selector: "unix-cron-month" }, { kind: "component", type: UnixCronHourComponent, selector: "unix-cron-hour" }, { kind: "component", type: UnixCronDayComponent, selector: "unix-cron-day" }, { kind: "component", type: CronContainerComponent, selector: "cron-container", inputs: ["localization", "hostClass", "activeTab", "tabs", "hideTabs", "schema"], outputs: ["tabChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronComponent, decorators: [{
            type: Component,
            args: [{ selector: 'unix-cron', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: CronUnixUIService,
                            useFactory: unixCronServiceFactory
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UnixCronComponent),
                            multi: true
                        }
                    ], standalone: false, template: "<cron-container\n  hostClass=\"c-unix\"\n  [localization]=\"getLocalization()\"\n  [tabs]=\"getTabs()\"\n  [activeTab]=\"getActiveTab()\"\n  [hideTabs]=\"hideTabs\"\n  [schema]=\"schema\"\n  (tabChanged)=\"tabChanged.emit($event)\">\n\n  <ng-template\n    #content\n    let-activeTab>\n\n    @if (activeTab === type.MONTH) {\n      <unix-cron-month\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </unix-cron-month>\n    } @else if (activeTab === type.MINUTES) {\n      <unix-cron-minute\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </unix-cron-minute>\n    } @else if (activeTab === type.HOURS) {\n      <unix-cron-hour\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </unix-cron-hour>\n    } @else if (activeTab === type.DAY) {\n      <unix-cron-day\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </unix-cron-day>\n    }\n  </ng-template>\n</cron-container>\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i1$1.CronUnixUIService }] });

class UnixCronModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: UnixCronModule, declarations: [UnixCronComponent], imports: [CommonModule,
            UnixCronMinuteModule,
            UnixCronMonthModule,
            UnixCronHourModule,
            UnixCronDayModule,
            CronContainerModule], exports: [UnixCronComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronModule, imports: [CommonModule,
            UnixCronMinuteModule,
            UnixCronMonthModule,
            UnixCronHourModule,
            UnixCronDayModule,
            CronContainerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: UnixCronModule, decorators: [{
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
                    declarations: [UnixCronComponent],
                    exports: [UnixCronComponent]
                }]
        }] });

function bs5QuartzCronServiceFactory() {
    return new CronQuartzUIService();
}
;
class Bs5QuartzCronComponent extends CronHostComponent {
    constructor(cd, cronQuartzUI) {
        super(cd, cronQuartzUI, [
            Type.SECONDS,
            Type.MINUTES,
            Type.HOURS,
            Type.DAY,
            Type.MONTH,
            Type.YEAR
        ], cronBootstrap5);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: Bs5QuartzCronComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1$1.CronQuartzUIService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: Bs5QuartzCronComponent, isStandalone: false, selector: "bs5-quartz-cron", providers: [
            {
                provide: CronQuartzUIService,
                useFactory: bs5QuartzCronServiceFactory
            },
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => Bs5QuartzCronComponent),
                multi: true
            }
        ], usesInheritance: true, ngImport: i0, template: "<cron-container\n  hostClass=\"c-quartz\"\n  [localization]=\"getLocalization()\"\n  [tabs]=\"getTabs()\"\n  [activeTab]=\"getActiveTab()\"\n  [hideTabs]=\"hideTabs\"\n  [schema]=\"schema\"\n  (tabChanged)=\"tabChanged.emit($event)\">\n\n  <ng-template\n    #content\n    let-activeTab>\n\n    @if (activeTab === type.MONTH) {\n      <quartz-cron-month\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-month>\n    } @else if (activeTab === type.MINUTES) {\n      <quartz-cron-minute\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-minute>\n    } @else if (activeTab === type.HOURS) {\n      <quartz-cron-hour\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-hour>\n    } @else if (activeTab === type.SECONDS) {\n      <quartz-cron-second\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-second>\n    } @else if (activeTab === type.YEAR) {\n      <quartz-cron-year\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-year>\n    } @else if (activeTab === type.DAY) {\n      <quartz-cron-day\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-day>\n    }\n  </ng-template>\n</cron-container>\n", dependencies: [{ kind: "component", type: QuartzCronMonthComponent, selector: "quartz-cron-month" }, { kind: "component", type: QuartzCronMinuteComponent, selector: "quartz-cron-minute" }, { kind: "component", type: QuartzCronHourComponent, selector: "quartz-cron-hour" }, { kind: "component", type: QuartzCronSecondComponent, selector: "quartz-cron-second" }, { kind: "component", type: QuartzCronYearComponent, selector: "quartz-cron-year" }, { kind: "component", type: QuartzCronDayComponent, selector: "quartz-cron-day" }, { kind: "component", type: CronContainerComponent, selector: "cron-container", inputs: ["localization", "hostClass", "activeTab", "tabs", "hideTabs", "schema"], outputs: ["tabChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: Bs5QuartzCronComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bs5-quartz-cron', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: CronQuartzUIService,
                            useFactory: bs5QuartzCronServiceFactory
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => Bs5QuartzCronComponent),
                            multi: true
                        }
                    ], standalone: false, template: "<cron-container\n  hostClass=\"c-quartz\"\n  [localization]=\"getLocalization()\"\n  [tabs]=\"getTabs()\"\n  [activeTab]=\"getActiveTab()\"\n  [hideTabs]=\"hideTabs\"\n  [schema]=\"schema\"\n  (tabChanged)=\"tabChanged.emit($event)\">\n\n  <ng-template\n    #content\n    let-activeTab>\n\n    @if (activeTab === type.MONTH) {\n      <quartz-cron-month\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-month>\n    } @else if (activeTab === type.MINUTES) {\n      <quartz-cron-minute\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-minute>\n    } @else if (activeTab === type.HOURS) {\n      <quartz-cron-hour\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-hour>\n    } @else if (activeTab === type.SECONDS) {\n      <quartz-cron-second\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-second>\n    } @else if (activeTab === type.YEAR) {\n      <quartz-cron-year\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-year>\n    } @else if (activeTab === type.DAY) {\n      <quartz-cron-day\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </quartz-cron-day>\n    }\n  </ng-template>\n</cron-container>\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i1$1.CronQuartzUIService }] });

class Bs5QuartzCronModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: Bs5QuartzCronModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.20", ngImport: i0, type: Bs5QuartzCronModule, declarations: [Bs5QuartzCronComponent], imports: [CommonModule,
            QuartzCronMonthModule,
            QuartzCronMinuteModule,
            QuartzCronHourModule,
            QuartzCronSecondModule,
            QuartzCronYearModule,
            QuartzCronDayModule,
            CronContainerModule], exports: [Bs5QuartzCronComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: Bs5QuartzCronModule, imports: [CommonModule,
            QuartzCronMonthModule,
            QuartzCronMinuteModule,
            QuartzCronHourModule,
            QuartzCronSecondModule,
            QuartzCronYearModule,
            QuartzCronDayModule,
            CronContainerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: Bs5QuartzCronModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        QuartzCronMonthModule,
                        QuartzCronMinuteModule,
                        QuartzCronHourModule,
                        QuartzCronSecondModule,
                        QuartzCronYearModule,
                        QuartzCronDayModule,
                        CronContainerModule
                    ],
                    declarations: [Bs5QuartzCronComponent],
                    exports: [Bs5QuartzCronComponent]
                }]
        }] });

function bs5UnixCronServiceFactory() {
    return new CronUnixUIService();
}
;
class Bs5UnixCronComponent extends CronHostComponent {
    constructor(cd, cronUnixUI) {
        super(cd, cronUnixUI, [Type.MINUTES, Type.HOURS, Type.DAY, Type.MONTH], cronBootstrap5);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: Bs5UnixCronComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1$1.CronUnixUIService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: Bs5UnixCronComponent, isStandalone: false, selector: "bs5-unix-cron", providers: [
            {
                provide: CronUnixUIService,
                useFactory: bs5UnixCronServiceFactory
            },
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => Bs5UnixCronComponent),
                multi: true
            }
        ], usesInheritance: true, ngImport: i0, template: "<cron-container\n  hostClass=\"c-unix\"\n  [localization]=\"getLocalization()\"\n  [tabs]=\"getTabs()\"\n  [activeTab]=\"getActiveTab()\"\n  [hideTabs]=\"hideTabs\"\n  [schema]=\"schema\"\n  (tabChanged)=\"tabChanged.emit($event)\">\n\n  <ng-template\n    #content\n    let-activeTab>\n\n    @if (activeTab === type.MONTH) {\n      <unix-cron-month\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </unix-cron-month>\n    } @else if (activeTab === type.MINUTES) {\n      <unix-cron-minute\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </unix-cron-minute>\n    } @else if (activeTab === type.HOURS) {\n      <unix-cron-hour\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </unix-cron-hour>\n    } @else if (activeTab === type.DAY) {\n      <unix-cron-day\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </unix-cron-day>\n    }\n  </ng-template>\n</cron-container>\n", dependencies: [{ kind: "component", type: UnixCronMinuteComponent, selector: "unix-cron-minute" }, { kind: "component", type: UnixCronMonthComponent, selector: "unix-cron-month" }, { kind: "component", type: UnixCronHourComponent, selector: "unix-cron-hour" }, { kind: "component", type: UnixCronDayComponent, selector: "unix-cron-day" }, { kind: "component", type: CronContainerComponent, selector: "cron-container", inputs: ["localization", "hostClass", "activeTab", "tabs", "hideTabs", "schema"], outputs: ["tabChanged"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: Bs5UnixCronComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bs5-unix-cron', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: CronUnixUIService,
                            useFactory: bs5UnixCronServiceFactory
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => Bs5UnixCronComponent),
                            multi: true
                        }
                    ], standalone: false, template: "<cron-container\n  hostClass=\"c-unix\"\n  [localization]=\"getLocalization()\"\n  [tabs]=\"getTabs()\"\n  [activeTab]=\"getActiveTab()\"\n  [hideTabs]=\"hideTabs\"\n  [schema]=\"schema\"\n  (tabChanged)=\"tabChanged.emit($event)\">\n\n  <ng-template\n    #content\n    let-activeTab>\n\n    @if (activeTab === type.MONTH) {\n      <unix-cron-month\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </unix-cron-month>\n    } @else if (activeTab === type.MINUTES) {\n      <unix-cron-minute\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </unix-cron-minute>\n    } @else if (activeTab === type.HOURS) {\n      <unix-cron-hour\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </unix-cron-hour>\n    } @else if (activeTab === type.DAY) {\n      <unix-cron-day\n        [localization]=\"getLocalization()\"\n        [schema]=\"schema\"\n        (changed)=\"applyChanges()\">\n      </unix-cron-day>\n    }\n  </ng-template>\n</cron-container>\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i1$1.CronUnixUIService }] });

class Bs5UnixCronModule {
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

/*
 * Public API Surface of ng-cron
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Bs5QuartzCronComponent, Bs5QuartzCronModule, Bs5UnixCronComponent, Bs5UnixCronModule, QuartzCronComponent, QuartzCronModule, UnixCronComponent, UnixCronModule, bs5QuartzCronServiceFactory, bs5UnixCronServiceFactory, quartzCronServiceFactory, unixCronServiceFactory };
//# sourceMappingURL=brenovit-ng-cron.mjs.map
