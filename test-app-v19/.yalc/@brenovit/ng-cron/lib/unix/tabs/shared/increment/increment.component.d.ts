import { EventEmitter } from '@angular/core';
import { Mode } from '@sbzen/cron-core';
import { CronClassesSchema } from './../../../../styles';
import * as i0 from "@angular/core";
export declare class UnixCronIncrementComponent {
    readonly selected: EventEmitter<void>;
    readonly primaryValueChanged: EventEmitter<string>;
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
    schema: CronClassesSchema;
    readonly mode = Mode.INCREMENT;
    setPrimaryValue(e: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UnixCronIncrementComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UnixCronIncrementComponent, "unix-cron-increment", never, { "segmentId": { "alias": "segmentId"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "disabledControls": { "alias": "disabledControls"; "required": false; }; "label": { "alias": "label"; "required": false; }; "label2": { "alias": "label2"; "required": false; }; "primaryValue": { "alias": "primaryValue"; "required": false; }; "primaryOptions": { "alias": "primaryOptions"; "required": false; }; "schema": { "alias": "schema"; "required": false; }; }, { "selected": "selected"; "primaryValueChanged": "primaryValueChanged"; }, never, never, false, never>;
}
