import '../styles/Tag.scss';
import grayXIc from '../assets/icons/ic_x_gray.svg';
import Button from './Button';
import { ChangeEvent, MouseEvent } from 'react';

interface Props {
  name: string;
  onDeleteClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

function Tag({ name, onDeleteClick }: Props) {
  return (
    <div className='tag'>
      <span className='tag-name'>{name}</span>
      <Button onClick={onDeleteClick}>
        <img src={grayXIc} alt='삭제 버튼' className='tag-btn-delete' />
      </Button>
    </div>
  );
}

export default Tag;
