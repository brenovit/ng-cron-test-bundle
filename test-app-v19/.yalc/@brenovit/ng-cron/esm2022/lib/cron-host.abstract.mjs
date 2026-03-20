import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { Type } from '@sbzen/cron-core';
import { localization } from './cron-localization';
import { generateSchema } from './styles';
import * as i0 from "@angular/core";
export class CronHostComponent {
    set disabled(value) {
        const disableFields = value != null && `${value}` !== 'false';
        this.cronUI.setDisabled(disableFields);
    }
    constructor(cd, cronUI, initialTabs, styles) {
        this.cd = cd;
        this.cronUI = cronUI;
        this.initialTabs = initialTabs;
        this.styles = styles;
        this.changed = new EventEmitter();
        this.tabChanged = new EventEmitter();
        this.cssClassPrefix = '';
        this.activeTab = this.getActiveTab();
        this.tabs = null;
        this.hideTabs = false;
        this.onChange = null;
        this.onTouched = null;
        this.type = Type;
        this.schema = generateSchema(styles, this.cssClassPrefix);
    }
    ngOnChanges(changes) {
        const cssClassPrefix = changes['cssClassPrefix'];
        const shouldUpdate = (cssClassPrefix && cssClassPrefix.currentValue !== cssClassPrefix.previousValue);
        if (shouldUpdate) {
            this.schema = generateSchema(this.styles, this.cssClassPrefix);
            this.cd.detectChanges();
        }
    }
    writeValue(cronValue) {
        this.cronUI.fillFromExpression(cronValue || '');
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    applyChanges() {
        const str = this.cronUI.toString();
        if (this.onChange) {
            this.onChange(str);
        }
        if (this.onTouched) {
            this.onTouched();
        }
        this.changed.emit(str);
    }
    getActiveTab() {
        const tabs = this.getTabs();
        const [firstTab] = tabs.length ? tabs : [this.initialTabs[0]];
        return this.activeTab || firstTab;
    }
    getTabs() {
        return this.tabs || this.initialTabs;
    }
    getLocalization() {
        const args = [localization];
        if (this.localization) {
            args.push(this.localization);
        }
        return this.mergeDeep(...args);
    }
    mergeDeep(...objects) {
        return objects.reduce((prev, obj) => {
            Object.keys(obj).forEach(key => {
                const pVal = prev[key];
                const oVal = obj[key];
                if (pVal && typeof pVal === 'object' && oVal && typeof oVal === 'object') {
                    prev[key] = this.mergeDeep(pVal, oVal);
                }
                else {
                    prev[key] = oVal;
                }
            });
            return prev;
        }, {});
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronHostComponent, deps: "invalid", target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.20", type: CronHostComponent, isStandalone: true, inputs: { cssClassPrefix: "cssClassPrefix", activeTab: "activeTab", tabs: "tabs", hideTabs: "hideTabs", localization: "localization", disabled: "disabled" }, outputs: { changed: "changed", tabChanged: "tabChanged" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronHostComponent, decorators: [{
            type: Directive
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: undefined }, { type: undefined }, { type: undefined }], propDecorators: { changed: [{
                type: Output
            }], tabChanged: [{
                type: Output
            }], cssClassPrefix: [{
                type: Input
            }], activeTab: [{
                type: Input
            }], tabs: [{
                type: Input
            }], hideTabs: [{
                type: Input
            }], localization: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1ob3N0LmFic3RyYWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY3Jvbi9zcmMvbGliL2Nyb24taG9zdC5hYnN0cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUVwSCxPQUFPLEVBQUUsSUFBSSxFQUEwQyxNQUFNLGtCQUFrQixDQUFDO0FBRWhGLE9BQU8sRUFBb0IsWUFBWSxFQUFlLE1BQU0scUJBQXFCLENBQUM7QUFDbEYsT0FBTyxFQUFxQixjQUFjLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBTzdELE1BQU0sT0FBZ0IsaUJBQWlCO0lBUXJDLElBQWEsUUFBUSxDQUFDLEtBQTBCO1FBQzlDLE1BQU0sYUFBYSxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsS0FBSyxPQUFPLENBQUM7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQU9ELFlBQ21CLEVBQXFCLEVBQ3JCLE1BQTZDLEVBQzdDLFdBQW1CLEVBQ25CLE1BQXlCO1FBSHpCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQXVDO1FBQzdDLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBckJ6QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNyQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNoRCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQVMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLFNBQUksR0FBZ0IsSUFBSSxDQUFDO1FBQ3pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFP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QUFLLFFBQVEsSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7b0JBQ3pFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDekMsQ0FBQztxQkFBTSxDQUFDO29CQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ25CLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUFFLEVBQUUsQ0FBTSxDQUFDO0lBQ2QsQ0FBQzsrR0E5Rm1CLGlCQUFpQjttR0FBakIsaUJBQWlCOzs0RkFBakIsaUJBQWlCO2tCQUR0QyxTQUFTO3FKQUVXLE9BQU87c0JBQXpCLE1BQU07Z0JBQ1ksVUFBVTtzQkFBNUIsTUFBTTtnQkFDRSxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDTyxRQUFRO3NCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHlwZSwgQ3JvblVuaXhVSVNlcnZpY2UsIENyb25RdWFydHpVSVNlcnZpY2UgfSBmcm9tICdAc2J6ZW4vY3Jvbi1jb3JlJztcblxuaW1wb3J0IHsgQ3JvbkxvY2FsaXphdGlvbiwgbG9jYWxpemF0aW9uLCBEZWVwUGFydGlhbCB9IGZyb20gJy4vY3Jvbi1sb2NhbGl6YXRpb24nO1xuaW1wb3J0IHsgQ3JvbkNsYXNzZXNTY2hlbWEsIGdlbmVyYXRlU2NoZW1hIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG50eXBlIFJhd09iamVjdCA9IERlZXBQYXJ0aWFsPHtcblx0W2tleTogc3RyaW5nXTogc3RyaW5nfFJhd09iamVjdDtcbn0+O1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDcm9uSG9zdENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMge1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdGFiQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VHlwZT4oKTtcbiAgQElucHV0KCkgY3NzQ2xhc3NQcmVmaXggPSAnJztcbiAgQElucHV0KCkgYWN0aXZlVGFiOiBUeXBlID0gdGhpcy5nZXRBY3RpdmVUYWIoKTtcbiAgQElucHV0KCkgdGFiczogVHlwZVtdfG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBoaWRlVGFicyA9IGZhbHNlO1xuICBASW5wdXQoKSBsb2NhbGl6YXRpb24/OiBDcm9uTG9jYWxpemF0aW9uO1xuICBASW5wdXQoKSBzZXQgZGlzYWJsZWQodmFsdWU6IHN0cmluZ3xudWxsfGJvb2xlYW4pIHtcbiAgICBjb25zdCBkaXNhYmxlRmllbGRzID0gdmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xuICAgIHRoaXMuY3JvblVJLnNldERpc2FibGVkKGRpc2FibGVGaWVsZHMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uQ2hhbmdlOiAoKGNyb25WYWx1ZTogc3RyaW5nKSA9PiB7fSl8bnVsbCA9IG51bGw7XG4gIHByb3RlY3RlZCBvblRvdWNoZWQ6ICgoKSA9PiB7fSl8bnVsbCA9IG51bGw7XG4gIHJlYWRvbmx5IHR5cGUgPSBUeXBlO1xuICBzY2hlbWE6IENyb25DbGFzc2VzU2NoZW1hO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY3JvblVJOiBDcm9uVW5peFVJU2VydmljZXxDcm9uUXVhcnR6VUlTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgaW5pdGlhbFRhYnM6IFR5cGVbXSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0eWxlczogQ3JvbkNsYXNzZXNTY2hlbWFcbiAgKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBnZW5lcmF0ZVNjaGVtYShzdHlsZXMsIHRoaXMuY3NzQ2xhc3NQcmVmaXgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IGNzc0NsYXNzUHJlZml4ID0gY2hhbmdlc1snY3NzQ2xhc3NQcmVmaXgnXTtcbiAgICBjb25zdCBzaG91bGRVcGRhdGUgPSAoXG4gICAgICBjc3NDbGFzc1ByZWZpeCAmJiBjc3NDbGFzc1ByZWZpeC5jdXJyZW50VmFsdWUgIT09IGNzc0NsYXNzUHJlZml4LnByZXZpb3VzVmFsdWVcbiAgICApO1xuICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgIHRoaXMuc2NoZW1hID0gZ2VuZXJhdGVTY2hlbWEodGhpcy5zdHlsZXMsIHRoaXMuY3NzQ2xhc3NQcmVmaXgpO1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZShjcm9uVmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuY3JvblVJLmZpbGxGcm9tRXhwcmVzc2lvbihjcm9uVmFsdWUgfHwgJycpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKGNyb25WYWx1ZTogc3RyaW5nKSA9PiB7fSkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBhcHBseUNoYW5nZXMoKSB7XG4gICAgY29uc3Qgc3RyID0gdGhpcy5jcm9uVUkudG9TdHJpbmcoKTtcbiAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZShzdHIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vblRvdWNoZWQpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHN0cik7XG4gIH1cblxuICBnZXRBY3RpdmVUYWIoKSB7XG4gICAgY29uc3QgdGFicyA9IHRoaXMuZ2V0VGFicygpO1xuICAgIGNvbnN0IFtmaXJzdFRhYl0gPSB0YWJzLmxlbmd0aCA/IHRhYnMgOiBbdGhpcy5pbml0aWFsVGFic1swXV07XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlVGFiIHx8IGZpcnN0VGFiO1xuICB9XG5cbiAgZ2V0VGFicygpIHtcbiAgICByZXR1cm4gdGhpcy50YWJzIHx8IHRoaXMuaW5pdGlhbFRhYnM7XG4gIH1cblxuICBnZXRMb2NhbGl6YXRpb24oKSB7XG4gICAgY29uc3QgYXJnczogUmF3T2JqZWN0W10gPSBbbG9jYWxpemF0aW9uXTtcbiAgICBpZiAodGhpcy5sb2NhbGl6YXRpb24pIHtcbiAgICAgIGFyZ3MucHVzaCh0aGlzLmxvY2FsaXphdGlvbik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1lcmdlRGVlcDx0eXBlb2YgbG9jYWxpemF0aW9uPiguLi5hcmdzKTtcbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VEZWVwPFQgZXh0ZW5kcyBSYXdPYmplY3Q+KC4uLm9iamVjdHM6IFJhd09iamVjdFtdKSB7XG4gICAgcmV0dXJuIG9iamVjdHMucmVkdWNlKChwcmV2LCBvYmopID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBwVmFsID0gcHJldltrZXldO1xuICAgICAgICBjb25zdCBvVmFsID0gb2JqW2tleV07XG5cbiAgICAgICAgaWYgKHBWYWwgJiYgdHlwZW9mIHBWYWwgPT09ICdvYmplY3QnICYmIG9WYWwgJiYgdHlwZW9mIG9WYWwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgcHJldltrZXldID0gdGhpcy5tZXJnZURlZXAocFZhbCwgb1ZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldltrZXldID0gb1ZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KSBhcyBUO1xuICB9XG59XG4iXX0=