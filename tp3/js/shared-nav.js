(function () {
  const root = window.location.pathname.includes('/pages/') ? '../' : '';

  document.write(`
<nav aria-label="Navigation principale">
  <div class="container nav-inner">
    <a class="nav-logo" href="${root}index.html">Vela<sup>voyages</sup></a>
    <ul class="nav-links">
      <li><a href="${root}index.html">Accueil</a></li>
      <li><a href="${root}pages/about.html">L'agence</a></li>
      <li><a href="${root}pages/services.html">Destinations</a></li>
      <li><a href="${root}pages/gallery.html">Galerie</a></li>
      <li><a href="${root}pages/contact.html">Contact</a></li>
    </ul>
    <a href="${root}pages/contact.html" class="nav-book">Devis gratuit</a>
    <button class="hamburger" aria-label="Menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`);

  document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('beforeend', `
<footer>
  <div class="footer-top">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-brand-name">Vela<sup>voyages</sup></div>
          <p>Agence de voyages sur-mesure depuis 2012. Nous créons des itinéraires uniques pour des voyageurs qui refusent l'ordinaire.</p>
        </div>
        <div class="footer-col">
          <h5>Plan du site</h5>
          <ul>
            <li><a href="${root}index.html">Accueil</a></li>
            <li><a href="${root}pages/about.html">L'agence</a></li>
            <li><a href="${root}pages/services.html">Destinations</a></li>
            <li><a href="${root}pages/gallery.html">Galerie</a></li>
            <li><a href="${root}pages/contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Destinations</h5>
          <ul>
            <li><a href="${root}pages/services.html">Asie du Sud-Est</a></li>
            <li><a href="${root}pages/services.html">Afrique & Safari</a></li>
            <li><a href="${root}pages/services.html">Amérique du Sud</a></li>
            <li><a href="${root}pages/services.html">Océanie</a></li>
            <li><a href="${root}pages/services.html">Arctique & Antarctique</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="mailto:bonjour@vela-voyages.fr">bonjour@vela-voyages.fr</a></li>
            <li><a href="tel:+33145000000">+33 1 45 00 00 00</a></li>
            <li><a href="#">8 avenue des Voyageurs<br/>75008 Paris</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 Vela Voyages — Tous droits réservés · APST N° 12345</span>
        <span><a href="#">Mentions légales</a> · <a href="#">CGV</a> · <a href="#">Données personnelles</a></span>
      </div>
    </div>
  </div>
</footer>`);
  });
})();
