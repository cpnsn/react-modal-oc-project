# React Modal OC Project

Un composant **React** réutilisable pour afficher une **modale facile à intégrer**.

## Prérequis

- **Node.js** `>= 18`
- **React** `^18.0.0 || ^19.0.0`
- **Editeur recommandé** : [VS Code](https://code.visualstudio.com/)

---

## Installation

```bash
npm install react-modal-oc-project
```

## Utilisation

### Import du composant

```javascript
import { Modal } from "react-modal-oc-project";
```

### Exemple d'utilisation basique

```javascript
import React, { useState } from "react";
import { Modal } from "react-modal-oc-project";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>
        Ouvrir la modale
      </button>
      
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <p>Contenu de votre modale ici</p>
      </Modal>
    </div>
  );
}
```

## Props

Le composant `Modal` accepte les props suivantes :

| Prop | Type | Obligatoire | Description |
|------|------|-------------|-------------|
| `isOpen` | `boolean` | ✅ | Détermine si la modale est visible ou non |
| `onClose` | `function` | ✅ | Fonction callback appelée lors de la fermeture de la modale |
| `children` | `ReactNode` | ❌ | Contenu à afficher dans la modale |

### Détails des props

#### `isOpen`
- **Type** : `boolean`
- **Obligatoire** : Oui
- **Description** : Contrôle la visibilité de la modale. Lorsque `true`, la modale s'affiche, lorsque `false`, elle est masquée.

#### `onClose`
- **Type** : `function`
- **Obligatoire** : Oui
- **Description** : Fonction callback exécutée lorsque l'utilisateur clique sur le bouton de fermeture (×). Cette fonction doit mettre à jour l'état qui contrôle `isOpen`.

#### `children`
- **Type** : `ReactNode`
- **Obligatoire** : Non
- **Description** : Le contenu JSX à afficher à l'intérieur de la modale. 

## Comportement

- La modale s'affiche avec un overlay semi-transparent qui couvre toute la page
- Un bouton de fermeture (×) est automatiquement ajouté en haut à droite
- La modale est centrée sur l'écran

