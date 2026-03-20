import { ChangeDetectorRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Mode, Segment, CronUnixUIService, CronQuartzUIService } from '@sbzen/cron-core';
import { CronClassesSchema } from './styles';
import { FullCronLocalization } from './cron-localization';
import * as i0 from "@angular/core";
export declare abstract class CronTabComponent implements OnInit, OnDestroy {
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
