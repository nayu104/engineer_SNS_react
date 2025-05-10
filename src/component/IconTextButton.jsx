import React from 'react'

const IconTextButton = ({ icon: Icon, label, onClick}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#404040',     
        color: 'white',            // 白い文字やアイコン
        padding: '10px 16px',      // 余白
        border: 'none',
        display: 'inline-flex',//Row(children: [...])
        alignItems: 'center',
        gap: '8px',              // アイコンと文字の間
        fontSize: '16px',
        fontWeight: 'bold'//太字
      }}
    >
      <Icon size={20} />
      {label}
    </button>
  )
}

export default IconTextButton