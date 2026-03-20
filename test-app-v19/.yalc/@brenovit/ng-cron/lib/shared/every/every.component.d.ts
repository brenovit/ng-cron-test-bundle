import { EventEmitter } from '@angular/core';
import { Mode } from '@sbzen/cron-core';
import { CronClassesSchema } from './../../styles';
import * as i0 from "@angular/core";
export declare class CronEveryComponent {
    readonly selected: EventEmitter<void>;
    checked: boolean;
    disabled: boolean;
    label: string;
    segmentId: string;
    schema: CronClassesSchema;
    readonly mode = Mode.EVERY;
    static ɵfac: i0.ɵɵFactoryDeclaration<CronEveryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CronEveryComponent, "cron-every", never, { "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "label": { "alias": "label"; "required": false; }; "segmentId": { "alias": "segmentId"; "required": false; }; "schema": { "alias": "schema"; "required": false; }; }, { "selected": "selected"; }, never, never, false, never>;
}
