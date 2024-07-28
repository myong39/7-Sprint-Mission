import { useForm } from 'react-hook-form';
import Button from '../button/Button';
import styles from './Form.module.scss';
import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import { useAuth } from '@/contexts/AuthProvider';
import RenderField from './RenderField';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { login } = useAuth(false);

  const onSubmit = (data: ILoginForm) => {
    login(data);
  };

  // 상수는 어디다 관리하는게 좋을까요?
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const LOGIN_VALUES = {
    email: {
      id: 'email' as keyof ILoginForm,
      label: '이메일',
      type: 'text',
      placeholder: '이메일을 입력하세요',
      option: {
        required: '이메일을 입력하세요',
        pattern: {
          value: emailRegex,
          message: '잘못된 이메일입니다',
        },
      },
    },
    password: {
      id: 'password' as keyof ILoginForm,
      label: '비밀번호',
      type: 'password',
      placeholder: '비밀번호를 입력하세요',
      option: {
        minLength: {
          value: 8,
          message: '비밀번호를 8자 이상 입력해주세요',
        },
      },
    },
  };

  const renderField = (field: keyof ILoginForm) => {
    const { id, label, type, placeholder, option } = LOGIN_VALUES[field];

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          className={classNames(errors[id] && styles['error-input'])}
          type={type}
          autoComplete='off'
          placeholder={placeholder}
          {...register(id, option)}
        />
        <ErrorMessage
          errors={errors}
          name={id}
          render={({ message }) => (
            <p className={styles['error-message']}>{message}</p>
          )}
        />
      </div>
    );
  };

  return (
    <form className={styles['login-form']} onSubmit={handleSubmit(onSubmit)}>
      <RenderField register={register} errors={errors} field='email' />
      {/* {renderField('email')} */}
      {renderField('password')}
      <Button size='large' type='submit'>
        로그인
      </Button>
    </form>
  );
}

export default LoginForm;
