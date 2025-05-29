"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LandingCuisine() {
  const [videoError, setVideoError] = useState(false);

  return (
    <main className="bg-background text-foreground">
      {/* HERO avec background vidéo/image + overlay + formulaire à droite */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background vidéo ou image fallback */}
        <div className="absolute inset-0 z-0">
          {!videoError ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover"
              onError={() => setVideoError(true)}
            >
              <source
                src="https://videos.pexels.com/video-files/15887128/15887128-uhd_2560_1440_30fps.mp4"
                type="video/mp4"
              />
              Votre navigateur ne prend pas en charge la lecture de vidéos.
            </video>
          ) : (
            <Image
              src="/images/modern-kitchen.png"
              alt="Cuisine moderne"
              fill
              className="object-cover"
              priority
            />
          )}
        </div>
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        {/* Contenu principal */}
        <div className="container relative z-20 mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Texte accrocheur à gauche */}
          <div className="md:w-1/2 text-white max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
              Cuisines sur mesure conçues par nos experts à Montréal
            </h1>
            <p className="text-lg md:text-2xl mb-6 drop-shadow">
              Transformez votre espace avec un design unique, fonctionnel et élégant. Devis gratuit en 24h, équipe locale expérimentée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href="#devis" className="bg-destructive text-white px-6 py-3 rounded font-semibold hover:bg-destructive/90 transition text-center">Obtenez votre soumission gratuite</a>
              <a href="tel:5141234567" className="bg-white border border-destructive text-destructive px-6 py-3 rounded font-semibold hover:bg-gray-100 transition text-center">Appelez maintenant</a>
            </div>
            <ul className="text-base md:text-lg space-y-1 mt-4">
              <li>✔️ 15 ans d'expérience</li>
              <li>✔️ Devis gratuit en 24h</li>
              <li>✔️ Avant/Après visibles</li>
              <li>✔️ Équipe locale</li>
            </ul>
          </div>
          {/* Formulaire à droite */}
          <div className="md:w-1/2 max-w-md w-full bg-white bg-opacity-90 rounded-lg shadow-lg p-8 backdrop-blur-md">
            <h2 className="text-xl font-bold mb-4 text-destructive text-center">Pour obtenir un plan et devis</h2>
            <form className="space-y-4" method="POST" action="#devis">
              <div className="flex gap-2">
                <input type="text" name="prenom" placeholder="Prénom" required className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-destructive" />
                <input type="text" name="nom" placeholder="Nom" required className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-destructive" />
              </div>
              <div className="flex gap-2">
                <input type="text" name="codepostal" placeholder="Code Postal" required className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-destructive" />
                <input type="tel" name="telephone" placeholder="Téléphone" required className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-destructive" />
              </div>
              <input type="email" name="email" placeholder="Courriel" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-destructive" />
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Votre projet :</label>
                <div className="flex flex-wrap gap-2">
                  <label className="flex items-center gap-1 text-sm"><input type="checkbox" name="projet" value="renovation" /> Rénovation</label>
                  <label className="flex items-center gap-1 text-sm"><input type="checkbox" name="projet" value="construction" /> Construction neuve</label>
                  <label className="flex items-center gap-1 text-sm"><input type="checkbox" name="projet" value="cuisine" /> Cuisine</label>
                  <label className="flex items-center gap-1 text-sm"><input type="checkbox" name="projet" value="sallebain" /> Salle de bain</label>
                </div>
              </div>
              <input type="text" name="budget" placeholder="Budget" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-destructive" />
              <input type="text" name="delai" placeholder="Date de livraison souhaitée" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-destructive" />
              <textarea name="message" placeholder="Message" rows={2} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-destructive"></textarea>
              <button type="submit" className="w-full bg-destructive text-white py-3 rounded font-semibold hover:bg-destructive/90 transition">Envoyer message</button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION SERVICES PERSONNALISÉS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Service personnalisé</h2>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>Cuisines sur mesure depuis 15 ans</li>
              <li>Installation clé en main</li>
              <li>Service de designer à domicile</li>
              <li>Salle de montre à Laval ouverte 7 jours</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image src="/images/modern-kitchen.png" alt="Cuisine moderne" width={500} height={350} className="rounded-lg shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION DIFFÉRENCE/ATOUTS */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">La différence CMR – Votre projet, notre expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-10 h-10 text-destructive" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5.25-3.5 10-8 12-4.5-2-8-6.75-8-12V7l8-4z"/></svg>
              </div>
              <h3 className="font-semibold mb-1">Installation clé en main</h3>
              <p className="text-sm">Prise en charge complète du projet, de la conception à l'installation.</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-10 h-10 text-destructive" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>
              <h3 className="font-semibold mb-1">Design personnalisé</h3>
              <p className="text-sm">Chaque cuisine est conçue selon vos goûts et besoins.</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-10 h-10 text-destructive" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="font-semibold mb-1">Garantie à vie</h3>
              <p className="text-sm">Nos armoires sont garanties à vie – un gage de qualité et de durabilité.</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-10 h-10 text-destructive" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17v-2a4 4 0 018 0v2m-4-4a4 4 0 00-4-4V7a4 4 0 018 0v2a4 4 0 00-4 4z"/></svg>
              </div>
              <h3 className="font-semibold mb-1">Fabrication locale</h3>
              <p className="text-sm">Armoires fabriquées au Québec, garantissant qualité et durabilité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION STATS */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-destructive mb-1">15+</div>
            <div className="text-lg text-primary">Années d'expérience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-destructive mb-1">6000+</div>
            <div className="text-lg text-primary">Projets réalisés</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-destructive mb-1">20+</div>
            <div className="text-lg text-primary">Employés</div>
          </div>
        </div>
      </section>

      {/* SECTION TÉMOIGNAGES */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">Témoignages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <blockquote className="bg-white bg-opacity-80 p-6 rounded shadow text-center">
              <p className="italic mb-3">« Travail impeccable, délais respectés et équipe très professionnelle. Je recommande à 100% ! »</p>
              <footer className="text-sm font-semibold">– Marie, Laval</footer>
            </blockquote>
            <blockquote className="bg-white bg-opacity-80 p-6 rounded shadow text-center">
              <p className="italic mb-3">« Notre cuisine est méconnaissable ! Devis rapide et prix très compétitif. »</p>
              <footer className="text-sm font-semibold">– Jean, Brossard</footer>
            </blockquote>
            <blockquote className="bg-white bg-opacity-80 p-6 rounded shadow text-center">
              <p className="italic mb-3">« Service clé en main, aucune surprise. Merci à toute l'équipe ! »</p>
              <footer className="text-sm font-semibold">– Sophie, Terrebonne</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FOOTER coordonnées + Google Maps */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-bold text-lg mb-1">Rénovation Cuisine Montréal</h3>
            <p>514-123-4567<br />
              <a href="mailto:info@cuisinerenov.ca" className="underline">info@cuisinerenov.ca</a></p>
            <p className="mt-2">Laval, Brossard, Terrebonne et environs</p>
          </div>
          <div>
            <a href="https://maps.google.com/?q=Montréal" target="_blank" rel="noopener" className="flex items-center gap-2 hover:underline">
              <svg className="w-5 h-5 text-destructive" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6c0 4.418-6 10-6 10S4 12.418 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z" /></svg>
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