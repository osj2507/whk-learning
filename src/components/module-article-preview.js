import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './module-article-preview.module.css'

export const ModuleArticlePreview = ({ article }) => (
  <div className={styles.preview}>
    <Img alt="" sizes={article.heroImage.sizes} />
    <h3 className={styles.previewTitle}>
      <Link to={`/education/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
)
