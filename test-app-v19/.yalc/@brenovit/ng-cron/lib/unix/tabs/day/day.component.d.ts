import { ChangeDetectorRef } from '@angular/core';
import { Segment, CronUnixUIService } from '@sbzen/cron-core';
import { CronTabComponent } from './../../../cron-tab.abstract';
import * as i0 from "@angular/core";
export declare class UnixCronDayComponent extends CronTabComponent {
    readonly cronUI: CronUnixUIService;
    protected readonly cd: ChangeDetectorRef;
    protected readonly segments: Segment[];
    readonly api: any;
    readonly segment: typeof Segment;
    readonly daysOfWeekEvery: {
        value: string;
        label: string;
    }[];
    readonly daysOfWeek: {
        value: string;
        label: string;
    }[];
    readonly daysOfWeekCodes: {
        value: import("@sbzen/cron-core/enums").WeekDayCode;
        label: import("@sbzen/cron-core/enums").WeekDay;
    }[];
    readonly daysOfMonthEvery: {
        value: string;
        label: string;
    }[];
    readonly daysOfMonth: {
        value: string;
        label: string;
    }[];
    constructor(cronUI: CronUnixUIService, cd: ChangeDetectorRef);
    setDayOfWeekIncrementPrimary(e: Event): void;
    setDayOfWeekIncrementSecondary(e: Event): void;
    setDayOfMonthIncrementPrimary(e: Event): void;
    setDayOfMonthIncrementSecondary(e: Event): void;
    private getEventValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<UnixCronDayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UnixCronDayComponent, "unix-cron-day", never, {}, {}, never, never, false, never>;
}
