import { TemplateRef, ChangeDetectorRef, EventEmitter, ElementRef, QueryList } from '@angular/core';
import { Type } from '@sbzen/cron-core';
import { CronLocalization } from './../cron-localization';
import { CronClassesSchema } from './../styles';
import * as i0 from "@angular/core";
export declare class CronContainerComponent {
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
