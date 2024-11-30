import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

function VaultLookupPage() {
    // Use state to manage the list of items
    const [list, setList] = useState([
        { nickname: "Netflix", url: "www.netflix.com", user: "2013157", password: "bat@abel", isEditable: false },
        { nickname: "Prime", url: "www.primevideo.com", user: "rajipalani2002@yahoo.co.in", password: "bat@abel", isEditable: false },
        { nickname: "Bandhan", url: "bandhan.al.com", user: "2003506", password: "ahtews", isEditable: false },
        { nickname: "AMH", url: "www2.knowledgecentre.swift.com", user: "2013157", password: "bat@abel", isEditable: false },
    ]);

    // Toggle visibility of password and username
    const togglePasswordVisibility = (index, type) => {
        const inputElement = document.getElementById(type === "user" ? `input_user_${index}` : `input_password_${index}`);
        if (inputElement.type === "password") {
            inputElement.type = "text";
        } else {
            inputElement.type = "password";
        }
    };

    // Toggle edit mode for user and password
    const toggleEditMode = (index, field) => {

        

        const updatedList = [...list];
        updatedList[index].isEditable = !updatedList[index].isEditable;
        setList(updatedList);
    };

    // Handle input field changes
    const handleInputChange = (index, value, field) => {
        const updatedList = [...list];
        updatedList[index][field] = value;
        setList(updatedList);
    };

    return (
        <div className="body">
            <div className="box-static" id="box-static">
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
                />
                <div className="pageTextLookup" id="loginTitle">
                    <h1>
                        <VpnKeyIcon className="authTextPreAuthIconColor" id="vault-icon" />
                        Credentials
                    </h1>
                </div>

                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th className="header">Nickname</th>
                                <th className="header">URL</th>
                                <th className="header">Username</th>
                                <th className="header">Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item, index) => (
                                <tr key={index}>
                                    <td className="nickname">{item.nickname}</td>
                                    <td className="secrets">{item.url}</td>
                                    <td className="secrets">
                                        <input
                                            type="text"
                                            value={item.user}
                                            className="inputTable"
                                            id={`input_user_${index}`}
                                            readOnly={!item.isEditable}
                                            onChange={(e) => handleInputChange(index, e.target.value, "user")}
                                        />
                                        
                                        <EditIcon
                                            className="eye"
                                            onClick={() => toggleEditMode(index, "user")}
                                            id={`edit_user_${index}`}
                                            style={{ cursor: "pointer" }}
                                        />
                                    </td>
                                    <td className="secrets">
                                        <input
                                            type="password"
                                            value={item.password}
                                            className="inputTable"
                                            id={`input_password_${index}`}
                                            readOnly={!item.isEditable}
                                            onChange={(e) => handleInputChange(index, e.target.value, "password")}
                                        />
                                        <RemoveRedEyeIcon
                                            className="eye"
                                            onClick={() => togglePasswordVisibility(index, "password")}
                                            id={`eye_password_${index}`}
                                            style={{ cursor: "pointer" }}
                                        />
                                        <EditIcon
                                            className="eye"
                                            onClick={() => toggleEditMode(index, "password")}
                                            id={`edit_password_${index}`}
                                            style={{ cursor: "pointer" }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default VaultLookupPage;
