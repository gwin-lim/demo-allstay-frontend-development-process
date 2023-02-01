import React from 'react';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';
import logoImg from '@img/gwin_original.png';

const Logo = ({
  href,
  imageOnly,
  children: title
}) => 
  <h1>
    <a href={href} className="flex flex-col items-center">
      <img src={logoImg} alt={`logo of ${title}`} width={300} height={300} />
      <span className={`${imageOnly ? 'sr-only' : ''}`}>{title}</span>
    </a>
  </h1>;

export default Logo;


Logo.propTypes = {
  /**
   * 로고를 누르면 향해야 하는 목적지 주소를 말합니다.
   */
  href: urlPropType.isRequired,
  /**
   * 로고만 표시 하느냐 또는 타이틀을 함께 표시 하느냐를 말합니다.
   */
  imageOnly: PropTypes.bool,
  /**
   * 로고 타이틀을 말합니다.
   */
  children: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  href: '/',
  imageOnly: true,
  children: 'Example Logo'
};
