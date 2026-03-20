import { EventEmitter } from '@angular/core';
import { Mode } from '@sbzen/cron-core';
import { CronClassesSchema } from './../../styles';
import * as i0 from "@angular/core";
export declare class CronRangeComponent {
    readonly selected: EventEmitter<void>;
    readonly primaryValueChanged: EventEmitter<string>;
    readonly secondaryValueChanged: EventEmitter<string>;
    segmentId: string;
    checked: boolean;
    disabled: boolean;
    disabledControls: boolean;
    label: string;
    label2: string;
    primaryValue: string;
    primaryOptions: {
        label: string | number;
        value: string;
    }[];
    secondaryValue: string;
    secondaryOptions: {
        label: string | number;
        value: string;
    }[];
    schema: CronClassesSchema;
    readonly mode = Mode.RANGE;
    setPrimaryValue(e: Event): void;
    setSecondaryValue(e: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CronRangeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CronRangeComponent, "cron-range", never, { "segmentId": { "alias": "segmentId"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "disabledControls": { "alias": "disabledControls"; "required": false; }; "label": { "alias": "label"; "required": false; }; "label2": { "alias": "label2"; "required": false; }; "primaryValue": { "alias": "primaryValue"; "required": false; }; "primaryOptions": { "alias": "primaryOptions"; "required": false; }; "secondaryValue": { "alias": "secondaryValue"; "required": false; }; "secondaryOptions": { "alias": "secondaryOptions"; "required": false; }; "schema": { "alias": "schema"; "required": false; }; }, { "selected": "selected"; "primaryValueChanged": "primaryValueChanged"; "secondaryValueChanged": "secondaryValueChanged"; }, never, never, false, never>;
}
