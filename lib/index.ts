// создание ссылки
export const inviteLinkGenerate = (inviteToken: string) =>
  `https://ui-root.suppliers-portal-eu.svc.k8s.test/wb-eu-invites?inviteToken=${inviteToken}`;

// routePath для роутера
export const inviteRoutePath = '/wb-eu-invites?inviteToken';

// routeName для роутера
export const invitePageName = 'wb-eu-invites';
