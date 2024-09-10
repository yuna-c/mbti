import { useState } from 'react';
import { useProfile } from '../../core/hooks/useAuth';
import Button from '../common/ui/Button';
import Input from '../common/ui/Input';
import Article from '../common/ui/Article';

export default function Profile() {
  const [nickname, setNickname] = useState('');
  const { mutate } = useProfile();

  const handleNicknameChange = () => {
    mutate(nickname);
  };

  return (
    <Article className="Profile">
      <h1 className="mb-6 text-3xl text-black">프로필 업데이트</h1>

      <form onSubmit={(e) => e.preventDefault()} className="w-full space-y-4">
        <Input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="새 닉네임" />
        <Button onClick={handleNicknameChange} className="w-full p-2">
          변경 하기
        </Button>
      </form>
    </Article>
  );
}
