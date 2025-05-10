import React from 'react';
import githubIcon from './assets/GitHub_Invertocat_Light.png';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const Press = () => {
    window.location.href = 'http://localhost:5000/login/github?platform=web';
  };
  return (
    <div
      style={{
        backgroundColor: '#404040',
        minHeight: '100vh',//画面全体を上の背景色で覆う
        display: 'flex',//配置モード: ON,
        flexDirection: 'column', 
        justifyContent: 'center',//横: 真ん中,
        alignItems: 'center',//縦: 真ん中,
      }}
    >
      <h1 style={{color: 'white'}}>ようこそ！</h1>
      
      <button
        onClick={Press}
        style={{
          backgroundColor: '#000000',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '8px',
          fontSize: '16px',
        }}
      >
        <img
          src={githubIcon}
          alt="GitHub Logo"
          style={{ width: '20px', height: '20px', marginRight: '8px' }}
        />
        GitHubで登録/ログイン
      </button>
    </div>
  );
}

export default Login;
