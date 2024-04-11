import('chai').then(chai => {
  const { expect } = chai.default;
  const chaiHttp = require('chai-http');
  const app = require('./server'); 

  chai.use(chaiHttp);

  describe('Create Routes', () => {
    it('should create a new review', (done) => {
      chai.request(app)
        .post('/reviews')
        .send({
          restaurantName: 'Test Restaurant',
          rating: 4,
          reviewText: 'Great experience!',
          reviewerName: 'John Doe'
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('restaurantName', 'Test Restaurant');
          expect(res.body).to.have.property('rating', 4);
          expect(res.body).to.have.property('reviewText', 'Great experience!');
          expect(res.body).to.have.property('reviewerName', 'John Doe');
          done();
        });
    });

    it('should create a new contact', (done) => {
      chai.request(app)
        .post('/contacts')
        .send({
          name: 'Jane Doe',
          email: 'jane.doe@example.com',
          subject: 'Test Subject',
          message: 'Test Message'
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('name', 'Jane Doe');
          expect(res.body).to.have.property('email', 'jane.doe@example.com');
          expect(res.body).to.have.property('subject', 'Test Subject');
          expect(res.body).to.have.property('message', 'Test Message');
          done();
        });
    });
  });
});


