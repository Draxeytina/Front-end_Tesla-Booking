import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from '../redux/configureStore';
import Reserve from './Reserve Form/ReserveForm';
import Deletes from './Delete/Deletes';

describe('Test components', () => {
  test('Reserve component', () => {
    const store = configureStore;
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Reserve />
        </MemoryRouter>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Deletes component', () => {
    const store = configureStore;
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Deletes />
        </MemoryRouter>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
