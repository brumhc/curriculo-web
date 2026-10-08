import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Lucas Brum');
  });

  it('offers the supplied PDF and updated contact details', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[download]')?.getAttribute('href')).toBe('Lucas-Brum-CV.pdf');
    expect(compiled.querySelector('a[href="tel:+351931478418"]')?.textContent).toContain('+351 931 478 418');
    expect(compiled.querySelector('.experience.current')?.textContent).toContain('CTW TechWorks | BMW Group');
  });
});
