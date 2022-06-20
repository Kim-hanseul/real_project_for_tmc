import { ThemeVariation } from '@common/enum';
import { renderThemeClass } from '@common/functions';
import { AppState } from '@store';
import { handleFooterPosts } from '@store/thunk/post';
import classNames from 'classnames';
import React, { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';




interface FooterProps {
  theme?: ThemeVariation;
}
const Footer = ({ theme }: FooterProps) => {
  const dispatch = useDispatch();

  const { data } = useSelector((state: AppState) => state.posts.footerList);

  useEffect(() => {
    dispatch(handleFooterPosts({ _limit: 3, type_like: 'image' }));
  }, []);

  return (
    <footer className={classNames(renderThemeClass(theme))}>
        <div className="copyright">
          <p>© 2022, TMC - AI Food Schedule Program. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
