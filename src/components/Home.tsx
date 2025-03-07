import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <section className="hero">
      <Container>
        <Row className="min-vh-100 align-items-center">
          <Col lg={6} className="hero-content">
            <span className="hero-badge">Expert & AI-Powered Interview Prep</span>
            <h1 className="hero-title">
              Master Your Tech<br />
              Interviews With AI<br />
              & Expert Mentors
            </h1>
            <p className="hero-description">
              Choose between AI-powered practice (free for 10 minutes) or connect with experienced tech professionals for personalized mock interviews and mentorship.
            </p>
            <div className="hero-products">
              <div className="product-pill ai-product">
                <span className="product-icon">
                  <i className="bi bi-robot icon-robot"></i>
                </span>
                <div className="product-info">
                  <h3>Practice With AI</h3>
                  <p>Free for 10 minutes</p>
                </div>
              </div>
              <div className="product-pill expert-product">
                <span className="product-icon">
                  <i className="bi bi-person-workspace icon-user"></i>
                </span>
                <div className="product-info">
                  <h3>Expert Mentorship</h3>
                  <p>Personalized feedback</p>
                </div>
              </div>
            </div>
            <div className="hero-cta">
              <Button className="btn-primary-gradient">Try Free AI Practice</Button>
              <button className="btn-text">
                <span className="play-icon"><i className="bi bi-calendar-event icon-play"></i></span>
                Book Interview
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">15K+</span>
                <span className="stat-label">Practice Sessions</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">90%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>
          </Col>
          <Col lg={6} className="hero-visual d-none d-lg-block">
            <div className="hero-image-wrapper">
              <div className="floating-card card-1">
                <span className="card-icon"><i className="bi bi-robot icon-robot"></i></span>
                <span className="card-text">AI Interview - Free 10min Trial</span>
              </div>
              <div className="floating-card card-2">
                <span className="card-icon"><i className="bi bi-person-workspace icon-user"></i></span>
                <span className="card-text">Expert Mock Interviews</span>
              </div>
              <div className="floating-card card-3">
                <span className="card-icon"><i className="bi bi-graph-up icon-chart"></i></span>
                <span className="card-text">Personalized Mentorship</span>
              </div>
              <div className="floating-card card-4">
                <span className="card-icon"><i className="bi bi-lightbulb icon-bulb"></i></span>
                <span className="card-text">Real-time Feedback</span>
              </div>
              <div className="floating-card card-5">
                <span className="card-icon"><i className="bi bi-bullseye icon-target"></i></span>
                <span className="card-text">Interview Success Rate 90%</span>
              </div>
              <div className="floating-card card-6">
                <span className="card-icon"><i className="bi bi-star-fill icon-star"></i></span>
                <span className="card-text">Join 15K+ Developers</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home; 