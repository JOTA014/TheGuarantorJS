const pactum = require('pactum');

describe('The Guarantors API automation challenge', () => {

    it('GetAll users should return 200', async () => {
        await pactum.spec()
        .get('https://fakerestapi.azurewebsites.net/api/v1/Users')
        .expectStatus(200);
    });
    
    it('Get user by existing id should return 200 and the correct user', async () => {
        await pactum.spec()
        .get('https://fakerestapi.azurewebsites.net/api/v1/Users/1')
        .expectStatus(200)
        .expectJson({
            id: 1,
            userName: 'User 1',
            password: 'Password1'
        });
    });
    
    it('Get user by not existing id should return 404 and the user', async () => {
        await pactum.spec()
        .get('https://fakerestapi.azurewebsites.net/api/v1/Users/125')
        .expectStatus(404);
    });
    
    it('Post user should return 200', async () => {
        await pactum.spec()
        .post('https://fakerestapi.azurewebsites.net/api/v1/Users')
        .withJson({
            id: 1212,
            userName: 'UserName1212',
            password: 'PasswordSuperComplex1212'
        })
        .expectStatus(200);
    });
    
    it('Put user should return 200', async () => {
        await pactum.spec()
        .put('https://fakerestapi.azurewebsites.net/api/v1/Users/1212')
        .withJson({
            id: 1212,
            userName: 'UserName1212',
            password: 'PasswordSuperComplex1212'
        })
        .expectStatus(200);
    });
    
    it('Delete user should return 200', async () => {
        await pactum.spec()
        .delete('https://fakerestapi.azurewebsites.net/api/v1/Users/1212')
        .expectStatus(200);
    });
});