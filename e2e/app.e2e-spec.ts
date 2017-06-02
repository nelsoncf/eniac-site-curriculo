import { CurriculoPage } from './app.po';

describe('curriculo App', () => {
  let page: CurriculoPage;

  beforeEach(() => {
    page = new CurriculoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
