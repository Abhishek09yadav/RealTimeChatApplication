export interface AuthUser {
  fullName: string;
  email: string;
  profileImage?: string;
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
