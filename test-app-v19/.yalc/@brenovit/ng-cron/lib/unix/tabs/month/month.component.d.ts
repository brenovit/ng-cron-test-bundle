import { ChangeDetectorRef } from '@angular/core';
import { CronUnixUIService } from '@sbzen/cron-core';
import { CronTabSingleSegmentComponent } from './../../../cron-tab-single-segment.abstract';
import * as i0 from "@angular/core";
export declare class UnixCronMonthComponent extends CronTabSingleSegmentComponent {
    readonly cronUI: CronUnixUIService;
    protected readonly cd: ChangeDetectorRef;
    readonly monthCodes: {
        value: import("@sbzen/cron-core/enums").MonthCode;
        label: import("@sbzen/cron-core/enums").Month;
    }[];
    readonly monthes: {
        value: string;
        label: string;
    }[];
    readonly incrementPrimaryOptions: {
        label: number;
        value: string;
    }[];
    readonly api: any;
    constructor(cronUI: CronUnixUIService, cd: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<UnixCronMonthComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UnixCronMonthComponent, "unix-cron-month", never, {}, {}, never, never, false, never>;
}
