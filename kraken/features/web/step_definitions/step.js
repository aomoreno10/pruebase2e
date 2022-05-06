const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember7');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember9');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('#ember11');
    return await element.click();
});

When('I click publish a post', async function() {
    let element = await this.driver.$('#ember37');
    return await element.click();
});

When('I click on the redact post title inputbox', async function() {
    let element = await this.driver.$('#ember63');
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