import { ChangeDetectorRef } from '@angular/core';
import { CronUnixUIService } from '@sbzen/cron-core';
import { CronTabSingleSegmentComponent } from './../../../cron-tab-single-segment.abstract';
import * as i0 from "@angular/core";
export declare class UnixCronMinuteComponent extends CronTabSingleSegmentComponent {
    readonly cronUI: CronUnixUIService;
    protected readonly cd: ChangeDetectorRef;
    readonly minuteCodes: {
        value: string;
        label: string;
    }[];
    readonly minutes: {
        value: string;
        label: string;
    }[];
    readonly api: any;
    constructor(cronUI: CronUnixUIService, cd: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<UnixCronMinuteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UnixCronMinuteComponent, "unix-cron-minute", never, {}, {}, never, never, false, never>;
}
