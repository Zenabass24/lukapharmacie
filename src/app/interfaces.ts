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