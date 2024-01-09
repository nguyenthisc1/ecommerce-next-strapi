import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsCta extends Schema.Component {
  collectionName: 'components_components_ctas';
  info: {
    displayName: 'cta';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required & Attribute.DefaultTo<'text'>;
    link: Attribute.String;
  };
}

export interface ComponentsHeader extends Schema.Component {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    navItems: Attribute.Component<'components.nav-item', true>;
  };
}

export interface ComponentsNavItem extends Schema.Component {
  collectionName: 'components_components_nav_items';
  info: {
    displayName: 'navItem';
    icon: 'link';
  };
  attributes: {
    name: Attribute.String & Attribute.DefaultTo<'name '>;
    link: Attribute.String & Attribute.DefaultTo<'/'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.cta': ComponentsCta;
      'components.header': ComponentsHeader;
      'components.nav-item': ComponentsNavItem;
    }
  }
}
