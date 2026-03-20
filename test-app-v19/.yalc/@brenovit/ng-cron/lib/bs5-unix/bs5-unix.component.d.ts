import { ChangeDetectorRef } from '@angular/core';
import { CronUnixUIService } from '@sbzen/cron-core';
import { CronHostComponent } from './../cron-host.abstract';
import * as i0 from "@angular/core";
export declare function bs5UnixCronServiceFactory(): CronUnixUIService;
export declare class Bs5UnixCronComponent extends CronHostComponent {
    constructor(cd: ChangeDetectorRef, cronUnixUI: CronUnixUIService);
    static ɵfac: i0.ɵɵFactoryDeclaration<Bs5UnixCronComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Bs5UnixCronComponent, "bs5-unix-cron", never, {}, {}, never, never, false, never>;
}
