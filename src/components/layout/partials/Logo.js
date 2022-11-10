import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import LogoImageSrc from '../../../assets/images/logo.svg';
import LogoWhiteImageSrc from '../../../assets/images/logo-white.svg';

const Logo = ({
  className,
  light = false,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={light ? LogoWhiteImageSrc : LogoImageSrc}
            alt="Open"
            width={134}
            height={134} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;
