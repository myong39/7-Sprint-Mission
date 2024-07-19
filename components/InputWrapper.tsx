import Input from '@/components/Input';
import styles from '@/components/Input.module.scss';
import FileInput from './FileInput';
import InputTextArea from './InputTextArea';

interface Props {
  primary?: boolean;
  area?: boolean;
  file?: boolean;
  id: string;
  name: string;
}

function InputWrapper({ id, name, primary, area, file }: Props) {
  if (area) {
    return (
      <div className={styles['input-wrapper']}>
        <label htmlFor={id}>
          {primary && '*'} {name}
        </label>
        <InputTextArea name={name} />
      </div>
    );
  }

  if (file) {
    return (
      <div className={styles['input-wrapper']}>
        <label htmlFor={id}>
          {primary && '*'} {name}
        </label>
        <FileInput />
      </div>
    );
  }

  return (
    <div className={styles['input-wrapper']}>
      <label htmlFor={id}>
        {primary && '*'} {name}
      </label>
      <Input name={name} />
    </div>
  );
}

export default InputWrapper;
