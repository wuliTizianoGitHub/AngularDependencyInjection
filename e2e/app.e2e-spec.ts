import { ExampleDependencyInjectionPage } from './app.po';

describe('example-dependency-injection App', () => {
  let page: ExampleDependencyInjectionPage;

  beforeEach(() => {
    page = new ExampleDependencyInjectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
