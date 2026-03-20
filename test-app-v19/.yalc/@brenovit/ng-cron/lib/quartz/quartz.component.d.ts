import { ChangeDetectorRef } from '@angular/core';
import { CronQuartzUIService } from '@sbzen/cron-core';
import { CronHostComponent } from './../cron-host.abstract';
import * as i0 from "@angular/core";
export declare function quartzCronServiceFactory(): CronQuartzUIService;
export declare class QuartzCronComponent extends CronHostComponent {
    constructor(cd: ChangeDetectorRef, cronQuartzUI: CronQuartzUIService);
    static ɵfac: i0.ɵɵFactoryDeclaration<QuartzCronComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuartzCronComponent, "quartz-cron", never, {}, {}, never, never, false, never>;
}
