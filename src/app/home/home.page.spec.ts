import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { render } from '@testing-library/angular';
import { HomePage } from './home.page';

describe('HomePage', () => {
  async function setup() {
    const { fixture, container } = await render(HomePage, {
      imports: [IonApp, IonRouterOutlet],
    });
    return {
      fixture,
      container,
      component: fixture.debugElement.componentInstance as HomePage,
    };
  }

  it('creates the component', async () => {
    const { component } = await setup();

    expect(component).toBeTruthy();
  });
});
