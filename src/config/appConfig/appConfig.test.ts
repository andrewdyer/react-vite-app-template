import { parseAppConfig } from './appConfig';

/**
 * A complete set of valid build-time variables, for tests to extend or override.
 */
const validEnv = {
  VITE_APP_NAME: 'Build App',
  VITE_API_URL: 'https://api.example.com/v1',
};

describe('parseAppConfig', () => {
  it('should map build-time variables to the application config', () => {
    expect(parseAppConfig(validEnv)).toEqual({
      appName: 'Build App',
      apiUrl: 'https://api.example.com/v1',
    });
  });

  it('should let runtime variables override build-time variables', () => {
    expect(
      parseAppConfig(validEnv, {
        VITE_APP_NAME: 'Runtime App',
        VITE_API_URL: 'https://runtime.example.com',
      })
    ).toEqual({
      appName: 'Runtime App',
      apiUrl: 'https://runtime.example.com',
    });
  });

  it('should trim surrounding whitespace from values', () => {
    expect(
      parseAppConfig({
        VITE_APP_NAME: '  Spaced App  ',
        VITE_API_URL: '  https://api.example.com  ',
      })
    ).toEqual({ appName: 'Spaced App', apiUrl: 'https://api.example.com' });
  });

  it('should remove trailing slashes from the API URL', () => {
    expect(
      parseAppConfig({
        ...validEnv,
        VITE_API_URL: 'https://api.example.com/v1//',
      }).apiUrl
    ).toBe('https://api.example.com/v1');
  });

  it('should throw an error naming a missing variable', () => {
    expect(() =>
      parseAppConfig({ VITE_API_URL: validEnv.VITE_API_URL })
    ).toThrow(/VITE_APP_NAME/);
  });

  it('should throw an error naming a variable set to only whitespace', () => {
    expect(() => parseAppConfig({ ...validEnv, VITE_APP_NAME: '   ' })).toThrow(
      /VITE_APP_NAME/
    );
  });

  it('should throw an error naming an API URL that is not a URL', () => {
    expect(() =>
      parseAppConfig({ ...validEnv, VITE_API_URL: 'not a url' })
    ).toThrow(/VITE_API_URL/);
  });
});
