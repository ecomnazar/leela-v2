import { isAuthenticated } from "@/shared/lib/isAuthenticated";
import { useModal } from "@/shared/zustand/useModal";

export const useCheckAuthorization = () => {
  const { openModal } = useModal();

  const check = () => {
    const checkIsAuthenticated = isAuthenticated();
    if (checkIsAuthenticated) {
      return true;
    } else {
      openModal("create-account");
      return false;
    }
  };

  return check;
};
