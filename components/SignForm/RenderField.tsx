import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import { FieldErrors, useForm } from 'react-hook-form';
import styles from './Form.module.scss';

// +) 이 필드로 로그인 폼, 회원가입 폼 공통되는 부분을 공통화하고싶은데
// 잘 되지 않아서.. 이게 불필요한 공통화일까요?

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
  nickname: {
    id: 'nickname',
    label: '닉네임',
    type: 'text',
    placeholder: '닉네임을 입력하세요',
    option: {
      required: '닉네임을 입력하세요',
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
  // passwordConfirmation: {
  //   id: 'passwordConfirmation',
  //   'label': '비밀번호 확인',
  //   'type': 'password',
  //   'placeholder': '비밀번호를 다시 한 번 입력하세요',
  //   option: {
  //     validate: {
  //             matchPassword: (value: string) => {
  //               // const { password } = getValues();
  //               // return password === value || '비밀번호가 일치하지 않습니다';
  //             },
  //   },
  // },
};

const RenderField = ({
  register,
  errors,
  field,
}: {
  register: any;
  errors: FieldErrors<ILoginForm>;
  field: keyof ILoginForm;
}) => {
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

export default RenderField;
