import { EventEmitter, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Type, CronUnixUIService, CronQuartzUIService } from '@sbzen/cron-core';
import { CronLocalization } from './cron-localization';
import { CronClassesSchema } from './styles';
import * as i0 from "@angular/core";
export declare abstract class CronHostComponent implements ControlValueAccessor, OnChanges {
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
