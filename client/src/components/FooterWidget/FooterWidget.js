import React from "react";
import "./FooterWidget.css";
export default function FooterWidget({ title, desc, links, grid }) {
  return (
    <div class='col-4'>
      <div class='footer-widgets__item'>
        {title && <span class='footer-widgets__title'>{title}</span>}
        {desc && <p class='footer-widgets__text'>{desc}</p>}
        <div class={`footer-widgets__links`}>
          {links && !grid && (
            <>
              {links.map((link, index) => (
                <a key={index} href='/' class={`footer-widgets__link`}>
                  {link}
                </a>
              ))}
            </>
          )}
          {links && grid && (
            <div class='row'>
              {links.map((link, index) => (
                <div key={index} class='col-6'>
                  <a href='/' class={`footer-widgets__link`}>
                    {link}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
