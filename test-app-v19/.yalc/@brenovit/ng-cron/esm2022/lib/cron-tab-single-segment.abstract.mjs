import { Directive, ViewChild } from '@angular/core';
import { Segment, Type } from '@sbzen/cron-core';
import { CronAndComponent } from './shared';
import { CronTabComponent } from './cron-tab.abstract';
import * as i0 from "@angular/core";
export class CronTabSingleSegmentComponent extends CronTabComponent {
    constructor(tab) {
        super();
        this.and = null;
        this.segments = this.getSegments(tab);
    }
    applyChanges() {
        if (this.and) {
            this.and.detectChanges();
        }
        super.applyChanges();
    }
    getSegments(tab) {
        const segment = new Map([
            [Type.HOURS, Segment.hours],
            [Type.MINUTES, Segment.minutes],
            [Type.MONTH, Segment.month],
            [Type.SECONDS, Segment.seconds],
            [Type.YEAR, Segment.year]
        ]).get(tab);
        if (!segment) {
            throw `No segments for tab: ${tab}`;
        }
        return [segment];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronTabSingleSegmentComponent, deps: "invalid", target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "19.2.20", type: CronTabSingleSegmentComponent, isStandalone: true, viewQueries: [{ propertyName: "and", first: true, predicate: CronAndComponent, descendants: true, static: true }], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.20", ngImport: i0, type: CronTabSingleSegmentComponent, decorators: [{
            type: Directive
        }], ctorParameters: () => [{ type: undefined }], propDecorators: { and: [{
                type: ViewChild,
                args: [CronAndComponent, { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi10YWItc2luZ2xlLXNlZ21lbnQuYWJzdHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jcm9uL3NyYy9saWIvY3Jvbi10YWItc2luZ2xlLXNlZ21lbnQuYWJzdHJhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBSXZELE1BQU0sT0FBZ0IsNkJBQThCLFNBQVEsZ0JBQWdCO0lBSTFFLFlBQVksR0FBbUI7UUFDN0IsS0FBSyxFQUFFLENBQUM7UUFKcUMsUUFBRyxHQUEwQixJQUFJLENBQUM7UUFLL0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFa0IsWUFBWTtRQUM3QixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQztRQUNELEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU8sV0FBVyxDQUFDLEdBQW1CO1FBQ3JDLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUEwQjtZQUMvQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUMzQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUMvQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUMzQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUMvQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQztTQUMxQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVosSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2IsTUFBTSx3QkFBd0IsR0FBRyxFQUFFLENBQUM7UUFDdEMsQ0FBQztRQUVELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDOytHQTlCbUIsNkJBQTZCO21HQUE3Qiw2QkFBNkIsbUZBQ3RDLGdCQUFnQjs7NEZBRFAsNkJBQTZCO2tCQURsRCxTQUFTOzJFQUV1QyxHQUFHO3NCQUFqRCxTQUFTO3VCQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWdtZW50LCBUeXBlIH0gZnJvbSAnQHNiemVuL2Nyb24tY29yZSc7XG5cbmltcG9ydCB7IENyb25BbmRDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZCc7XG5pbXBvcnQgeyBDcm9uVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9jcm9uLXRhYi5hYnN0cmFjdCc7XG5pbXBvcnQgeyBDcm9uU2luZ2xlVHlwZSB9IGZyb20gJy4vY3Jvbi1zaW5nbGUtdGFiLnR5cGUnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDcm9uVGFiU2luZ2xlU2VnbWVudENvbXBvbmVudCBleHRlbmRzIENyb25UYWJDb21wb25lbnQge1xuICBAVmlld0NoaWxkKENyb25BbmRDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIGFuZDogQ3JvbkFuZENvbXBvbmVudHxudWxsID0gbnVsbDtcbiAgcmVhZG9ubHkgc2VnbWVudHM6IFNlZ21lbnRbXTtcblxuICBjb25zdHJ1Y3Rvcih0YWI6IENyb25TaW5nbGVUeXBlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNlZ21lbnRzID0gdGhpcy5nZXRTZWdtZW50cyh0YWIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGFwcGx5Q2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5hbmQpIHtcbiAgICAgIHRoaXMuYW5kLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gICAgc3VwZXIuYXBwbHlDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFNlZ21lbnRzKHRhYjogQ3JvblNpbmdsZVR5cGUpIHtcbiAgICBjb25zdCBzZWdtZW50ID0gbmV3IE1hcDxDcm9uU2luZ2xlVHlwZSwgU2VnbWVudD4oW1xuICAgICAgW1R5cGUuSE9VUlMsIFNlZ21lbnQuaG91cnNdLFxuICAgICAgW1R5cGUuTUlOVVRFUywgU2VnbWVudC5taW51dGVzXSxcbiAgICAgIFtUeXBlLk1PTlRILCBTZWdtZW50Lm1vbnRoXSxcbiAgICAgIFtUeXBlLlNFQ09ORFMsIFNlZ21lbnQuc2Vjb25kc10sXG4gICAgICBbVHlwZS5ZRUFSLCBTZWdtZW50LnllYXJdXG4gICAgXSkuZ2V0KHRhYik7XG5cbiAgICBpZiAoIXNlZ21lbnQpIHtcbiAgICAgIHRocm93IGBObyBzZWdtZW50cyBmb3IgdGFiOiAke3RhYn1gO1xuICAgIH1cblxuICAgIHJldHVybiBbc2VnbWVudF07XG4gIH1cbn1cbiJdfQ==