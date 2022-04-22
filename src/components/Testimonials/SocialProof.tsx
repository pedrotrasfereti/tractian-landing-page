import React from "react";

/* Styles */
import styles from "./styles.module.css";

interface ISocialProofAuthor {
  name: string;
  role: string;
  company?: string;
  industry?: string;
  picture: string;
}

interface ISocialProof {
  author: ISocialProofAuthor;
  quote: string;
}

function SocialProof({ author, quote }: ISocialProof) {
  return (
    <div className={styles.SocialProof}>
      <div className={styles.Author}>
        <div className={styles.ImageWrapper}>
          <img src={author.picture} alt="" className={styles.Image} />
        </div>

        <div className={styles.Info}>
          <span className={styles.Name}>{author.name}</span>
          <span className={styles.Role}>
            {/* One author must be associated to one company OR industry */}
            {`${author.role} - ${author.company}${author.industry}`}
          </span>
        </div>
      </div>

      <div className={styles.Rating}>{/* FiveStars SVG */}</div>

      <div className={styles.QuoteContainer}>
        <p className={styles.Quote}>{quote}</p>
      </div>
    </div>
  );
}

export default SocialProof;
