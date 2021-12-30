// Global Type Definitions 

// example
export interface NftAttributes {
    description: string;
    URI: string;
    contract_address: string;
    index: string;
    owner: string;
    media_link: string;
    rarity: string;
    theme: string;
    token_id: string;
    transactionHash: string;
    updatedAt: Date;
    createdAt: Date;
  
    // Descsription contains first name date, event info
    // URI is IPFS link
    // Transaction hash will be used for polygon explorer
    // example url https://polygonscan.com/tx/0xa869a8abd047a4b8694700da7c2ec018de60c45d8b1c4d32c4b3f32094f50508
}