const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I enter email {kraken-string}', async function (email) {
  let element = await this.driver.$('#ember7');
  return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
  let element = await this.driver.$('#ember9');
  return await element.setValue(password);
});

When('I click next', async function () {
  let element = await this.driver.$('#ember11');
  return await element.click();
})

When('I open my posts', async function () {
  let element = await this.driver.$('#ember26');
  return await element.click();
})

When('I click on "New Post" button', async function () {
  let element = await this.driver.$('a.view-actions-top-row');
  return await element.click();
})

When('I type a post title {kraken-string}', async function (title) {
  let element = await this.driver.$('textarea[placeholder="Post title"]');
  return await element.setValue(title);
});

When('I type a post body {kraken-string}', async function (body) {
  let element = await this.driver.$('div[data-kg="editor"]');
  return await element.setValue(body);
});

When('I click on "Publish" dropdown', async function () {
  let element = await this.driver.$('div.gh-btn.gh-btn-editor.gh-publishmenu-trigger');
  return await element.click();
});

When('I click on "Publish" button', async function () {
  let element = await this.driver.$('button.gh-publishmenu-button');
  return await element.click();
});

When('I click on "Publish" confirmation button', async function () {
  let element = await this.driver.$('button.gh-btn-black.gh-btn-icon.ember-view');
  return await element.click();
});

When('I go back to admin dashboard', async function () {
  let element = await this.driver.$('a[href="#/posts/"]');
  return await element.click();
});

Then('I should see {kraken-string}', async function (title) {
  let elements = await this.driver.$$('h3.gh-content-entry-title')
  let innerTexts = await elements.map(async (element) => await element.getText())
  let resolvedTexts = await Promise.all(innerTexts)
  let assertion = resolvedTexts.includes(title)
  expect(assertion).to.be.true
})

When('I open any post as a user', async function () {
  let elements = await this.driver.$$('h2.post-card-title')
  let randomNumber = Math.floor(Math.random() * elements.length)
  let innerText = await elements[randomNumber].getText()
  await elements[randomNumber].click()
  let postTitleElement = await this.driver.$('h1.article-title')
  let postTitle = await postTitleElement.getText();
  let assertion = innerText === postTitle;
  expect(assertion).to.be.true
})

When('I click on any published post', async function () {
  let elements = await this.driver.$$("li.gh-list-row.gh-posts-list-item > a.gh-post-list-status > div > span.gh-content-status-published")
  let randomNumber = Math.floor(Math.random() * elements.length)
  await elements[randomNumber].click()
})

When('I Update the post', async function () {
  let element = await this.driver.$("header > section > div:first-child")
  await element.click()
  let updateBtn = await this.driver.$('div.gh-publishmenu-dropdown > footer > button.gh-publishmenu-button')
  await updateBtn.click()
})

When('I delete the post', async function () {
  let element = await this.driver.$('button[title=Settings]')
  await element.click()
  let deleteBtn = await this.driver.$('form > button')
  await deleteBtn.click()
  let confirmDeleteBtn = await this.driver.$('div.modal-content > div.modal-footer > :last-child')
  await confirmDeleteBtn.click()
})

When('I click on {kraken-string} post', async function (title) {
  let elements = await this.driver.$$('h3.gh-content-entry-title')
  let innerTexts = await elements.map(async (element) => await element.getText())
  let resolvedTexts = await Promise.all(innerTexts)
  let postIndex = resolvedTexts.indexOf(title)
  await elements[postIndex].click()
})

When('I logout', async function () {
  let element = await this.driver.$('section.gh-nav-body > :last-child > div > div > :first-child')
  await element.click()
  let logoutBtn = await this.driver.$('ul[role=menu] > :last-child')
  await logoutBtn.click()
})

Then('I should not see {kraken-string} post in admin dashboard', async function (title) {
  let elements = await this.driver.$$('h3.gh-content-entry-title')
  let innerTexts = await elements.map(async (element) => await element.getText())
  let resolvedTexts = await Promise.all(innerTexts)
  let assertion = resolvedTexts.includes(title)
  expect(assertion).to.be.false
})

Then('I should not see {kraken-string} post in blog entries', async function (title) {
  let elements = await this.driver.$$('h2.post-card-title')
  let innerTexts = await elements.map(async (element) => await element.getText())
  let resolvedTexts = await Promise.all(innerTexts)
  let assertion = resolvedTexts.includes(title)
  expect(assertion).to.be.false
})

Then('I compare the number of posts in admin dashboard and in blog', async function () {
  let elements = await this.driver.$$('h3.gh-content-entry-title')
  let profileDropdown = await this.driver.$('section.gh-nav-body > :last-child > div > div > :first-child')
  await profileDropdown.click()
  let logoutBtn = await this.driver.$('ul[role=menu] > :last-child')
  await logoutBtn.click()
  let postedTitles = await this.driver.$$('h2.post-card-title')
  let assertion = elements.length >= postedTitles.length
  expect(assertion).to.be.true
})

When('I delete all the available posts', async function () {
  let posts = await this.driver.$$('h3.gh-content-entry-title')
  let counter = posts.length
  while (counter > 0) {
    await new Promise(resolve => setTimeout(resolve, 500));
    await posts[0].click()
    await new Promise(resolve => setTimeout(resolve, 500));
    let settingsBtn = await this.driver.$('button[title=Settings]')
    await settingsBtn.click()
    await new Promise(resolve => setTimeout(resolve, 500));
    let deleteBtn = await this.driver.$('form > button')
    await deleteBtn.click()
    await new Promise(resolve => setTimeout(resolve, 500));
    let confirmDeleteBtn = await this.driver.$('div.modal-content > div.modal-footer > :last-child')
    await confirmDeleteBtn.click()
    await new Promise(resolve => setTimeout(resolve, 500));
    let backBtn = await this.driver.$('a[href="#/posts/"]');
    await backBtn.click();
    await new Promise(resolve => setTimeout(resolve, 500));
    posts = await this.driver.$$('h3.gh-content-entry-title');
    counter -= 1;
    await new Promise(resolve => setTimeout(resolve, 500));
  }
})

Then('I should not see any posts', async function () {
  let posts = await this.driver.$$('h3.gh-content-entry-title')
  let assertion = posts.length === 0;
  expect(assertion).to.be.true
})

When('I change my password from {kraken-string} to {kraken-string}', async function (oldPassword, newPassword) {
  let element = await this.driver.$('section.gh-nav-body > :last-child > div > div > :first-child')
  await element.click()
  await new Promise(resolve => setTimeout(resolve, 500));
  let profileBtn = await this.driver.$('ul[role=menu] > :nth-child(4)')
  await profileBtn.click()
  await new Promise(resolve => setTimeout(resolve, 500));
  let oldPasswordInput = await this.driver.$('#user-password-old')
  await oldPasswordInput.setValue(oldPassword)
  let newPasswordInput = await this.driver.$('#user-password-new')
  await newPasswordInput.setValue(newPassword)
  let confirmationInput = await this.driver.$('#user-new-password-verification')
  await confirmationInput.setValue(newPassword)
  await new Promise(resolve => setTimeout(resolve, 500));
  let confirmBtn = await this.driver.$('button.button-change-password')
  await confirmBtn.click()
})

Then("I validate I'm in the admin dashboard", async function () {
  let dashboardE = await this.driver.$('h2.gh-canvas-title');
  let dashboardTitle = await dashboardE.getText()
  let assertion = dashboardTitle === 'Dashboard'
  expect(assertion).to.be.true
})