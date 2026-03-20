import { Component, ContentChild, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChildren, ElementRef } from '@angular/core';
import { Type } from '@sbzen/cron-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CronContainerComponent {
    constructor(cd) {
        this.cd = cd;
        this.tabEls = null;
        this.tabChanged = new EventEmitter();
        this.hostClass = '';
        this.activeTab = Type.MINUTES;
        this.tabs = [];
        this.hideTabs = false;
        this.tabsLocalizationKeys = {
            [Type.DAY]: 'day',
            [Type.HOURS]: 'hours',
            [Type.MINUTES]: 'minutes',
            [Type.MONTH]: 'month',
            [Type.SECONDS]: 'seconds',
            [Type.YEAR]: 'year'
        };
    }
    navigateTab(code, tab) {
        if (!this.tabEls || code !== 'ArrowRight' && code !== 'ArrowLeft') {
            return;
        }
        const tabEls = this.tabEls.toArray().map(er => er.nativeElement);
        const tabs = this.tabs;
        const pos = tabs.indexOf(tab);
        let toPos = 0;
        if (code === 'ArrowRight') {
            const nextPos = pos + 1;
            toPos = (nextPos === tabs.length) ? 0 : nextPos;
        }
        if (code === 'ArrowLeft') {
            const prevPos = pos - 1;
            toPos = (prevPos < 0) ? tabs.length - 1 : prevPos;
        }
        this.setTab(tabs[toPos]);
        const tabEl = tabEls[toPos];
        if (tabEl) {
            tabEl.focus();
            this.cd.detectChanges();
        }
    }
    setTab(tab) {
        this.activeTab = tab;
        this.cd.detectChanges();
        this.tabChanged.emit(tab);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronContainerComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.20", type: CronContainerComponent, isStandalone: false, selector: "cron-container", inputs: { localization: "localization", hostClass: "hostClass", activeTab: "activeTab", tabs: "tabs", hideTabs: "hideTabs", schema: "schema" }, outputs: { tabChanged: "tabChanged" }, queries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], viewQueries: [{ propertyName: "tabEls", predicate: ["tabEl"], descendants: true, read: ElementRef }], ngImport: i0, template: "<div class=\"c-host {{hostClass}}\">\n  @if (!hideTabs && tabs.length) {\n    <ul\n      class=\"{{schema.tabs.root}} c-tabs\"\n      role=\"tablist\"\n      aria-label=\"Cron Generator Tabs\">\n\n      @for (item of tabs; track item) {\n        <li\n          class=\"{{schema.tabs.item}} c-tab-item\"\n          role=\"presentation\">\n\n          <button\n            role=\"tab\"\n            #tabEl\n            type=\"button\"\n            class=\"{{schema.tabs.link}} {{ activeTab === item ? schema.tabs.active : '' }} {{item}} c-tab\"\n            [attr.aria-selected]=\"activeTab === item\"\n            [attr.tabindex]=\"activeTab === item ? 0 : -1\"\n            (click)=\"setTab(item)\"\n            (keyup)=\"navigateTab($event.code, activeTab)\">\n\n            {{localization.tabs[tabsLocalizationKeys[item]]}}\n          </button>\n        </li>\n      }\n    </ul>\n  }\n\n  <div\n    class=\"c-tab-content\"\n    role=\"tabpanel\"\n    tabindex=\"0\"\n    [attr.tab-name]=\"activeTab\">\n\n    <ng-container *ngTemplateOutlet=\"content; context: { $implicit: activeTab }\"></ng-container>\n  </div>\n</div>\n", styles: [".c-tab-content{outline:none}\n"], dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cron-container', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<div class=\"c-host {{hostClass}}\">\n  @if (!hideTabs && tabs.length) {\n    <ul\n      class=\"{{schema.tabs.root}} c-tabs\"\n      role=\"tablist\"\n      aria-label=\"Cron Generator Tabs\">\n\n      @for (item of tabs; track item) {\n        <li\n          class=\"{{schema.tabs.item}} c-tab-item\"\n          role=\"presentation\">\n\n          <button\n            role=\"tab\"\n            #tabEl\n            type=\"button\"\n            class=\"{{schema.tabs.link}} {{ activeTab === item ? schema.tabs.active : '' }} {{item}} c-tab\"\n            [attr.aria-selected]=\"activeTab === item\"\n            [attr.tabindex]=\"activeTab === item ? 0 : -1\"\n            (click)=\"setTab(item)\"\n            (keyup)=\"navigateTab($event.code, activeTab)\">\n\n            {{localization.tabs[tabsLocalizationKeys[item]]}}\n          </button>\n        </li>\n      }\n    </ul>\n  }\n\n  <div\n    class=\"c-tab-content\"\n    role=\"tabpanel\"\n    tabindex=\"0\"\n    [attr.tab-name]=\"activeTab\">\n\n    <ng-container *ngTemplateOutlet=\"content; context: { $implicit: activeTab }\"></ng-container>\n  </div>\n</div>\n", styles: [".c-tab-content{outline:none}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { content: [{
                type: ContentChild,
                args: ['content']
            }], tabEls: [{
                type: ViewChildren,
                args: ['tabEl', { read: ElementRef }]
            }], tabChanged: [{
                type: Output
            }], localization: [{
                type: Input
            }], hostClass: [{
                type: Input
            }], activeTab: [{
                type: Input
            }], tabs: [{
                type: Input
            }], hideTabs: [{
                type: Input
            }], schema: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNyb24vc3JjL2xpYi9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNyb24vc3JjL2xpYi9jb250YWluZXIvY29udGFpbmVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQWUsdUJBQXVCLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDbkwsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFZeEMsTUFBTSxPQUFPLHNCQUFzQjtJQW9CakMsWUFBNkIsRUFBcUI7UUFBckIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFsQkwsV0FBTSxHQUErQixJQUFJLENBQUM7UUFDcEUsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFaEQsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3pCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdqQix5QkFBb0IsR0FBRztZQUM5QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLO1lBQ2pCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU87WUFDckIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUztZQUN6QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPO1lBQ3JCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVM7WUFDekIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTTtTQUNYLENBQUM7SUFFMEMsQ0FBQztJQUV0RCxXQUFXLENBQUMsSUFBWSxFQUFFLEdBQVM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxLQUFLLFlBQVksSUFBSSxJQUFJLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDbEUsT0FBTztRQUNULENBQUM7UUFDRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRWQsSUFBSSxJQUFJLEtBQUssWUFBWSxFQUFFLENBQUM7WUFDMUIsTUFBTSxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN4QixLQUFLLEdBQUcsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxDQUFDO1FBQ0QsSUFBSSxJQUFJLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDekIsTUFBTSxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN4QixLQUFLLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDcEQsQ0FBQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDekIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksS0FBSyxFQUFFLENBQUM7WUFDVixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQVM7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7K0dBcERVLHNCQUFzQjttR0FBdEIsc0JBQXNCLGlhQUVGLFVBQVUsNkJDZjNDLHdtQ0FzQ0E7OzRGRHpCYSxzQkFBc0I7a0JBUGxDLFNBQVM7K0JBQ0ksZ0JBQWdCLG1CQUdULHVCQUF1QixDQUFDLE1BQU0sY0FDbkMsS0FBSztzRkFHTSxPQUFPO3NCQUEvQixZQUFZO3VCQUFDLFNBQVM7Z0JBQ3NCLE1BQU07c0JBQWxELFlBQVk7dUJBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQkFDeEIsVUFBVTtzQkFBNUIsTUFBTTtnQkFDRSxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgVGVtcGxhdGVSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGRyZW4sIEVsZW1lbnRSZWYsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0BzYnplbi9jcm9uLWNvcmUnO1xuXG5pbXBvcnQgeyBDcm9uTG9jYWxpemF0aW9uIH0gZnJvbSAnLi8uLi9jcm9uLWxvY2FsaXphdGlvbic7XG5pbXBvcnQgeyBDcm9uQ2xhc3Nlc1NjaGVtYSB9IGZyb20gJy4vLi4vc3R5bGVzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjcm9uLWNvbnRhaW5lcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbnRhaW5lci5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jb250YWluZXIuc2NzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHN0YW5kYWxvbmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIENyb25Db250YWluZXJDb21wb25lbnQge1xuICBAQ29udGVudENoaWxkKCdjb250ZW50JykgY29udGVudCE6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBUeXBlIH0+O1xuICBAVmlld0NoaWxkcmVuKCd0YWJFbCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSB0YWJFbHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPnxudWxsID0gbnVsbDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRhYkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFR5cGU+KCk7XG4gIEBJbnB1dCgpIGxvY2FsaXphdGlvbiE6IFJlcXVpcmVkPENyb25Mb2NhbGl6YXRpb24+O1xuICBASW5wdXQoKSBob3N0Q2xhc3MgPSAnJztcbiAgQElucHV0KCkgYWN0aXZlVGFiID0gVHlwZS5NSU5VVEVTO1xuICBASW5wdXQoKSB0YWJzOiBUeXBlW10gPSBbXTtcbiAgQElucHV0KCkgaGlkZVRhYnMgPSBmYWxzZTtcbiAgQElucHV0KCkgc2NoZW1hITogQ3JvbkNsYXNzZXNTY2hlbWE7XG5cbiAgcmVhZG9ubHkgdGFic0xvY2FsaXphdGlvbktleXMgPSB7XG4gICAgW1R5cGUuREFZXTogJ2RheScsXG4gICAgW1R5cGUuSE9VUlNdOiAnaG91cnMnLFxuICAgIFtUeXBlLk1JTlVURVNdOiAnbWludXRlcycsXG4gICAgW1R5cGUuTU9OVEhdOiAnbW9udGgnLFxuICAgIFtUeXBlLlNFQ09ORFNdOiAnc2Vjb25kcycsXG4gICAgW1R5cGUuWUVBUl06ICd5ZWFyJ1xuICB9IGFzIGNvbnN0O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5hdmlnYXRlVGFiKGNvZGU6IHN0cmluZywgdGFiOiBUeXBlKSB7XG4gICAgaWYgKCF0aGlzLnRhYkVscyB8fCBjb2RlICE9PSAnQXJyb3dSaWdodCcgJiYgY29kZSAhPT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFiRWxzID0gdGhpcy50YWJFbHMudG9BcnJheSgpLm1hcChlciA9PiBlci5uYXRpdmVFbGVtZW50KTtcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzO1xuICAgIGNvbnN0IHBvcyA9IHRhYnMuaW5kZXhPZih0YWIpO1xuICAgIGxldCB0b1BvcyA9IDA7XG5cbiAgICBpZiAoY29kZSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICBjb25zdCBuZXh0UG9zID0gcG9zICsgMTtcbiAgICAgIHRvUG9zID0gKG5leHRQb3MgPT09IHRhYnMubGVuZ3RoKSA/IDAgOiBuZXh0UG9zO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgIGNvbnN0IHByZXZQb3MgPSBwb3MgLSAxO1xuICAgICAgdG9Qb3MgPSAocHJldlBvcyA8IDApID8gdGFicy5sZW5ndGggLSAxIDogcHJldlBvcztcbiAgICB9XG5cbiAgICB0aGlzLnNldFRhYih0YWJzW3RvUG9zXSk7XG4gICAgY29uc3QgdGFiRWwgPSB0YWJFbHNbdG9Qb3NdO1xuICAgIGlmICh0YWJFbCkge1xuICAgICAgdGFiRWwuZm9jdXMoKTtcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHNldFRhYih0YWI6IFR5cGUpIHtcbiAgICB0aGlzLmFjdGl2ZVRhYiA9IHRhYjtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLnRhYkNoYW5nZWQuZW1pdCh0YWIpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYy1ob3N0IHt7aG9zdENsYXNzfX1cIj5cbiAgQGlmICghaGlkZVRhYnMgJiYgdGFicy5sZW5ndGgpIHtcbiAgICA8dWxcbiAgICAgIGNsYXNzPVwie3tzY2hlbWEudGFicy5yb290fX0gYy10YWJzXCJcbiAgICAgIHJvbGU9XCJ0YWJsaXN0XCJcbiAgICAgIGFyaWEtbGFiZWw9XCJDcm9uIEdlbmVyYXRvciBUYWJzXCI+XG5cbiAgICAgIEBmb3IgKGl0ZW0gb2YgdGFiczsgdHJhY2sgaXRlbSkge1xuICAgICAgICA8bGlcbiAgICAgICAgICBjbGFzcz1cInt7c2NoZW1hLnRhYnMuaXRlbX19IGMtdGFiLWl0ZW1cIlxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgICAgICAgI3RhYkVsXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzPVwie3tzY2hlbWEudGFicy5saW5rfX0ge3sgYWN0aXZlVGFiID09PSBpdGVtID8gc2NoZW1hLnRhYnMuYWN0aXZlIDogJycgfX0ge3tpdGVtfX0gYy10YWJcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJhY3RpdmVUYWIgPT09IGl0ZW1cIlxuICAgICAgICAgICAgW2F0dHIudGFiaW5kZXhdPVwiYWN0aXZlVGFiID09PSBpdGVtID8gMCA6IC0xXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXRUYWIoaXRlbSlcIlxuICAgICAgICAgICAgKGtleXVwKT1cIm5hdmlnYXRlVGFiKCRldmVudC5jb2RlLCBhY3RpdmVUYWIpXCI+XG5cbiAgICAgICAgICAgIHt7bG9jYWxpemF0aW9uLnRhYnNbdGFic0xvY2FsaXphdGlvbktleXNbaXRlbV1dfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgIH1cbiAgICA8L3VsPlxuICB9XG5cbiAgPGRpdlxuICAgIGNsYXNzPVwiYy10YWItY29udGVudFwiXG4gICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICB0YWJpbmRleD1cIjBcIlxuICAgIFthdHRyLnRhYi1uYW1lXT1cImFjdGl2ZVRhYlwiPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnQ7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBhY3RpdmVUYWIgfVwiPjwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19