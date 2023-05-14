import React from "react";
import "./FooterWidget.css";
import Button from '../Form/Button/Button'
export default function FooterWidget({ title, desc, links, grid }) {
  return (
    <div className='col-4'>
      <div className='footer-widgets__item'>
        {title && <span className='footer-widgets__title'>{title}</span>}
        {desc && <p className='footer-widgets__text'>{desc}</p>}
        <div className={`footer-widgets__links`}>
          {links && !grid && (
            <>
              {links.map((link, index) => (
                <Button key={index} href='/' className={`footer-widgets__link`}>
                  {link}
                </Button>
              ))}
            </>
          )}
          {links && grid && (
            <div className='row'>
              {links.map((link, index) => (
                <div key={index} className='col-6'>
                  <Button href='/' className={`footer-widgets__link`}>
                    {link}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
