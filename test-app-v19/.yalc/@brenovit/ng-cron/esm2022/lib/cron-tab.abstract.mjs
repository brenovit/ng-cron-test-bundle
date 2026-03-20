import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { Mode } from '@sbzen/cron-core';
import * as i0 from "@angular/core";
export class CronTabComponent {
    constructor() {
        this.changed = new EventEmitter();
        this.sessionId = Date.now().toString();
        this.unListener = null;
        this.mode = Mode;
    }
    ngOnInit() {
        this.unListener = this.cronUI.listen(this.segments, () => {
            this.cd.detectChanges();
            this.applyChanges();
        });
    }
    ngOnDestroy() {
        if (this.unListener) {
            this.unListener();
        }
    }
    genId(mode, extra) {
        return `${mode}-${extra || ''}${this.sessionId}`;
    }
    localizeList(list, localizationStore) {
        return list.map(v => ({
            ...v,
            label: this.localizeLabel(v.label, localizationStore)
        }));
    }
    localizeLabel(label, localizationStore) {
        return localizationStore[label.toLowerCase()];
    }
    applyChanges() {
        this.changed.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronTabComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.20", type: CronTabComponent, isStandalone: true, inputs: { localization: "localization", schema: "schema" }, outputs: { changed: "changed" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronTabComponent, decorators: [{
            type: Directive
        }], propDecorators: { changed: [{
                type: Output
            }], localization: [{
                type: Input
            }], schema: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi10YWIuYWJzdHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jcm9uL3NyYy9saWIvY3Jvbi10YWIuYWJzdHJhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxZQUFZLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxJQUFJLEVBQW1ELE1BQU0sa0JBQWtCLENBQUM7O0FBTXpGLE1BQU0sT0FBZ0IsZ0JBQWdCO0lBRHRDO1FBRXFCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBSXRDLGNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsZUFBVSxHQUFzQixJQUFJLENBQUM7UUFLcEMsU0FBSSxHQUFHLElBQUksQ0FBQztLQWlDdEI7SUEvQkMsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDdkQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFVLEVBQUUsS0FBYztRQUM5QixPQUFPLEdBQUcsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRCxZQUFZLENBQUMsSUFBd0MsRUFBRSxpQkFBNEM7UUFDakcsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwQixHQUFHLENBQUM7WUFDSixLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLGlCQUFpQixDQUFDO1NBQ3RELENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFhLEVBQUUsaUJBQTRDO1FBQ3ZFLE9BQU8saUJBQWlCLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUE7SUFDL0MsQ0FBQztJQUVTLFlBQVk7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOytHQTNDbUIsZ0JBQWdCO21HQUFoQixnQkFBZ0I7OzRGQUFoQixnQkFBZ0I7a0JBRHJDLFNBQVM7OEJBRVcsT0FBTztzQkFBekIsTUFBTTtnQkFDRSxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGUsIFNlZ21lbnQsIENyb25Vbml4VUlTZXJ2aWNlLCBDcm9uUXVhcnR6VUlTZXJ2aWNlIH0gZnJvbSAnQHNiemVuL2Nyb24tY29yZSc7XG5cbmltcG9ydCB7IENyb25DbGFzc2VzU2NoZW1hIH0gZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHsgRnVsbENyb25Mb2NhbGl6YXRpb24gfSBmcm9tICcuL2Nyb24tbG9jYWxpemF0aW9uJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ3JvblRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG5ldmVyPigpO1xuICBASW5wdXQoKSBsb2NhbGl6YXRpb24hOiBGdWxsQ3JvbkxvY2FsaXphdGlvbjtcbiAgQElucHV0KCkgc2NoZW1hITogQ3JvbkNsYXNzZXNTY2hlbWE7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBzZXNzaW9uSWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG4gIHByaXZhdGUgdW5MaXN0ZW5lcjogKCgpID0+IHZvaWQpfG51bGwgPSBudWxsO1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgc2VnbWVudHM6IFNlZ21lbnRbXTtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZjtcblxuICBhYnN0cmFjdCByZWFkb25seSBjcm9uVUk6IENyb25Vbml4VUlTZXJ2aWNlfENyb25RdWFydHpVSVNlcnZpY2U7XG4gIHJlYWRvbmx5IG1vZGUgPSBNb2RlO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudW5MaXN0ZW5lciA9IHRoaXMuY3JvblVJLmxpc3Rlbih0aGlzLnNlZ21lbnRzLCAoKSA9PiB7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuYXBwbHlDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy51bkxpc3RlbmVyKSB7XG4gICAgICB0aGlzLnVuTGlzdGVuZXIoKTtcbiAgICB9XG4gIH1cblxuICBnZW5JZChtb2RlOiBNb2RlLCBleHRyYT86IHN0cmluZykge1xuICAgIHJldHVybiBgJHttb2RlfS0ke2V4dHJhIHx8ICcnfSR7dGhpcy5zZXNzaW9uSWR9YDtcbiAgfVxuXG4gIGxvY2FsaXplTGlzdChsaXN0OiB7IHZhbHVlOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcgfVtdLCBsb2NhbGl6YXRpb25TdG9yZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiBsaXN0Lm1hcCh2ID0+ICh7XG4gICAgICAuLi52LFxuICAgICAgbGFiZWw6IHRoaXMubG9jYWxpemVMYWJlbCh2LmxhYmVsLCBsb2NhbGl6YXRpb25TdG9yZSlcbiAgICB9KSk7XG4gIH1cblxuICBsb2NhbGl6ZUxhYmVsKGxhYmVsOiBzdHJpbmcsIGxvY2FsaXphdGlvblN0b3JlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIGxvY2FsaXphdGlvblN0b3JlW2xhYmVsLnRvTG93ZXJDYXNlKCldXG4gIH1cblxuICBwcm90ZWN0ZWQgYXBwbHlDaGFuZ2VzKCkge1xuICAgIHRoaXMuY2hhbmdlZC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==