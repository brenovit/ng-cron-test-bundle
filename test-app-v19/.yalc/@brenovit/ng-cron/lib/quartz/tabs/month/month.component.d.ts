import { ChangeDetectorRef } from '@angular/core';
import { CronQuartzUIService } from '@sbzen/cron-core';
import { CronTabSingleSegmentComponent } from './../../../cron-tab-single-segment.abstract';
import * as i0 from "@angular/core";
export declare class QuartzCronMonthComponent extends CronTabSingleSegmentComponent {
    readonly cronUI: CronQuartzUIService;
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
    readonly api: {
        getIncrementSecondaryValue: () => string;
        setIncrementSecondaryValue: (value: string) => void;
        isEverySelected: () => boolean;
        selectEvery: () => void;
        isIncrementSelected: () => boolean;
        selectIncrement: () => void;
        isIncrementControlsDisabled: () => boolean;
        getIncrementPrimaryValue: () => string;
        setIncrementPrimaryValue: (value: string) => void;
        isAndSelected: () => boolean;
        selectAnd: () => void;
        isAndControlsDisabled: () => boolean;
        isSelectedAndValue: (value: string) => boolean;
        selectAndValue: (value: string) => boolean;
        isRangeSelected: () => boolean;
        selectRange: () => void;
        isRangeControlsDisabled: () => boolean;
        getRangePrimaryValue: () => string;
        setRangePrimaryValue: (value: string) => void;
        getRangeSecondaryValue: () => string;
        setRangeSecondaryValue: (value: string) => void;
    };
    constructor(cronUI: CronQuartzUIService, cd: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<QuartzCronMonthComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuartzCronMonthComponent, "quartz-cron-month", never, {}, {}, never, never, false, never>;
}
