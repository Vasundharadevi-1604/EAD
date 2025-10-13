import React, { useState, useEffect } from "react";
const PassStrChecker = () => { 
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const evaluateStrength = (pwdword) => {
    if(password)return"";
    if (pwdword.length < 6)return "Weak";
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(pwdword))return "Medium";
    if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(pwdword))return "Strong";
    return "Very Strong";
  }
  const handleChange = (e) => {
    const pwdword = e.target.value;
    setPassword(pwdword);
    setStrength(evaluateStrength(pwdword));
    }
    return (
        <div className="container">
            <center>
            <h1>Password Strength Checker</h1>
            <input type="password"value={password}onChange={handleChange}placeholder="Enter your password"/>            <h5>{strength}</h5>
        </center>
        </div>
    );
}
export default PassStrChecker;


