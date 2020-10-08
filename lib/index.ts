// создание ссылки
export const inviteLinkGenerate = (inviteToken: string) => {
  const url = window.location.href.replace(/(.*)(\/login)$/, (_, $1) => $1);

  return `${url}/wb-eu-invites?inviteToken=${inviteToken}`;
};

// routePath для роутера
export const inviteRoutePath = '/wb-eu-invites?inviteToken';

// routeName для роутера
export const invitePageName = 'wb-eu-invites';
