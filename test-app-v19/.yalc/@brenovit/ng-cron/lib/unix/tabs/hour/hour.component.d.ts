import { ChangeDetectorRef } from '@angular/core';
import { CronUnixUIService } from '@sbzen/cron-core';
import { CronTabSingleSegmentComponent } from './../../../cron-tab-single-segment.abstract';
import * as i0 from "@angular/core";
export declare class UnixCronHourComponent extends CronTabSingleSegmentComponent {
    readonly cronUI: CronUnixUIService;
    protected readonly cd: ChangeDetectorRef;
    readonly hourCodes: {
        value: string;
        label: string;
    }[];
    readonly hours: {
        value: string;
        label: string;
    }[];
    readonly api: any;
    constructor(cronUI: CronUnixUIService, cd: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<UnixCronHourComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UnixCronHourComponent, "unix-cron-hour", never, {}, {}, never, never, false, never>;
}
