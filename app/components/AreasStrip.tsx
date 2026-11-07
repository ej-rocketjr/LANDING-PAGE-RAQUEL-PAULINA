import { Fragment } from "react";
import { Icon } from "./Icons";

const items = [
  { icon: "s-ret", label: "Aposentadorias" },
  { icon: "s-heart", label: "Benefícios por incapacidade" },
  { icon: "s-doc", label: "Revisões de benefício" },
  { icon: "s-bank", label: "Servidores públicos" },
];

export default function AreasStrip() {
  return (
    <nav className="strip" aria-label="Áreas de atuação">
      <div className="wrap">
        <span className="dot" />
        {items.map((item) => (
          <Fragment key={item.label}>
            <span className="item">
              <Icon name={item.icon} />
              {item.label}
            </span>
            <span className="dot" />
          </Fragment>
        ))}
      </div>
    </nav>
  );
}
