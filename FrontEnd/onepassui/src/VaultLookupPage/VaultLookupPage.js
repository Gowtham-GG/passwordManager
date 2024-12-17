import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import axios from "axios";

function VaultLookupPage({userData}) {

    const [options, setOptions] = React.useState([]); // Store the dropdown options
  const [selectedValue, setSelectedValue] = React.useState(""); 

    // Use state to manage the list of items
    const [list, setList] = useState([
        ]);

    const handleChange = (event) => {
        console.log("Event Target Value:", event.target.value); // Debugging
        setSelectedValue(event.target.value); // Update selected value in state
        

        
            const fetchDataVault = async () => {
              try {
                console.log(event.target.value)
                const response = await axios.post("http://localhost:8080/api/creds/byUserAndVault/",{userId : userData.userID, vaultName : event.target.value}); // Replace with your API URL
                // console.log(response.data)
                setList(response.data); // Assuming response.data is a list
                console.log(list);
              } catch (error) {
                console.error("Error fetching options:", error);
              }
            };
        
            fetchDataVault();
          


      };

     // Fetch data from API
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/vaults/byUser/" + userData.userID); // Replace with your API URL
        console.log(response.data)
        setOptions(response.data); // Assuming response.data is a list
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchData();
  }, []);
  

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
        <div className="pageTextLookupSelect">
                <select className = "input"
                                        id="dynamicSelect"
                                        value={selectedValue}
                                        onChange={handleChange}
                                        
                                        >
                                        <option value="" disabled>
                                            -- Select an option --
                                        </option>
                                        {options.map((option, index) => (
                                            <option key={index} value={option} className = "options">
                                            {option}
                                            </option>
                                        ))}     
                                        </select>
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
                                    <td className="nickname">{item.credNickname}</td>
                                    <td className="secrets">{item.savedSite}</td>
                                    <td className="secrets">
                                        <input
                                            type="text"
                                            value={item.savedUser}
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
                                            value={item.savedCred}
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
