import { ChangeDetectorRef } from '@angular/core';
import { CronUnixUIService } from '@sbzen/cron-core';
import { CronHostComponent } from './../cron-host.abstract';
import * as i0 from "@angular/core";
export declare function unixCronServiceFactory(): CronUnixUIService;
export declare class UnixCronComponent extends CronHostComponent {
    constructor(cd: ChangeDetectorRef, cronUnixUI: CronUnixUIService);
    static ɵfac: i0.ɵɵFactoryDeclaration<UnixCronComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UnixCronComponent, "unix-cron", never, {}, {}, never, never, false, never>;
}
