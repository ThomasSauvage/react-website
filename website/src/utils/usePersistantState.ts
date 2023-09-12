import { Dispatch, SetStateAction, useEffect, useState } from "react";

/**
 * Hook équivalent à useState mais qui stocke la valeur dans le localStorage
 * resetValue permet de remettre la valeur stockée par défaut
 *
 * La valeur est unique au compte de bar renseigné
 *
 * Remarque de sécurité: Les données sont techniquement accessible par tous les utilisateurs du même navigateur
 *
 * @param defaultValue valeur par défaut
 * @param id Nom unique identifiant la valeur stockée
 * @param barAccountId Id du compte bar
 */
export const usePersistentState = <T>(
  defaultValue: T,
  id: string
): [T, Dispatch<SetStateAction<T>>, () => void] => {
  const storedValue = window.localStorage.getItem(id);

  const [value, setValue] = useState(
    storedValue !== null ? (JSON.parse(storedValue) as T) : defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(id, JSON.stringify(value));
  }, [value, id]);

  const resetValue = (): void => {
    setValue(defaultValue);
  };

  return [value, setValue, resetValue];
};
