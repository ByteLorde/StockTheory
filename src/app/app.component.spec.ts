// import {async, TestBed} from '@angular/core/testing';
// import {RouterTestingModule} from '@angular/router/testing';
// import {AppComponent} from './app.component';
//
// fdescribe('AppComponent', () => {
//
//     let fixture;
//     let app;
//
//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             imports: [
//                 RouterTestingModule
//             ],
//             declarations: [
//                 AppComponent
//             ],
//         }).compileComponents();
//
//     }));
//
//     beforeEach(() => {
//         fixture = TestBed.createComponent(AppComponent);
//         app = fixture.debugElement.componentInstance;
//     });
//
//
//     it('should create the app', () => {
//         expect(app).toBeTruthy();
//     });
//
//     it('should have correct number of links', () => {
//         const link1 = {label: 'LINK 1 TITLE', url: 'SOME_URL1'};
//         const link2 = {label: 'LINK 2 TITLE', url: 'SOME_URL2'};
//         const link3 = {label: 'LINK 3 TITLE', url: 'SOME_URL3'};
//
//         app.links = [link1, link2, link3];
//
//         const linksInApp = app.links.length;
//         const linksInDom = fixture.debugElement.nativeElement.querySelectorAll('a').length;
//
//         expect(linksInApp).toEqual(linksInDom);
//     });
//
//     it('links it dom should match links in app', () => {
//
//         const link1 = {label: 'LINK 1 TITLE', url: 'SOME_URL1'};
//         const link2 = {label: 'LINK 2 TITLE', url: 'SOME_URL2'};
//         const link3 = {label: 'LINK 3 TITLE', url: 'SOME_URL3'};
//
//         app.links = [link1, link2, link3];
//
//         const linksInDom = fixture.debugElement.nativeElement.querySelectorAll('a');
//
//         for (let i = 0; i < linksInDom.length; i++) {
//             const domLink = linksInDom[0];
//             const tsLink = app.links[i];
//
//             expect(domLink.innerText).toEqual(tsLink.label);
//             expect(domLink.href).toEqual(tsLink.url);
//         }
//     });
// });
