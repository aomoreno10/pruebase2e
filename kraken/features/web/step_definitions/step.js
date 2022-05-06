const { Given, When, Then } = require('@cucumber/cucumber');

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
    let element = await this.driver.$('#ember63');
    return await element.setValue(post_title);
});

When('I click on the redact post body inputbox', async function() {
    let element = await this.driver.$('#ember64');
    return await element.click();
});

When('I enter post body{string}', async function (post_body) {
    let element = await this.driver.$('#ember64');
    return await element.setValue(post_body);
});

Then('I click on the publish button', async function () {
    let element = await this.driver.$('#ember71 > span');
    return await element.click();
});

Then('I click on the publish button again', async function () {
    let element = await this.driver.$('#ember79 > span');
    return await element.click();
});

Then('I publish the post', async function () {
    let element = await this.driver.$('#ember81 > span');
    return await element.click();
});

Then('I click on posts', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/header/div/div[1]/a');
    return await element.click();
});

Then('I click on published', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/div/div/ul/li[3]/a');
    return await element.click();
});

Then('I click on the post title', async function () {
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
    return await element.click();
});

When('I click on the update button', async function() {
    let element = await this.driver.$('/html/body/div[1]/div/footer/button[2]');
    return await element.click();
});

Then('I click on posts2', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/section/header/div/div[1]/a');
    return await element.click();
});

Then('I click on published2', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/div/div/ul/li[3]/a');
    return await element.click();
});

//Empieza escenario 6

Then('I click on the profile icon', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[1]/div[1]/div/div');
    return await element.click();
});

Then('I click on logout', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/ul/li[9]/a');
    return await element.click();
});

Then('I see a post detail', async function () {
    let element = await this.driver.$('/html/body/div[1]/div/main/div/div/article[1]/div/a/header/h2');
    return await element.click();
});