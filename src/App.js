import React, { useEffect, useState } from 'react';
//useState: 変わる値を使うときに使う（例：画面に出すメッセージ）
//useEffect: 最初だけ何か処理したいときに使う（例：APIを呼ぶ）

function App() {
  const [message, setMessage] = useState('');
  // message という表示用の変数を作り、初期値は空文字。
  // setMessage を使うと中身を変えられる。

  useEffect(() => {
    // Node.js APIにアクセス
    fetch('http://localhost:5000/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
//fetch(...) は「Node.jsのAPIに聞きに行く」
//.then(...) は「返ってきたデータを使って何かする」
//setMessage(...) で message に "Hello from Node.js!" を入れる


  return (
    <div>
      <h1>React × Node.js 連携</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
