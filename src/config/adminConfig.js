/**
 * Konfiguracja administratorów platformy
 * Dodaj tutaj emaile użytkowników którzy mają mieć uprawnienia admina
 */

export const ADMIN_EMAILS = [
  'angielskizania3141@gmail.com',
  // Możesz dodać więcej adminów tutaj
];

/**
 * Sprawdza czy użytkownik jest adminem
 */
export const isAdmin = (email) => {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase());
};

/**
 * Sprawdza czy użytkownik ma uprawnienia do zarządzania kursami
 */
export const canManageCourses = (user) => {
  return user && isAdmin(user.email);
};

/**
 * Sprawdza czy użytkownik ma uprawnienia do zarządzania użytkownikami
 */
export const canManageUsers = (user) => {
  return user && isAdmin(user.email);
};

export default {
  ADMIN_EMAILS,
  isAdmin,
  canManageCourses,
  canManageUsers
};
