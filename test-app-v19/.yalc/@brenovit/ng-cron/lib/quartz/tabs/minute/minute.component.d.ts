import { ChangeDetectorRef } from '@angular/core';
import { CronQuartzUIService } from '@sbzen/cron-core';
import { CronTabSingleSegmentComponent } from './../../../cron-tab-single-segment.abstract';
import * as i0 from "@angular/core";
export declare class QuartzCronMinuteComponent extends CronTabSingleSegmentComponent {
    readonly cronUI: CronQuartzUIService;
    protected readonly cd: ChangeDetectorRef;
    readonly minuteCodes: {
        value: string;
        label: string;
    }[];
    readonly minutes: {
        value: string;
        label: string;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<QuartzCronMinuteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuartzCronMinuteComponent, "quartz-cron-minute", never, {}, {}, never, never, false, never>;
}
