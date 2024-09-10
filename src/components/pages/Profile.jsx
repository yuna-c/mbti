import { useState } from 'react';
import { updateProfile } from '../../api/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAuthStore from '../../store/useAuthStore';

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
    <div>
      <h1>프로필 업데이트</h1>
      <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="새 닉네임" />
      <button onClick={handleNicknameChange}>닉네임 변경</button>
    </div>
  );
}
