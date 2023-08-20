const axios = require('axios')
const { expect } = require('chai')


describe('API Testing', () => {

    it('single get API', async () => {
        const res = await axios.get('https://reqres.in/api/users/2')
        console.log(res.data) //show all api respons
        console.log(res.data.data.first_name) //show spesific atribut
        console.log(res.status)

        expect(res.status).to.equal(200)
        expect(res.data.data.id).to.equal(2)
        expect(res.data.data.email).to.equal('janet.weaver@reqres.in')
        expect(res.data.data.first_name).to.equal('Janet')
        expect(res.data.data.last_name).to.equal('Weaver')
        expect(res.data.data.avatar).to.equal('https://reqres.in/img/faces/2-image.jpg')
        expect(res.data.support.url).to.equal('https://reqres.in/#support-heading')
        expect(res.data.support.text).to.equal('To keep ReqRes free, contributions towards server costs are appreciated!')
    })
})