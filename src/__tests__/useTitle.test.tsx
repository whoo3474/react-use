import { renderHook } from '@testing-library/react-hooks';
import useTitle from '../useTitle';

describe('useTitle', () => {
  it('should be defined', () => {
    expect(useTitle).toBeDefined();
  });

  const hook = renderHook(props => useTitle(props), { initialProps: 'My page title' });

  it('should update document title', () => {
    expect(document.title).toBe('My page title');
    hook.rerender('My other page title');
    expect(document.title).toBe('My other page title');
  });
});
