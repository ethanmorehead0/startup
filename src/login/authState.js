export class AuthState {
  static Unknown = new AuthState("unknown");
  static LogedIn = new AuthState("logedIn");
  static LogedOut = new AuthState("logedOut");

  constructor(name) {
    this.name = name;
  }
}
