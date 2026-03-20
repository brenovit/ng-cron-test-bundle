import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Mode } from '@sbzen/cron-core';
import { CronClassesSchema } from './../../styles';
import * as i0 from "@angular/core";
export declare class CronAndComponent {
    private readonly cd;
    readonly selected: EventEmitter<void>;
    checked: boolean;
    disabled: boolean;
    disabledControls: boolean;
    gridSize?: string;
    label: string;
    segmentId: string;
    options: {
        label: string | number;
        value: string;
    }[];
    isValueSelected: (value: string) => boolean;
    selectValue: (value: string) => boolean;
    schema: CronClassesSchema;
    readonly mode = Mode.AND;
    constructor(cd: ChangeDetectorRef);
    changeValue(e: Event, value: string): void;
    detectChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CronAndComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CronAndComponent, "cron-and", never, { "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "disabledControls": { "alias": "disabledControls"; "required": false; }; "gridSize": { "alias": "gridSize"; "required": false; }; "label": { "alias": "label"; "required": false; }; "segmentId": { "alias": "segmentId"; "required": false; }; "options": { "alias": "options"; "required": false; }; "isValueSelected": { "alias": "isValueSelected"; "required": false; }; "selectValue": { "alias": "selectValue"; "required": false; }; "schema": { "alias": "schema"; "required": false; }; }, { "selected": "selected"; }, never, never, false, never>;
}
