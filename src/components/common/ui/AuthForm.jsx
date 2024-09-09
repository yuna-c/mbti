import { useState } from 'react';

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    nickname: ''
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    if (onSubmit) await onSubmit(formData);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      {mode === 'signup' && (
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={onHandleChange}
          placeholder="닉네임"
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
      )}
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={onHandleChange}
        placeholder="아이디"
        required
        className="w-full p-4 border border-gray-300 rounded-lg"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={onHandleChange}
        placeholder="비밀번호"
        required
        className="w-full p-4 border border-gray-300 rounded-lg"
      />
      <button type="submit" className="w-full p-4 border border-gray-300 rounded-lg">
        {mode === 'login' ? '로그인' : '회원가입'}
      </button>
    </form>
  );
};

export default AuthForm;
