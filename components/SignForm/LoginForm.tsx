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

  return (
    <form className={styles['login-form']} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='email'>이메일</label>
        <input
          className={classNames(errors.email && styles['error-input'])}
          type='text'
          placeholder='이메일을 입력하세요'
          {...register('email', {
            required: '이메일을 입력하세요',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: '잘못된 이메일입니다',
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name='email'
          render={({ message }) => (
            <p className={styles['error-message']}>{message}</p>
          )}
        />
      </div>
      <div>
        <label htmlFor='password'>비밀번호</label>
        <input
          type='password'
          className={classNames(errors.password && styles['error-input'])}
          placeholder='비밀번호를 입력하세요'
          autoComplete='off'
          {...register('password', {
            minLength: {
              value: 8,
              message: '비밀번호를 8자 이상 입력해주세요',
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name='password'
          render={({ message }) => (
            <p className={styles['error-message']}>{message}</p>
          )}
        />
      </div>
      <Button size='large' type='submit'>
        로그인
      </Button>
    </form>
  );
}

export default LoginForm;
