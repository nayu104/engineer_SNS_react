import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const name = params.get('name');
    const avatar = params.get('avatar');

    if (id && name && avatar) {
      // ここではログイン情報をlocalStorageに保存（簡易的）
      sessionStorage.setItem('user', JSON.stringify({ id, name, avatar }));

      // Home画面へ遷移
      navigate('/home');
    }
  }, []);

  return <div>ログイン処理中...</div>;
}

export default Callback;
