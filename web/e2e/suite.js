import { ClientFunction, Selector } from 'testcafe';

const getWindowLocation = ClientFunction(() => window.location);

fixture `Pipotronizer`
  .page `https://www.pipotronizer.com`;

// Testing redirections

test('Redirections are OK', async t => {
  const url = 'https://www.pipotronizer.com',
        protocol = 'https:',
        hostname = 'www.pipotronizer.com',
        httpsWithWww = await getWindowLocation();

  await t
    .expect(httpsWithWww.href).eql(url)
    .navigateTo('http://pipotronizer.com');

  // http://pipotronizer.com -> https://www.pipotronizer.com
  const httpWithoutWww = await getWindowLocation();

  await t
    .expect(httpWithoutWww.protocol).eql(protocol)
    .expect(httpWithoutWww.hostname).eql(hostname)
    .navigateTo('http://www.pipotronizer.com');

  // http://www.pipotronizer.com -> https://www.pipotronizer.com
  const httpWithWww = await getWindowLocation();

  await t
    .expect(httpWithWww.protocol).eql(protocol)
    .expect(httpWithWww.hostname).eql(hostname)
    .navigateTo('https://pipotronizer.com');

  // https://pipotronizer.com -> https://www.pipotronizer.com
  const httpsWithoutWww = await getWindowLocation();

  await t
    .expect(httpsWithoutWww.protocol).eql(protocol)
    .expect(httpsWithoutWww.hostname).eql(hostname);
});

// Beware! Typography matters in the following tests
// A regular space is not equal to &nbsp; or &#8239;

test('Components are displayed correctly', async t => {
  // Header
  const windLabel = Selector('.sign > .info p').nth(0).innerText,
        windStrength = Selector('.sign > .info p').nth(1).innerText,
        windSpeed = Selector('.sign > .info p').nth(2).innerText;

  // Headline
  const h1 = Selector('h1').innerText;

  // Pipo
  const sentence = Selector('#sentence'),
        levelButtons = Selector('.options input[type="image"]'),
        howToLink = Selector('.how-to'),
        money = Selector('.amount'),
        donate = Selector('.donate');

  // About
  const aboutTitle = Selector('.about h2'),
        aboutTxt = Selector('.about p');

  // Levels
  const levelsTitle = Selector('.levels h2'),
        levels = Selector('.levels .windmills figure');

  // Footer
  const subtitles = Selector('footer h3'),
        socialLinks = Selector('footer .social a'),
        reactionButtons = Selector('footer .sharethis-inline-reaction-buttons'),
        credits = Selector('footer .credits');

  // Assertions
  await t
    .expect(windLabel).eql('Coup de vent')
    .expect(windStrength).eql('Force 8')
    .expect(windSpeed).eql('65 km/h')
    .expect(h1).eql('Brassez du vent avec Pipotronizer !')
    .expect(sentence).ok()
    .expect(levelButtons.count).eql(3)
    .expect(howToLink).ok()
    .expect(money.innerText).eql('0,00 €')
    .expect(donate.count).ok()
    .expect(aboutTitle.innerText).eql('Qu\'est-ce que c\'est ?')
    .expect(aboutTxt.count).eql(4)
    .expect(levelsTitle.innerText).eql('Contrôlez la force du vent !')
    .expect(levels.count).eql(3)
    .expect(subtitles.count).eql(3)
    .expect(subtitles.nth(0).innerText).eql('Pipotronizer 2.0')
    .expect(subtitles.nth(1).innerText).eql('Faire un don')
    .expect(subtitles.nth(2).innerText).eql('Contact')
    .expect(socialLinks.count).eql(4)
    .expect(reactionButtons).ok()
    .expect(credits).ok();
});
