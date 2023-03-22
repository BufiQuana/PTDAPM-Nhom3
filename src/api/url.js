const prefix = "/api/";

export const END_POINTS = {
  Auth: {
    getCapcha: prefix + "captcha",
    login: prefix + "loginapp",
    loginSkey: prefix + "login-skey",
    updateFCM: prefix + "users/update-fcm",
    logout: prefix + "users/logout",
    forgotPassword: prefix + "forgot-password",
    test: "",
  },
};
