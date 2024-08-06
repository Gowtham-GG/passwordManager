package com.onePass.onePass.Response;

public class LoginResponse {

    private long userID;
    private String userName;

    private boolean loginStatus;

    public LoginResponse(long userID, String userName, boolean loginStatus) {
        this.userID = userID;
        this.userName = userName;
        this.loginStatus = loginStatus;
    }

    public long getUserID() {
        return userID;
    }

    public void setUserID(long userID) {
        this.userID = userID;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public boolean isLoginStatus() {
        return loginStatus;
    }

    public void setLoginStatus(boolean loginStatus) {
        this.loginStatus = loginStatus;
    }
}
