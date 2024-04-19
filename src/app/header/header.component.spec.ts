import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        MatToolbarModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two navigation buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toEqual(2); 
  });

  it('should have correct router links on buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const photosButtonLink = buttons[0].injector.get(RouterLinkWithHref);
    const favoritesButtonLink = buttons[1].injector.get(RouterLinkWithHref);
  
    expect(photosButtonLink['commands']).toEqual(['/photos']);
    expect(favoritesButtonLink['commands']).toEqual(['/favorites']);
  });
});