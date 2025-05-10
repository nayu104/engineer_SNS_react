import React, { useState, useEffect } from 'react';
import { GoHomeFill, GoSearch, GoBell, GoMail, GoPeople, GoBookmark } from "react-icons/go";
import IconTextButton from './component/IconTextButton';

function Home() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem('user');
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const addPost = () => {
    if (message.trim() === "") return;
    const newPost = {
      user_name: user.name,
      user_avatar: user.avatar,
      user_message: message,
    };
    setPosts([newPost, ...posts]);
    setMessage("");
  };

  if (!user) return <div>ログイン情報がありません</div>;

  return (
    <div style={{ backgroundColor: '#404040', minHeight: '100vh', color: 'white' }}>
      <input
        style={{ backgroundColor: '#404040' }}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder='つぶやいてみよう'
      />
      <button onClick={addPost}>投稿する</button>

      {posts.map((post, index) => (
        <div key={index}>
          <img src={post.user_avatar} alt='avatar' width={30} />
          <div>{post.user_name}</div>
          <div>{post.user_message}</div>
        </div>
      ))}

      {/* ボタン類 */}
      <IconTextButton icon={GoHomeFill} label={"Home"} onClick={() => alert('aaa')} />
      <IconTextButton icon={GoSearch} label={"探す"} onClick={() => alert('aaa')} />
      <IconTextButton icon={GoBell} label={"通知"} onClick={() => alert('aaa')} />
      <IconTextButton icon={GoMail} label={"メッセージ"} onClick={() => alert('aaa')} />
      <IconTextButton icon={GoPeople} label={"コミュニティ"} onClick={() => alert('aaa')} />
      <IconTextButton icon={GoBookmark} label={"ブックマーク"} onClick={() => alert('aaa')} />
    </div>
  );
}

export default Home;
