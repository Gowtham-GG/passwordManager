package com.onePass.onePass.Response;


public class LoginResponse {

    private String user_name;

    private String user_cred;

    private boolean login_status;

    public LoginResponse()
    {

    }

    public LoginResponse(String user_name, String user_cred) {
        this.user_name = user_name;
        this.user_cred = user_cred;
    }

    public String getUser_name() {
        return user_name;
    }

    public boolean isLogin_status() {
        return login_status;
    }

    public void setLogin_status(boolean login_status) {
        this.login_status = login_status;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_cred() {
        return user_cred;
    }

    public void setUser_cred(String user_cred) {
        this.user_cred = user_cred;
    }
}
