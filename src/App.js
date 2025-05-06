import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <HeroSection />
      <AboutSection />
      <ModulesOverview />
      <WhyChoose />
      <ContactForm />
      <Footer />
    </div>
  );
};

const HeroSection = () => {
  return (
    <header className="hero">
      <h1>Katibu ERP</h1>
      <p>Your All-in-One Business Operating System</p>
      <p><strong>Modular. Scalable. Intelligent.</strong></p>
      <button className="cta-button">Request a Demo</button>
    </header>
  );
};

const AboutSection = () => {
  return (
    <section>
      <h2>What is Katibu ERP?</h2>
      <p>A modular enterprise management solution designed for businesses of all sizes. It includes specialized applications like HR, Finance, CRM, Inventory, and more.</p>
    </section>
  );
};

const ModulesOverview = () => {
  const modules = [
    { icon: 'fas fa-users', name: 'HR Management' },
    { icon: 'fas fa-money-bill-wave', name: 'Finance & Accounting' },
    { icon: 'fas fa-address-book', name: 'CRM' },
    { icon: 'fas fa-warehouse', name: 'Inventory Management' },
    { icon: 'fas fa-chart-line', name: 'AI & Machine Learning Reports' },
    { icon: 'fas fa-check-circle', name: 'Audit & Compliance Engine' },
    { icon: 'fas fa-shopping-cart', name: 'Procurement & Supply Chain' },
    { icon: 'fas fa-truck', name: 'Asset & Fleet Management' },
    { icon: 'fas fa-file-invoice-dollar', name: 'Sales & Quotation Management' },
  ];

  return (
    <section>
      <h2>Modules Overview</h2>
      <div className="modules">
        {modules.map((module, index) => (
          <div className="module" key={index}>
            <i className={module.icon}></i>
            <p>{module.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const WhyChoose = () => {
  return (
    <section>
      <h2>Why Choose Katibu?</h2>
      <ul>
        <li>Modular design pay for what you use.</li>
        <li>Designed for African markets but scalable globally.</li>
        <li>Works across multiple businesses and clients simultaneously.</li>
      </ul>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section>
      <h2>Request a Demo</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Katibu ERP</p>
      <p>© 2025 All Rights Reserved</p>
    </footer>
  );
};

export default App;