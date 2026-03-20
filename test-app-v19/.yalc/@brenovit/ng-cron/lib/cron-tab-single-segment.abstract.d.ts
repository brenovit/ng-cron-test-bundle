import { Segment } from '@sbzen/cron-core';
import { CronAndComponent } from './shared';
import { CronTabComponent } from './cron-tab.abstract';
import { CronSingleType } from './cron-single-tab.type';
import * as i0 from "@angular/core";
export declare abstract class CronTabSingleSegmentComponent extends CronTabComponent {
    and: CronAndComponent | null;
    readonly segments: Segment[];
    constructor(tab: CronSingleType);
    protected applyChanges(): void;
    private getSegments;
    static ɵfac: i0.ɵɵFactoryDeclaration<CronTabSingleSegmentComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CronTabSingleSegmentComponent, never, never, {}, {}, never, never, true, never>;
}
