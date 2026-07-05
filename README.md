# Zenfactur.fr

Site statique Astro : guides (SEO), comparatifs (affiliation), générateur de mise en demeure (49 €).

## Démarrer en local
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # génère dist/
```

## Déployer sur Cloudflare Pages (gratuit)
1. Pousser ce dossier sur un repo GitHub.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → connecter le repo.
3. Framework preset : Astro. Build command : `npm run build`. Output : `dist`.
4. Ajouter le domaine zenfactur.fr (DNS géré par Cloudflare = SSL auto).

## À faire avant mise en ligne (checklist)
- [ ] Acheter zenfactur.fr (Cloudflare Registrar ou OVH)
- [ ] Compléter /mentions-legales/ et /confidentialite/ (obligatoire)
- [ ] Compléter /a-propos/
- [ ] Créer le Payment Link Stripe (Dashboard → Payment Links → produit "Mise en demeure 49 €",
      redirection post-paiement vers https://zenfactur.fr/mise-en-demeure-telechargement/)
      puis remplacer l'URL REMPLACER_MOI dans src/pages/mise-en-demeure.astro
- [ ] Vérifier le taux de pénalités par défaut du calculateur (BCE + 10 pts, semestre en cours)
- [ ] Faire relire le modèle de mise en demeure (références légales) avant les premières ventes
- [ ] Rédiger l'article pilier n°1 (src/content/guides/client-ne-paie-pas-facture.md)
- [ ] Google Search Console : déclarer le site + soumettre le sitemap

## Après 10-15 articles publiés
- [ ] S'inscrire comme éditeur sur Affilae et Awin
- [ ] Candidater au programme Qonto : affiliate@qonto.com (décrire le site, l'audience, l'intégration prévue)
- [ ] Remplacer les liens directs par les liens trackés dans src/pages/comparatif/

## Architecture
- Articles : src/content/guides/*.md (frontmatter : title, description, pubDate, theme, affiliation, priorite)
- Le générateur de mise en demeure est 100 % côté client : les données restent dans le
  navigateur (sessionStorage), aucun serveur, aucune donnée stockée. Le PDF est généré
  après paiement sur /mise-en-demeure-telechargement/ via jsPDF.
