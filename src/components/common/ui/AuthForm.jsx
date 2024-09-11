import { useState } from 'react';
import Button from './Button';
import Input from './Input';

export default function AuthForm({ mode, onSubmit }) {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    nickname: ''
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    if (onSubmit) await onSubmit(formData);
  };

  return (
    <form onSubmit={onHandleSubmit} className="w-full space-y-4">
      {mode === 'signup' && (
        <Input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={onHandleChange}
          placeholder="닉네임"
          required
        />
      )}
      <Input type="text" name="id" value={formData.id} onChange={onHandleChange} placeholder="아이디" required />
      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={onHandleChange}
        placeholder="비밀번호"
        required
      />
      <Button type="submit" className="w-full p-2">
        {mode === 'login' ? '로그인' : '회원가입'}
      </Button>
    </form>
  );
}
