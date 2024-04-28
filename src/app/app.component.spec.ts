import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  async function setup() {
    const { fixture, container } = await render(AppComponent, {
      imports: [IonApp, IonRouterOutlet],
    });
    return {
      fixture,
      container,
      component: fixture.debugElement.componentInstance as AppComponent,
    };
  }

  it('creates the component', async () => {
    const { component } = await setup();
    const testTitle = screen.getByTestId('test-title');
    expect(testTitle.textContent).toContain('Test Title');
    expect(component).toBeTruthy();
  });
});
