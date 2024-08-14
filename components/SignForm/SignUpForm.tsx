import { useForm } from 'react-hook-form';
import Button from '@/components/button/Button';
import styles from './Form.module.scss';
import { ErrorMessage } from '@hookform/error-message';
import axios from '@/lib/axios';
import { useRouter } from 'next/router';

import classNames from 'classnames';

function SignUpForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ISignUpForm>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  const router = useRouter();

  const onSubmit = async (data: ISignUpForm) => {
    try {
      const res = await axios.post('/auth/signUp', data);
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
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
        <label htmlFor='nickname'>닉네임</label>
        <input
          type='text'
          className={classNames(errors.nickname && styles['error-input'])}
          placeholder='닉네임을 입력하세요'
          {...register('nickname', {
            required: '닉네임을 입력하세요',
          })}
        />
        <ErrorMessage
          errors={errors}
          name='nickname'
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

      <div>
        <label htmlFor='passwordConfirmation'>비밀번호 확인</label>
        <input
          type='password'
          className={classNames(
            errors.passwordConfirmation && styles['error-input']
          )}
          placeholder='비밀번호를 다시 한 번 입력하세요'
          autoComplete='off'
          {...register('passwordConfirmation', {
            validate: {
              matchPassword: (value: string) => {
                const { password } = getValues();
                return password === value || '비밀번호가 일치하지 않습니다';
              },
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name='passwordConfirmation'
          render={({ message }) => (
            <p className={styles['error-message']}>{message}</p>
          )}
        />
      </div>

      <Button size='large' type='submit'>
        회원가입
      </Button>
    </form>
  );
}

export default SignUpForm;
