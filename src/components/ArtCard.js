import React from 'react';

const ArtCard = ({ imgUrl, linkToOriginal, title, author, tags }) => {
  return (
    <div className='Art'>
      <div className='Art__inner'>
        <div className='Art__front'>
          <img src={imgUrl} alt={title} />
        </div>
        <div className='Art__back'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={linkToOriginal}
            className='Art__title'
          >
            <span>{title}</span>
          </a>
          <div className='Art__author'>
            <span className='Author__name'>{author.name}</span>
            <div className='Author__rrss'>
              {author.twitter && (
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={author.twitter}
                >
                  <span className='icon-twitter'></span>
                </a>
              )}
              {author.github && (
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={author.github}
                >
                  <span className='icon-github'></span>
                </a>
              )}
              <span></span>
            </div>
          </div>
          <div className='Art__tags'>
            {tags.map((tag) => (
              <span className='Art__tag'>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
