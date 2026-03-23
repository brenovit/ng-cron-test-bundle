import { Type, CronUnixUIService, CronQuartzUIService, Mode, Segment } from '@sbzen/cron-core';
export { Type as Tab } from '@sbzen/cron-core';
import * as i0 from '@angular/core';
import { OnChanges, EventEmitter, ChangeDetectorRef, SimpleChanges, OnInit, OnDestroy, TemplateRef, QueryList, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i2 from '@angular/common';
import * as _sbzen_cron_core_enums from '@sbzen/cron-core/enums';

declare const localization: {
    common: {
        month: {
            january: string;
            february: string;
            march: string;
            april: string;
            may: string;
            june: string;
            july: string;
            august: string;
            september: string;
            october: string;
            november: string;
            december: string;
        };
        dayOfWeek: {
            sunday: string;
            monday: string;
            tuesday: string;
            wednesday: string;
            thursday: string;
            friday: string;
            saturday: string;
        };
        dayOfMonth: {
            '1st': string;
            '2nd': string;
            '3rd': string;
            '4th': string;
            '5th': string;
            '6th': string;
            '7th': string;
            '8th': string;
            '9th': string;
            '10th': string;
            '11th': string;
            '12th': string;
            '13th': string;
            '14th': string;
            '15th': string;
            '16th': string;
            '17th': string;
            '18th': string;
            '19th': string;
            '20th': string;
            '21st': string;
            '22nd': string;
            '23rd': string;
            '24th': string;
            '25th': string;
            '26th': string;
            '27th': string;
            '28th': string;
            '29th': string;
            '30th': string;
            '31st': string;
        };
    };
    tabs: {
        seconds: string;
        minutes: string;
        hours: string;
        day: string;
        month: string;
        year: string;
    };
    quartz: {
        day: {
            every: {
                label: string;
            };
            dayOfWeekIncrement: {
                label1: string;
                label2: string;
            };
            dayOfMonthIncrement: {
                label1: string;
                label2: string;
                label3: string;
            };
            dayOfWeekAnd: {
                label: string;
            };
            dayOfWeekRange: {
                label1: string;
                label2: string;
            };
            dayOfMonthAnd: {
                label: string;
            };
            dayOfMonthLastDay: {
                label: string;
            };
            dayOfMonthLastDayWeek: {
                label: string;
            };
            dayOfWeekLastNTHDayWeek: {
                label1: string;
                label2: string;
            };
            dayOfMonthDaysBeforeEndMonth: {
                label: string;
            };
            dayOfMonthNearestWeekDayOfMonth: {
                label1: string;
                label2: string;
            };
            dayOfWeekNTHWeekDayOfMonth: {
                label1: string;
                label2: string;
            };
        };
        month: {
            every: {
                label: string;
            };
            increment: {
                label1: string;
                label2: string;
            };
            and: {
                label: string;
            };
            range: {
                label1: string;
                label2: string;
            };
        };
        second: {
            every: {
                label: string;
            };
            increment: {
                label1: string;
                label2: string;
            };
            and: {
                label: string;
            };
            range: {
                label1: string;
                label2: string;
            };
        };
        minute: {
            every: {
                label: string;
            };
            increment: {
                label1: string;
                label2: string;
            };
            and: {
                label: string;
            };
            range: {
                label1: string;
                label2: string;
            };
        };
        hour: {
            every: {
                label: string;
            };
            increment: {
                label1: string;
                label2: string;
            };
            and: {
                label: string;
            };
            range: {
                label1: string;
                label2: string;
            };
        };
        year: {
            every: {
                label: string;
            };
            increment: {
                label1: string;
                label2: string;
            };
            and: {
                label: string;
            };
            range: {
                label1: string;
                label2: string;
            };
        };
    };
    unix: {
        day: {
            every: {
                label: string;
            };
            dayOfWeekIncrement: {
                label1: string;
                label2: string;
            };
            dayOfMonthIncrement: {
                label1: string;
                label2: string;
            };
            dayOfWeekAnd: {
                label: string;
            };
            dayOfMonthAnd: {
                label: string;
            };
        };
        month: {
            every: {
                label: string;
            };
            increment: {
                label1: string;
                label2: string;
            };
            and: {
                label: string;
            };
            range: {
                label1: string;
                label2: string;
            };
        };
        minute: {
            every: {
                label: string;
            };
            increment: {
                label1: string;
                label2: string;
            };
            and: {
                label: string;
            };
            range: {
                label1: string;
                label2: string;
            };
        };
        hour: {
            every: {
                label: string;
            };
            increment: {
                label1: string;
                label2: string;
            };
            and: {
                label: string;
            };
            range: {
                label1: string;
                label2: string;
            };
        };
    };
};
type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
type FullCronLocalization = typeof localization;
type CronLocalization = DeepPartial<typeof localization>;

type CronClassesSchema = {
    tabs: {
        root: string;
        item: string;
        link: string;
        active: string;
    };
    formInline: string;
    formGroup: string;
    formControl: string;
    mx1: string;
    ml1: string;
    col2: string;
    col3: string;
    colMd1: string;
    colMd2: string;
    check: {
        root: string;
        field: string;
        label: string;
        row: string;
    };
};

declare abstract class CronHostComponent implements ControlValueAccessor, OnChanges {
    private readonly cd;
    private readonly cronUI;
    private readonly initialTabs;
    private readonly styles;
    readonly changed: EventEmitter<string>;
    readonly tabChanged: EventEmitter<Type>;
    cssClassPrefix: string;
    activeTab: Type;
    tabs: Type[] | null;
    hideTabs: boolean;
    localization?: CronLocalization;
    set disabled(value: string | null | boolean);
    protected onChange: ((cronValue: string) => {}) | null;
    protected onTouched: (() => {}) | null;
    readonly type: typeof Type;
    schema: CronClassesSchema;
    constructor(cd: ChangeDetectorRef, cronUI: CronUnixUIService | CronQuartzUIService, initialTabs: Type[], styles: CronClassesSchema);
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(cronValue: string): void;
    registerOnChange(fn: (cronValue: string) => {}): void;
    registerOnTouched(fn: () => {}): void;
    applyChanges(): void;
    getActiveTab(): Type;
    getTabs(): Type[];
    getLocalization(): {
        common: {
            month: {
                january: string;
                february: string;
                march: string;
                april: string;
                may: string;
                june: string;
                july: string;
                august: string;
                september: string;
                october: string;
                november: string;
                december: string;
            };
            dayOfWeek: {
                sunday: string;
                monday: string;
                tuesday: string;
                wednesday: string;
                thursday: string;
                friday: string;
                saturday: string;
            };
            dayOfMonth: {
                '1st': string;
                '2nd': string;
                '3rd': string;
                '4th': string;
                '5th': string;
                '6th': string;
                '7th': string;
                '8th': string;
                '9th': string;
                '10th': string;
                '11th': string;
                '12th': string;
                '13th': string;
                '14th': string;
                '15th': string;
                '16th': string;
                '17th': string;
                '18th': string;
                '19th': string;
                '20th': string;
                '21st': string;
                '22nd': string;
                '23rd': string;
                '24th': string;
                '25th': string;
                '26th': string;
                '27th': string;
                '28th': string;
                '29th': string;
                '30th': string;
                '31st': string;
            };
        };
        tabs: {
            seconds: string;
            minutes: string;
            hours: string;
            day: string;
            month: string;
            year: string;
        };
        quartz: {
            day: {
                every: {
                    label: string;
                };
                dayOfWeekIncrement: {
                    label1: string;
                    label2: string;
                };
                dayOfMonthIncrement: {
                    label1: string;
                    label2: string;
                    label3: string;
                };
                dayOfWeekAnd: {
                    label: string;
                };
                dayOfWeekRange: {
                    label1: string;
                    label2: string;
                };
                dayOfMonthAnd: {
                    label: string;
                };
                dayOfMonthLastDay: {
                    label: string;
                };
                dayOfMonthLastDayWeek: {
                    label: string;
                };
                dayOfWeekLastNTHDayWeek: {
                    label1: string;
                    label2: string;
                };
                dayOfMonthDaysBeforeEndMonth: {
                    label: string;
                };
                dayOfMonthNearestWeekDayOfMonth: {
                    label1: string;
                    label2: string;
                };
                dayOfWeekNTHWeekDayOfMonth: {
                    label1: string;
                    label2: string;
                };
            };
            month: {
                every: {
                    label: string;
                };
                increment: {
                    label1: string;
                    label2: string;
                };
                and: {
                    label: string;
                };
                range: {
                    label1: string;
                    label2: string;
                };
            };
            second: {
                every: {
                    label: string;
                };
                increment: {
                    label1: string;
                    label2: string;
                };
                and: {
                    label: string;
                };
                range: {
                    label1: string;
                    label2: string;
                };
            };
            minute: {
                every: {
                    label: string;
                };
                increment: {
                    label1: string;
                    label2: string;
                };
                and: {
                    label: string;
                };
                range: {
                    label1: string;
                    label2: string;
                };
            };
            hour: {
                every: {
                    label: string;
                };
                increment: {
                    label1: string;
                    label2: string;
                };
                and: {
                    label: string;
                };
                range: {
                    label1: string;
                    label2: string;
                };
            };
            year: {
                every: {
                    label: string;
                };
                increment: {
                    label1: string;
                    label2: string;
                };
                and: {
                    label: string;
                };
                range: {
                    label1: string;
                    label2: string;
                };
            };
        };
        unix: {
            day: {
                every: {
                    label: string;
                };
                dayOfWeekIncrement: {
                    label1: string;
                    label2: string;
                };
                dayOfMonthIncrement: {
                    label1: string;
                    label2: string;
                };
                dayOfWeekAnd: {
                    label: string;
                };
                dayOfMonthAnd: {
                    label: string;
                };
            };
            month: {
                every: {
                    label: string;
                };
                increment: {
                    label1: string;
                    label2: string;
                };
                and: {
                    label: string;
                };
                range: {
                    label1: string;
                    label2: string;
                };
            };
            minute: {
                every: {
                    label: string;
                };
                increment: {
                    label1: string;
                    label2: string;
                };
                and: {
                    label: string;
                };
                range: {
                    label1: string;
                    label2: string;
                };
            };
            hour: {
                every: {
                    label: string;
                };
                increment: {
                    label1: string;
                    label2: string;
                };
                and: {
                    label: string;
                };
                range: {
                    label1: string;
                    label2: string;
                };
            };
        };
    };
    private mergeDeep;
    static ɵfac: i0.ɵɵFactoryDeclaration<CronHostComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CronHostComponent, never, never, { "cssClassPrefix": { "alias": "cssClassPrefix"; "required": false; }; "activeTab": { "alias": "activeTab"; "required": false; }; "tabs": { "alias": "tabs"; "required": false; }; "hideTabs": { "alias": "hideTabs"; "required": false; }; "localization": { "alias": "localization"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "changed": "changed"; "tabChanged": "tabChanged"; }, never, never, true, never>;
}

declare function quartzCronServiceFactory(): CronQuartzUIService;
declare class QuartzCronComponent extends CronHostComponent {
    constructor(cd: ChangeDetectorRef, cronQuartzUI: CronQuartzUIService);
    static ɵfac: i0.ɵɵFactoryDeclaration<QuartzCronComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuartzCronComponent, "quartz-cron", never, {}, {}, never, never, false, never>;
}

declare class CronAndComponent {
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

declare class CronAndModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CronAndModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CronAndModule, [typeof CronAndComponent], [typeof i2.CommonModule], [typeof CronAndComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CronAndModule>;
}

declare class CronEveryComponent {
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

declare class CronEveryModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CronEveryModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CronEveryModule, [typeof CronEveryComponent], [typeof i2.CommonModule], [typeof CronEveryComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CronEveryModule>;
}

declare class CronRangeComponent {
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

declare class CronRangeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CronRangeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CronRangeModule, [typeof CronRangeComponent], [typeof i2.CommonModule], [typeof CronRangeComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CronRangeModule>;
}

declare abstract class CronTabComponent implements OnInit, OnDestroy {
    readonly changed: EventEmitter<never>;
    localization: FullCronLocalization;
    schema: CronClassesSchema;
    private readonly sessionId;
    private unListener;
    protected abstract readonly segments: Segment[];
    protected abstract readonly cd: ChangeDetectorRef;
    abstract readonly cronUI: CronUnixUIService | CronQuartzUIService;
    readonly mode: typeof Mode;
    ngOnInit(): void;
    ngOnDestroy(): void;
    genId(mode: Mode, extra?: string): string;
    localizeList(list: {
        value: string;
        label: string;
    }[], localizationStore: {
        [key: string]: string;
    }): {
        label: string;
        value: string;
    }[];
    localizeLabel(label: string, localizationStore: {
        [key: string]: string;
    }): string;
    protected applyChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CronTabComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CronTabComponent, never, never, { "localization": { "alias": "localization"; "required": false; }; "schema": { "alias": "schema"; "required": false; }; }, { "changed": "changed"; }, never, never, true, never>;
}

type CronSingleType = Type.HOURS | Type.MINUTES | Type.MONTH | Type.SECONDS | Type.YEAR;

declare abstract class CronTabSingleSegmentComponent extends CronTabComponent {
    and: CronAndComponent | null;
    readonly segments: Segment[];
    constructor(tab: CronSingleType);
    protected applyChanges(): void;
    private getSegments;
    static ɵfac: i0.ɵɵFactoryDeclaration<CronTabSingleSegmentComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CronTabSingleSegmentComponent, never, never, {}, {}, never, never, true, never>;
}

declare class QuartzCronMonthComponent extends CronTabSingleSegmentComponent {
    readonly cronUI: CronQuartzUIService;
    protected readonly cd: ChangeDetectorRef;
    readonly monthCodes: {
        value: _sbzen_cron_core_enums.MonthCode;
        label: _sbzen_cron_core_enums.Month;
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

declare class QuartzCronIncrementComponent {
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
    readonly mode = Mode.INCREMENT;
    setPrimaryValue(e: Event): void;
    setSecondaryValue(e: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuartzCronIncrementComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuartzCronIncrementComponent, "quartz-cron-increment", never, { "segmentId": { "alias": "segmentId"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "disabledControls": { "alias": "disabledControls"; "required": false; }; "label": { "alias": "label"; "required": false; }; "label2": { "alias": "label2"; "required": false; }; "primaryValue": { "alias": "primaryValue"; "required": false; }; "primaryOptions": { "alias": "primaryOptions"; "required": false; }; "secondaryValue": { "alias": "secondaryValue"; "required": false; }; "secondaryOptions": { "alias": "secondaryOptions"; "required": false; }; "schema": { "alias": "schema"; "required": false; }; }, { "selected": "selected"; "primaryValueChanged": "primaryValueChanged"; "secondaryValueChanged": "secondaryValueChanged"; }, never, never, false, never>;
}

declare class QuartzCronIncrementModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<QuartzCronIncrementModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<QuartzCronIncrementModule, [typeof QuartzCronIncrementComponent], [typeof i2.CommonModule], [typeof QuartzCronIncrementComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<QuartzCronIncrementModule>;
}

declare class QuartzCronMonthModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<QuartzCronMonthModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<QuartzCronMonthModule, [typeof QuartzCronMonthComponent], [typeof i2.CommonModule, typeof CronEveryModule, typeof CronRangeModule, typeof CronAndModule, typeof QuartzCronIncrementModule], [typeof QuartzCronMonthComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<QuartzCronMonthModule>;
}

declare class QuartzCronMinuteComponent extends CronTabSingleSegmentComponent {
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

declare class QuartzCronMinuteModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<QuartzCronMinuteModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<QuartzCronMinuteModule, [typeof QuartzCronMinuteComponent], [typeof i2.CommonModule, typeof CronEveryModule, typeof CronRangeModule, typeof CronAndModule, typeof QuartzCronIncrementModule], [typeof QuartzCronMinuteComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<QuartzCronMinuteModule>;
}

declare class QuartzCronHourComponent extends CronTabSingleSegmentComponent {
    readonly cronUI: CronQuartzUIService;
    protected readonly cd: ChangeDetectorRef;
    readonly hourCodes: {
        value: string;
        label: string;
    }[];
    readonly hours: {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<QuartzCronHourComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuartzCronHourComponent, "quartz-cron-hour", never, {}, {}, never, never, false, never>;
}

declare class QuartzCronHourModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<QuartzCronHourModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<QuartzCronHourModule, [typeof QuartzCronHourComponent], [typeof i2.CommonModule, typeof CronEveryModule, typeof CronRangeModule, typeof CronAndModule, typeof QuartzCronIncrementModule], [typeof QuartzCronHourComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<QuartzCronHourModule>;
}

declare class QuartzCronSecondComponent extends CronTabSingleSegmentComponent {
    readonly cronUI: CronQuartzUIService;
    protected readonly cd: ChangeDetectorRef;
    readonly secondCodes: {
        value: string;
        label: string;
    }[];
    readonly seconds: {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<QuartzCronSecondComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuartzCronSecondComponent, "quartz-cron-second", never, {}, {}, never, never, false, never>;
}

declare class QuartzCronSecondModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<QuartzCronSecondModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<QuartzCronSecondModule, [typeof QuartzCronSecondComponent], [typeof i2.CommonModule, typeof CronEveryModule, typeof CronRangeModule, typeof CronAndModule, typeof QuartzCronIncrementModule], [typeof QuartzCronSecondComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<QuartzCronSecondModule>;
}

declare class QuartzCronYearComponent extends CronTabSingleSegmentComponent {
    readonly cronUI: CronQuartzUIService;
    protected readonly cd: ChangeDetectorRef;
    readonly yearCodes: {
        value: string;
        label: string;
    }[];
    readonly years: {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<QuartzCronYearComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuartzCronYearComponent, "quartz-cron-year", never, {}, {}, never, never, false, never>;
}

declare class QuartzCronYearModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<QuartzCronYearModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<QuartzCronYearModule, [typeof QuartzCronYearComponent], [typeof i2.CommonModule, typeof CronEveryModule, typeof CronRangeModule, typeof CronAndModule, typeof QuartzCronIncrementModule], [typeof QuartzCronYearComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<QuartzCronYearModule>;
}

declare class QuartzCronDayComponent extends CronTabComponent {
    readonly cronUI: CronQuartzUIService;
    protected readonly cd: ChangeDetectorRef;
    readonly api: {
        isDayOfWeekRangeSelected: () => boolean;
        selectDayOfWeekRange: () => void;
        isDayOfWeekRangeControlsDisabled: () => boolean;
        getDayOfWeekRangePrimary: () => string;
        setDayOfWeekRangePrimary: (value: string) => void;
        getDayOfWeekRangeSecondary: () => string;
        setDayOfWeekRangeSecondary: (value: string) => void;
        isDayOfMonthLastDaySelected: () => boolean;
        selectDayOfMonthLastDay: () => void;
        isDayOfMonthLastDayWeekSelected: () => boolean;
        selectDayOfMonthLastDayWeek: () => void;
        isDayOfWeekLastNTHDayWeekSelected: () => boolean;
        selectDayOfWeekLastNTHDayWeek: () => void;
        isDayOfWeekLastNTHDayWeekControlsDisabled: () => boolean;
        getDayOfWeekLastNTHDayWeekValue: () => string;
        setDayOfWeekLastNTHDayWeekValue: (value: string) => void;
        isDayOfMonthDaysBeforeEndMonthSelected: () => boolean;
        selectDayOfMonthDaysBeforeEndMonth: () => void;
        isDayOfMonthDaysBeforeEndMonthControlsDisabled: () => boolean;
        getDayOfMonthDaysBeforeEndMonthValue: () => string;
        setDayOfMonthDaysBeforeEndMonthValue: (value: string) => void;
        isDayOfMonthNearestWeekDayOfMonthSelected: () => boolean;
        selectDayOfMonthNearestWeekDayOfMonth: () => void;
        isDayOfMonthNearestWeekDayOfMonthControlsDisabled: () => boolean;
        getDayOfMonthNearestWeekDayOfMonthValue: () => string;
        setDayOfMonthNearestWeekDayOfMonthValue: (value: string) => void;
        isDayOfWeekNTHWeekDayOfMonthSelected: () => boolean;
        selectDayOfWeekNTHWeekDayOfMonth: () => void;
        isDayOfWeekNTHWeekDayOfMonthControlsDisabled: () => boolean;
        getDayOfWeekNTHWeekDayOfMonthPrimaryValue: () => string;
        setDayOfWeekNTHWeekDayOfMonthPrimaryValue: (value: string) => void;
        getDayOfWeekNTHWeekDayOfMonthSecondaryValue: () => string;
        setDayOfWeekNTHWeekDayOfMonthSecondaryValue: (value: string) => void;
        isEverySelected: () => boolean;
        selectEvery: () => void;
        isDayOfWeekIncrementSelected: () => boolean;
        selectDayOfWeekIncrement: () => void;
        isDayOfWeekIncrementControlsDisabled: () => boolean;
        getDayOfWeekIncrementPrimary: () => string;
        setDayOfWeekIncrementPrimary: (value: string) => void;
        getDayOfWeekIncrementSecondary: () => string;
        setDayOfWeekIncrementSecondary: (value: string) => void;
        isDayOfMonthIncrementSelected: () => boolean;
        selectDayOfMonthIncrement: () => void;
        isDayOfMonthIncrementControlsDisabled: () => boolean;
        getDayOfMonthIncrementPrimary: () => string;
        setDayOfMonthIncrementPrimary: (value: string) => void;
        getDayOfMonthIncrementSecondary: () => string;
        setDayOfMonthIncrementSecondary: (value: string) => void;
        isDayOfWeekAndSelected: () => boolean;
        selectDayOfWeekAnd: () => void;
        isDayOfWeekAndControlsDisabled: () => boolean;
        isSelectedDayOfWeekAndValue: (value: string) => boolean;
        selectDayOfWeekAndValue: (value: string) => boolean;
        isDayOfMonthAndSelected: () => boolean;
        selectDayOfMonthAnd: () => void;
        isDayOfMonthAndControlsDisabled: () => boolean;
        isSelectedDayOfMonthAndValue: (value: string) => boolean;
        selectDayOfMonthAndValue: (value: string) => boolean;
    };
    readonly segment: typeof Segment;
    readonly segments: Segment[];
    readonly daysOfWeekEvery: {
        value: string;
        label: string;
    }[];
    readonly daysOfWeek: {
        value: string;
        label: string;
    }[];
    readonly daysOfWeekCodes: {
        value: _sbzen_cron_core_enums.WeekDayCode;
        label: _sbzen_cron_core_enums.WeekDay;
    }[];
    readonly daysOfMonthEvery: {
        value: string;
        label: string;
    }[];
    readonly daysOfMonth: {
        value: string;
        label: string;
    }[];
    readonly limitedDaysOfMonth: {
        value: string;
        label: string;
    }[];
    constructor(cronUI: CronQuartzUIService, cd: ChangeDetectorRef);
    setDayOfWeekIncrementPrimary(e: Event): void;
    setDayOfWeekIncrementSecondary(e: Event): void;
    setDayOfMonthIncrementPrimary(e: Event): void;
    setDayOfMonthIncrementSecondary(e: Event): void;
    setDayOfWeekLastNTHDayWeekValue(e: Event): void;
    setDayOfMonthDaysBeforeEndMonthValue(e: Event): void;
    setDayOfMonthNearestWeekDayOfMonthValue(e: Event): void;
    setDayOfWeekNTHWeekDayOfMonthPrimaryValue(e: Event): void;
    setDayOfWeekNTHWeekDayOfMonthSecondaryValue(e: Event): void;
    private getEventValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuartzCronDayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuartzCronDayComponent, "quartz-cron-day", never, {}, {}, never, never, false, never>;
}

declare class QuartzCronDayModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<QuartzCronDayModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<QuartzCronDayModule, [typeof QuartzCronDayComponent], [typeof i2.CommonModule, typeof CronRangeModule], [typeof QuartzCronDayComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<QuartzCronDayModule>;
}

declare class CronContainerComponent {
    private readonly cd;
    content: TemplateRef<{
        $implicit: Type;
    }>;
    tabEls: QueryList<ElementRef> | null;
    readonly tabChanged: EventEmitter<Type>;
    localization: Required<CronLocalization>;
    hostClass: string;
    activeTab: Type;
    tabs: Type[];
    hideTabs: boolean;
    schema: CronClassesSchema;
    readonly tabsLocalizationKeys: {
        readonly DAY: "day";
        readonly HOURS: "hours";
        readonly MINUTES: "minutes";
        readonly MONTH: "month";
        readonly SECONDS: "seconds";
        readonly YEAR: "year";
    };
    constructor(cd: ChangeDetectorRef);
    navigateTab(code: string, tab: Type): void;
    setTab(tab: Type): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CronContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CronContainerComponent, "cron-container", never, { "localization": { "alias": "localization"; "required": false; }; "hostClass": { "alias": "hostClass"; "required": false; }; "activeTab": { "alias": "activeTab"; "required": false; }; "tabs": { "alias": "tabs"; "required": false; }; "hideTabs": { "alias": "hideTabs"; "required": false; }; "schema": { "alias": "schema"; "required": false; }; }, { "tabChanged": "tabChanged"; }, ["content"], never, false, never>;
}

declare class CronContainerModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CronContainerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CronContainerModule, [typeof CronContainerComponent], [typeof i2.CommonModule], [typeof CronContainerComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CronContainerModule>;
}

declare class QuartzCronModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<QuartzCronModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<QuartzCronModule, [typeof QuartzCronComponent], [typeof i2.CommonModule, typeof QuartzCronMonthModule, typeof QuartzCronMinuteModule, typeof QuartzCronHourModule, typeof QuartzCronSecondModule, typeof QuartzCronYearModule, typeof QuartzCronDayModule, typeof CronContainerModule], [typeof QuartzCronComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<QuartzCronModule>;
}

declare function unixCronServiceFactory(): CronUnixUIService;
declare class UnixCronComponent extends CronHostComponent {
    constructor(cd: ChangeDetectorRef, cronUnixUI: CronUnixUIService);
    static ɵfac: i0.ɵɵFactoryDeclaration<UnixCronComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UnixCronComponent, "unix-cron", never, {}, {}, never, never, false, never>;
}

declare class UnixCronMinuteComponent extends CronTabSingleSegmentComponent {
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

declare class UnixCronIncrementComponent {
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

declare class UnixCronIncrementModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<UnixCronIncrementModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<UnixCronIncrementModule, [typeof UnixCronIncrementComponent], [typeof i2.CommonModule], [typeof UnixCronIncrementComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<UnixCronIncrementModule>;
}

declare class UnixCronMinuteModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<UnixCronMinuteModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<UnixCronMinuteModule, [typeof UnixCronMinuteComponent], [typeof i2.CommonModule, typeof CronEveryModule, typeof CronRangeModule, typeof CronAndModule, typeof UnixCronIncrementModule], [typeof UnixCronMinuteComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<UnixCronMinuteModule>;
}

declare class UnixCronMonthComponent extends CronTabSingleSegmentComponent {
    readonly cronUI: CronUnixUIService;
    protected readonly cd: ChangeDetectorRef;
    readonly monthCodes: {
        value: _sbzen_cron_core_enums.MonthCode;
        label: _sbzen_cron_core_enums.Month;
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

declare class UnixCronMonthModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<UnixCronMonthModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<UnixCronMonthModule, [typeof UnixCronMonthComponent], [typeof i2.CommonModule, typeof CronEveryModule, typeof CronRangeModule, typeof CronAndModule, typeof UnixCronIncrementModule], [typeof UnixCronMonthComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<UnixCronMonthModule>;
}

declare class UnixCronHourComponent extends CronTabSingleSegmentComponent {
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

declare class UnixCronHourModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<UnixCronHourModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<UnixCronHourModule, [typeof UnixCronHourComponent], [typeof i2.CommonModule, typeof CronEveryModule, typeof CronRangeModule, typeof CronAndModule, typeof UnixCronIncrementModule], [typeof UnixCronHourComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<UnixCronHourModule>;
}

declare class UnixCronDayComponent extends CronTabComponent {
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
        value: _sbzen_cron_core_enums.WeekDayCode;
        label: _sbzen_cron_core_enums.WeekDay;
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

declare class UnixCronDayModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<UnixCronDayModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<UnixCronDayModule, [typeof UnixCronDayComponent], [typeof i2.CommonModule], [typeof UnixCronDayComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<UnixCronDayModule>;
}

declare class UnixCronModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<UnixCronModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<UnixCronModule, [typeof UnixCronComponent], [typeof i2.CommonModule, typeof UnixCronMinuteModule, typeof UnixCronMonthModule, typeof UnixCronHourModule, typeof UnixCronDayModule, typeof CronContainerModule], [typeof UnixCronComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<UnixCronModule>;
}

declare function bs5QuartzCronServiceFactory(): CronQuartzUIService;
declare class Bs5QuartzCronComponent extends CronHostComponent {
    constructor(cd: ChangeDetectorRef, cronQuartzUI: CronQuartzUIService);
    static ɵfac: i0.ɵɵFactoryDeclaration<Bs5QuartzCronComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Bs5QuartzCronComponent, "bs5-quartz-cron", never, {}, {}, never, never, false, never>;
}

declare class Bs5QuartzCronModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<Bs5QuartzCronModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<Bs5QuartzCronModule, [typeof Bs5QuartzCronComponent], [typeof i2.CommonModule, typeof QuartzCronMonthModule, typeof QuartzCronMinuteModule, typeof QuartzCronHourModule, typeof QuartzCronSecondModule, typeof QuartzCronYearModule, typeof QuartzCronDayModule, typeof CronContainerModule], [typeof Bs5QuartzCronComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<Bs5QuartzCronModule>;
}

declare function bs5UnixCronServiceFactory(): CronUnixUIService;
declare class Bs5UnixCronComponent extends CronHostComponent {
    constructor(cd: ChangeDetectorRef, cronUnixUI: CronUnixUIService);
    static ɵfac: i0.ɵɵFactoryDeclaration<Bs5UnixCronComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Bs5UnixCronComponent, "bs5-unix-cron", never, {}, {}, never, never, false, never>;
}

declare class Bs5UnixCronModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<Bs5UnixCronModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<Bs5UnixCronModule, [typeof Bs5UnixCronComponent], [typeof i2.CommonModule, typeof UnixCronMinuteModule, typeof UnixCronMonthModule, typeof UnixCronHourModule, typeof UnixCronDayModule, typeof CronContainerModule], [typeof Bs5UnixCronComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<Bs5UnixCronModule>;
}

export { Bs5QuartzCronComponent, Bs5QuartzCronModule, Bs5UnixCronComponent, Bs5UnixCronModule, QuartzCronComponent, QuartzCronModule, UnixCronComponent, UnixCronModule, bs5QuartzCronServiceFactory, bs5UnixCronServiceFactory, quartzCronServiceFactory, unixCronServiceFactory };
export type { CronLocalization };
