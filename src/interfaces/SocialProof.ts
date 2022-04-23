interface ISocialProofAuthor {
  name: string;
  role: string;
  company?: string;
  industry?: string;
  picture: string;
}

export default interface ISocialProof {
  author: ISocialProofAuthor;
  quote: string;
}
