const { Given, When, Then } = require('@cucumber/cucumber');

//-----------------------------------------------------
//Inicia escenario 3

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember7');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember9');
    return await element.setValue(password);
});

When('I click sign in', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/div/section/form/button/span');
    await this.driver.saveScreenshot('./screenshots/login.png');
    return await element.click();
});

When('I click publish a post', async function() {
    let element = await this.driver.$('#ember37');
    return await element.click();
});

When('I click on the redact post title inputbox', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/div[1]/div[1]/textarea');
    return await element.click();
});

When('I enter post title{string}', async function (post_title) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/div[1]/div[1]/textarea');
    return await element.setValue(post_title);
});

When('I click on the redact post body inputbox', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/div[1]/div[1]/article/div[1]/div/p');
    return await element.click();
});

When('I enter post body{string}', async function (post_body) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/div[1]/div[1]/article/div[1]/div/p');
    return await element.setValue(post_body);
});

When('I click on the publish button', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/header/section/div[2]/div[1]');
    await this.driver.saveScreenshot('./screenshots/publishPost.png');
    return await element.click();
});

When('I click on the publish button again', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/footer/button[2]');
    return await element.click();
});

When('I publish the post', async function () {
    let element = await this.driver.$('/html/body/div[5]/div/div/div[2]/button[2]');
    return await element.click();
});

When('I click on posts', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/header/div/div[1]/a');
    await this.driver.saveScreenshot('./screenshots/postsList.png');
    return await element.click();
});

Then('I click on published', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/div/div/ul/li[3]/a');
    await this.driver.saveScreenshot('./screenshots/publishedPostsList.png');
    return await element.click();
});

When('I click on the post title', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/ol/li[2]/a[1]');
    return await element.click();
});

When('I click on the redact post title inputbox2', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/div[1]/div[1]/textarea');
    return await element.click();
});

When('I enter post edited title{string}', async function (post_title) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/div[1]/div[1]/textarea');
    return await element.setValue(post_title);
});

When('I click on update', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/header/section/div[1]/div[1]');
    await this.driver.saveScreenshot('./screenshots/updatePost.png');
    return await element.click();
});

When('I click on the update button', async function() {
    let element = await this.driver.$('/html/body/div[1]/div/footer/button[2]');
    return await element.click();
});

When('I click on posts2', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/header/div/div[1]/a');
    return await element.click();
});

When('I click on published2', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/div/div/ul/li[3]/a');
    return await element.click();
});

//-----------------------------------------------------
//Inicia escenario 6

When('I click on the profile icon', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[1]/div[1]/div');
    await this.driver.saveScreenshot('./screenshots/dashboard.png');
    return await element.click();
});

When('I click on logout', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/ul/li[9]/a');
    return await element.click();
});

Then('I see a post detail', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/main/div/div/article[1]/div/a/header/h2');
    await this.driver.saveScreenshot('./screenshots/postDetail.png');
    return await element.click();
});

//-----------------------------------------------------
//Inicia escenario 8

When('I click on options', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/button');
    return await element.click();
});

When('I click on delete post', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/div/div/div/div[2]/form/button');
    await this.driver.saveScreenshot('./screenshots/deletePost.png');
    return await element.click();
});

When('I click on delete button', async function () {
    let element = await this.driver.$('/html/body/div[5]/div/div/div[2]/button[2]');
    return await element.click();
});

When('I click on change access option', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[4]/div/span/select');
    await this.driver.saveScreenshot('./screenshots/changePostAccess.png');
    return await element.click();
});

When('I select paid members only', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/div/div/div/div[2]/form/div[4]/div/span/select/option[3]');
    return await element.click();
});

When('I click on new post button', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/a/span');
    return await element.click();
});

When('I click on post on lateral menu', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/a[1]');
    return await element.click();
});

When('I click on pages', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[2]/a');
    return await element.click();
});

When('I delete all the available posts', async function () {
    let posts = await this.driver.$$('h3.gh-content-entry-title')
    let counter = posts.length
    while (counter > 0) {
        await new Promise(resolve => setTimeout(resolve, 50));
        await posts[0].click()
        await new Promise(resolve => setTimeout(resolve, 50));
        let settingsBtn = await this.driver.$('button[title=Settings]')
        await settingsBtn.click()
        await new Promise(resolve => setTimeout(resolve, 50));
        let deleteBtn = await this.driver.$('form > button')
        await deleteBtn.click()
        await new Promise(resolve => setTimeout(resolve, 50));
        let confirmDeleteBtn = await this.driver.$('div.modal-content > div.modal-footer > :last-child')
        await confirmDeleteBtn.click()
        await new Promise(resolve => setTimeout(resolve, 50));
        let backBtn = await this.driver.$('a[href="#/posts/"]');
        await backBtn.click();
        await new Promise(resolve => setTimeout(resolve, 50));
        posts = await this.driver.$$('h3.gh-content-entry-title');
        counter -= 1;
        await new Promise(resolve => setTimeout(resolve));
    }
});