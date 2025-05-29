import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Rénovation de Cuisine Montréal | Soumission Gratuite en 24h",
  description: "Rénovation de cuisine à Montréal et banlieues : armoires sur mesure, comptoirs, rénovation complète. 15 ans d'expérience. Soumission gratuite en 24h.",
};

export default function LandingCuisine() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Bandeau principal */}
      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-4 py-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Rénovation de Cuisine à Montréal et Banlieues</h1>
          <p className="text-lg md:text-2xl mb-6">Armoires sur mesure, comptoirs, rénovation complète. Devis gratuit en 24h, équipe locale expérimentée.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#devis" className="bg-red-600 text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition">Obtenez votre soumission gratuite</a>
            <a href="tel:5141234567" className="bg-white border border-red-600 text-red-600 px-6 py-3 rounded font-semibold hover:bg-red-50 transition">Appelez maintenant</a>
          </div>
        </div>
      </header>

      {/* Portfolio Avant/Après */}
      <section className="max-w-5xl mx-auto px-4 py-14" aria-labelledby="portfolio">
        <h2 id="portfolio" className="text-2xl md:text-3xl font-bold text-center mb-10">Avant / Après : Nos réalisations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Exemple 1 */}
          <div>
            <div className="mb-2 w-full h-40 relative rounded overflow-hidden">
              <Image src="/portfolio/avant1.jpg" alt="Cuisine avant rénovation Laval" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw"/>
            </div>
            <div className="w-full h-40 relative rounded overflow-hidden">
              <Image src="/portfolio/apres1.jpg" alt="Cuisine après rénovation Laval" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw"/>
            </div>
            <p className="text-center text-sm mt-2">Laval – Armoires & comptoirs sur mesure</p>
          </div>
          {/* Exemple 2 */}
          <div>
            <div className="mb-2 w-full h-40 relative rounded overflow-hidden">
              <Image src="/portfolio/avant2.jpg" alt="Cuisine avant rénovation Brossard" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw"/>
            </div>
            <div className="w-full h-40 relative rounded overflow-hidden">
              <Image src="/portfolio/apres2.jpg" alt="Cuisine après rénovation Brossard" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw"/>
            </div>
            <p className="text-center text-sm mt-2">Brossard – Rénovation complète</p>
          </div>
          {/* Exemple 3 */}
          <div>
            <div className="mb-2 w-full h-40 relative rounded overflow-hidden">
              <Image src="/portfolio/avant3.jpg" alt="Cuisine avant rénovation Terrebonne" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw"/>
            </div>
            <div className="w-full h-40 relative rounded overflow-hidden">
              <Image src="/portfolio/apres3.jpg" alt="Cuisine après rénovation Terrebonne" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw"/>
            </div>
            <p className="text-center text-sm mt-2">Terrebonne – Modernisation cuisine</p>
          </div>
        </div>
      </section>

      {/* Témoignages clients */}
      <section className="bg-white py-14" aria-labelledby="temoignages">
        <div className="max-w-4xl mx-auto px-4">
          <h2 id="temoignages" className="text-2xl md:text-3xl font-bold text-center mb-10">Ce que disent nos clients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <blockquote className="bg-gray-50 p-6 rounded shadow text-center">
              <p className="italic mb-3">« Travail impeccable, délais respectés et équipe très professionnelle. Je recommande à 100% ! »</p>
              <footer className="text-sm font-semibold">– Marie, Laval</footer>
            </blockquote>
            <blockquote className="bg-gray-50 p-6 rounded shadow text-center">
              <p className="italic mb-3">« Notre cuisine est méconnaissable ! Devis rapide et prix très compétitif. »</p>
              <footer className="text-sm font-semibold">– Jean, Brossard</footer>
            </blockquote>
            <blockquote className="bg-gray-50 p-6 rounded shadow text-center">
              <p className="italic mb-3">« Service clé en main, aucune surprise. Merci à toute l'équipe ! »</p>
              <footer className="text-sm font-semibold">– Sophie, Terrebonne</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="max-w-5xl mx-auto px-4 py-14" aria-labelledby="atouts">
        <h2 id="atouts" className="text-2xl md:text-3xl font-bold text-center mb-10">Pourquoi choisir notre équipe ?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-3">
              {/* Garantie */}
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5.25-3.5 10-8 12-4.5-2-8-6.75-8-12V7l8-4z"/></svg>
            </div>
            <h3 className="font-semibold mb-1">Garantie 5 ans</h3>
            <p className="text-sm">Sur tous nos travaux</p>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              {/* Prix juste */}
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </div>
            <h3 className="font-semibold mb-1">Prix juste</h3>
            <p className="text-sm">Transparence & honnêteté</p>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              {/* Délais respectés */}
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 className="font-semibold mb-1">Délais respectés</h3>
            <p className="text-sm">Engagement sur les échéances</p>
          </div>
          <div>
            <div className="flex justify-center mb-3">
              {/* Service clé en main */}
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17v-2a4 4 0 018 0v2m-4-4a4 4 0 00-4-4V7a4 4 0 018 0v2a4 4 0 00-4 4z"/></svg>
            </div>
            <h3 className="font-semibold mb-1">Service clé en main</h3>
            <p className="text-sm">De la conception à la pose</p>
          </div>
        </div>
      </section>

      {/* Formulaire de demande de devis */}
      <section id="devis" className="bg-white py-14" aria-labelledby="devis-titre">
        <div className="max-w-lg mx-auto px-4">
          <h2 id="devis-titre" className="text-2xl md:text-3xl font-bold text-center mb-8">Obtenez votre soumission gratuite</h2>
          <form className="space-y-5" method="POST" action="#">
            <div>
              <label htmlFor="nom" className="block mb-1 font-medium">Nom</label>
              <input type="text" id="nom" name="nom" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
            <div>
              <label htmlFor="telephone" className="block mb-1 font-medium">Téléphone</label>
              <input type="tel" id="telephone" name="telephone" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Courriel</label>
              <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Votre projet</label>
              <textarea id="message" name="message" rows={4} required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"></textarea>
            </div>
            <button type="submit" className="w-full bg-red-600 text-white py-3 rounded font-semibold hover:bg-red-700 transition">Envoyer ma demande</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-bold text-lg mb-1">Rénovation Cuisine Montréal</h3>
            <p>514-123-4567<br />
              <a href="mailto:info@cuisinerenov.ca" className="underline">info@cuisinerenov.ca</a></p>
            <p className="mt-2">Laval, Brossard, Terrebonne et environs</p>
          </div>
          <div>
            <a href="https://maps.google.com/?q=Montréal" target="_blank" rel="noopener" className="flex items-center gap-2 hover:underline">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 4.418-6 10-6 10S4 12.418 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z" /></svg>
              Nous trouver sur Google Maps
            </a>
            <p className="mt-2 text-sm">Lun-Ven : 8h-18h<br />Sam : 9h-14h</p>
          </div>
        </div>
        <p className="text-center text-xs mt-6 text-gray-400">&copy; 2024 Rénovation Cuisine Montréal. Tous droits réservés.</p>
      </footer>
    </main>
  );
} 