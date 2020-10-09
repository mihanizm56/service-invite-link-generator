// создание ссылки
export const inviteLinkGenerate = (inviteToken: string) => {
  const url = new URL(window.location.href);

  const origin = url.origin;

  return `${origin}/wb-eu-invites?inviteToken=${inviteToken}`;
};

// routePath для роутера
export const inviteRoutePath = '/wb-eu-invites?inviteToken';

// routeName для роутера
export const invitePageName = 'wb-eu-invites';
