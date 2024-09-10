import { useState } from 'react';
import { updateProfile } from '../../api/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAuthStore from '../../store/useAuthStore';
import Button from '../common/ui/Button';
import Input from '../common/ui/Input';
import Article from '../common/ui/Article';

export default function Profile() {
  const queryClient = useQueryClient();
  const [nickname, setNickname] = useState('');
  const token = useAuthStore((state) => state.accessToken);
  // const [updatedNickname, setUpdatedNickname] = useState('');
  const setNicknameInStore = useAuthStore((state) => state.setNickname);

  const { mutate } = useMutation({
    mutationFn: (newNickname) => updateProfile(token, { nickname: newNickname }),
    onSuccess: () => {
      setNicknameInStore(nickname);
      queryClient.invalidateQueries(); // 캐시된 쿼리 무효화
    },
    onError: (error) => {
      console.error('닉네임 변경 실패:', error);
    }
  });

  const handleNicknameChange = async () => {
    mutate(nickname);
  };

  return (
    <Article className="Profile">
      <h1 className="mb-6 text-3xl text-center">프로필 업데이트</h1>
      <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md space-y-4">
        <Input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="새 닉네임" />
        <Button onClick={handleNicknameChange} className="w-full p-2">
          변경 하기
        </Button>
      </form>
    </Article>
  );
}
