import ChatIcon from "assets/icons/navbar/chat.svg";
import TasksIcon from "assets/icons/navbar/tasks.svg";
import CartIcon from "assets/icons/navbar/cart.svg";
import ProfileIcon from "assets/icons/navbar/profile.svg";

export const icons = {
  index: (props: any) => <ChatIcon width={26} height={26} {...props} />,
  plan: (props: any) => <TasksIcon width={24} height={24} {...props} />,
  cart: (props: any) => <CartIcon width={28} height={28} {...props} />,
  profile: (props: any) => <ProfileIcon width={28} height={28} {...props} />,
};
