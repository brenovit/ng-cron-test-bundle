import { ChangeDetectorRef } from '@angular/core';
import { CronQuartzUIService } from '@sbzen/cron-core';
import { CronHostComponent } from './../cron-host.abstract';
import * as i0 from "@angular/core";
export declare function bs5QuartzCronServiceFactory(): CronQuartzUIService;
export declare class Bs5QuartzCronComponent extends CronHostComponent {
    constructor(cd: ChangeDetectorRef, cronQuartzUI: CronQuartzUIService);
    static ɵfac: i0.ɵɵFactoryDeclaration<Bs5QuartzCronComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Bs5QuartzCronComponent, "bs5-quartz-cron", never, {}, {}, never, never, false, never>;
}
