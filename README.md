# 🎵 Sound of You

> Une chanson pour chaque émotion. Parce que la musique guérit ce que les mots ne peuvent pas dire.

🔗 **Live :** [sound-of-you-delta.vercel.app](https://sound-of-you-delta.vercel.app)

---

## 💭 C'est quoi ?

**Sound of You** est un espace personnel où tu associes des **émotions** à des **chansons** — et tu racontes, en quelques mots, comment cette musique t'a aidé à traverser ce que tu ressentais.

Joie, anxieux, colère, brisé, perdu... chaque émotion mérite sa bande-son.

---

## 🎭 Comment ça marche ?

1. **Choisis une émotion** parmi celles proposées
2. **Recherche une chanson** via la barre de recherche Deezer
3. **Écris une description** — comment ce morceau t'a aidé, ce qu'il représente pour toi
4. **Sauvegarde** et construis ta carte émotionnelle musicale

---

## ✨ Features

- 🎨 Interface organisée par émotions
- 🔍 Recherche de musique en temps réel via l'API Deezer
- ✍️ Ajout d'une description personnelle pour chaque morceau


---

## 🚀 Tech Stack

| Outil | Rôle |
|---|---|
| [React](https://react.dev/) | UI framework |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [Deezer API](https://developers.deezer.com/) | Recherche musicale & previews |
| [Vercel](https://vercel.com/) | Déploiement |

---

## 📦 Installation

```bash
# Cloner le projet
git clone https://github.com/your-username/sound-of-you.git
cd sound-of-you

# Installer les dépendances
npm install

# Lancer en dev
npm run dev
```

L'app tourne sur `http://localhost:5173`.

Le proxy Vite gère les appels à Deezer sans erreurs CORS en développement :
- `/deezer` → `https://api.deezer.com`
- `/deezer-img` → `https://cdn-images.deezer.com`

---

## 🌐 Déploiement

Déployé sur **Vercel** — le proxy Vite étant uniquement actif en dev, les appels API en production passent par des routes serverless Vercel.

---



## 📄 Licence

MIT © [Denisa](https://github.com/Denidenisa)
