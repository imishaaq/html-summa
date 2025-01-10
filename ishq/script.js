function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
  
  function loadTestimonial() {
    const testimonialContainer = document.querySelector('.testimonial-container');
    const newTestimonial = document.createElement('div');
    newTestimonial.classList.add('testimonial');
    newTestimonial.innerHTML = `
      <p>"This center really helped me improve my performance, and I love how they work with my learning style!"</p>
      <h4>- Emma R.</h4>
    `;
    testimonialContainer.appendChild(newTestimonial);
  }