package com.onePass.onePass.Request;


public class LoginRequest {

    private long userID;

    private String user_name;

    private String user_cred;

    public long getUserID() {
        return userID;
    }

    public void setUserID(long userID) {
        this.userID = userID;
    }




    public LoginRequest()
    {

    }

    public LoginRequest(long userID, String user_name, String user_cred) {
        this.userID = userID;
        this.user_name = user_name;
        this.user_cred = user_cred;
    }

    public LoginRequest(String user_name, String user_cred) {
        this.user_name = user_name;
        this.user_cred = user_cred;
    }

    public String getUser_name() {
        return user_name;
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
