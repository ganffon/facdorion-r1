import admin from "img/menu/admin.svg";
import equipment from "img/menu/equipment.svg";
import management from "img/menu/management.svg";
import panel from "img/menu/panel.svg";
import production from "img/menu/production.svg";
import quality from "img/menu/quality.svg";
import standard from "img/menu/standard.svg";
import inventory from "img/menu/inventory.svg";
import star from "img/menu/star.svg";
import styled from "styled-components";

export const Icon = styled("img")`
  width: 30px;
  height: 30px;
`;

export const menuListIcon = (key) => {
  switch (key) {
    case "admin":
      return <Icon src={admin} />;
    case "standard":
      return <Icon src={standard} />;
    case "inventory":
      return <Icon src={inventory} />;
    case "production":
      return <Icon src={production} />;
    case "equipment":
      return <Icon src={equipment} />;
    case "quality":
      return <Icon src={quality} />;
    case "management":
      return <Icon src={management} />;
    case "panel":
      return <Icon src={panel} />;
    default:
      return <Icon src={star} />;
  }
};
