import React from 'react';

function Footer () {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-blue py-8 border-t border-white/10">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <p>&copy; {currentYear} GriffinT Technology and Security. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Uma solução completa para o futuro do seu negócio.</p>
      </div>
    </footer>
  );
};

export default Footer;