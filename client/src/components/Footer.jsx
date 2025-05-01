function Footer() {
    return (
      <footer className="footer bg-primary text-white text-center py-2">
        <p>Aegle © 2025 | Empowering Healthcare</p>
        <div className="d-flex justify-content-center align-items-center mt-2">
          <select
            className="form-select form-select-sm w-auto me-3"
            aria-label="Change Language"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
          <a href="/contact" className="text-white text-decoration-underline">
            Contact Support
          </a>
        </div>
      </footer>
    );
}

export default Footer;
