import { parseAppConfig } from './appConfig';

describe('parseAppConfig', () => {
  it('should map build-time variables to the application config', () => {
    expect(parseAppConfig({ VITE_APP_NAME: 'Build App' })).toEqual({
      appName: 'Build App',
    });
  });

  it('should let runtime variables override build-time variables', () => {
    expect(
      parseAppConfig(
        { VITE_APP_NAME: 'Build App' },
        { VITE_APP_NAME: 'Runtime App' }
      )
    ).toEqual({ appName: 'Runtime App' });
  });

  it('should trim surrounding whitespace from values', () => {
    expect(parseAppConfig({ VITE_APP_NAME: '  Spaced App  ' })).toEqual({
      appName: 'Spaced App',
    });
  });

  it('should throw an error naming a missing variable', () => {
    expect(() => parseAppConfig({})).toThrow(/VITE_APP_NAME/);
  });

  it('should throw an error naming a variable set to only whitespace', () => {
    expect(() => parseAppConfig({ VITE_APP_NAME: '   ' })).toThrow(
      /VITE_APP_NAME/
    );
  });
});
