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
  theme:string | null,
  setTheme: (theme:string | null)=> void;

}