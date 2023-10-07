export interface IFournisseur {
    _id?: string;
    nom: string;
    adresse: string;
    telephone: string;
    email: string;
}

export interface IProduit {
    _id?: string;
    nomProduit: String;
    constituants: String[];
    description: String;
    dateExpiration: Date;
    fournisseur?: String;
    categorieProduit: String;
    numeroLot?: String;
    imageProduit?: String;
    stockMinimum: String;
    emplacementStockage?: String;
    numeroSerie?: String;
    ordonnance: Boolean;
    informationsReglementaires?: {
    autorisationMiseMarche?: String,
    }
}

export interface INotification {
    _id: string,
    notificationType: string,
    statut: string,
    date: Date,
    expediteur: string,
    destinataire: string,
    collectionAttachedRef: string
  }

export interface IPharamcie {
    typePharm: string,
    nomPharm: string,
    adresse: string,
    telPharm: string,
    emailPharm: string,
    coordinates: {
        longitude: number,
        latitude: number,
        accuracy: number
    },
    horaires: {
        ouverture: string,
        fermeture: string
    }
}

export interface IAgent {
    nom: string,
    prenom: string,
    fonction: string,
    email: string,
    telephone: string,
    username: string,
    password: string,
    pharmacieRef?: string,
    roleRef?: string
  }
  