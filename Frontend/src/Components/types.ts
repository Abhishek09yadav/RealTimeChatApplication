export interface AuthUser {
  fullName: string;
  email: string;
  profilePic?: string;
  createdAt: string;
}

export interface AuthStore {
  authUser: AuthUser | null;
  checkAuth: () => void;
  isCheckingAuth: true | false;
  isSigningUp: true | false;
  isLoggingIn: true | false;
  isUpdatingProfile: true | false;
  login: (data: { email: string; password: string }) => void;
  signUp: (data: { fullName: string; email: string; password: string }) => void;
  updateProfile: (data: { profilePic: string }) => void;
  logout: () => void;
}

export interface ThemeStore {
  theme: string | null;
  setTheme: (theme: string | null) => void;
  
}

export interface LoginResponse {
  data:{
    messsage: string;
  }
}

export interface AxiosErrorResponse {
  response?: {
    data?: {
      message?: string | null;
    };
  };
}

export interface User{
  _id:string;
  fullName:string;
  email:string;
  ProfilePic?:string;
  createdAt:string;
}
export interface Message{
  _id:string;
  senderId:string;
  receiverId:string;
  text:string;
  createdAt:string;
}
export interface ChatStore {
  isUserLoading: boolean;
  isMessagesLoading: boolean;
  messages: Message[];
  users: User[];
  selectedUser: string | null;
  setSelectedUser: (userId: string) => void;
  getMessages: (userId: string) => Promise<void>;
  getUsers: () => Promise<void>;
}
