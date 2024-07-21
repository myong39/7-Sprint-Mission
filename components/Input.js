import styles from '@/components/Input.module.css';
import Image from 'next/image';
import pwdVisibilityOnBtn from '@/assets/images/icons/pwdVisibilityOnBtn.svg';
import pwdVisibilityOffBtn from '@/assets/images/icons/pwdVisibilityOffBtn.svg';

export default function Input({
  name,
  value,
  type = 'text',
  className,
  children,
  placeholder,
  showPassword,
  togglePasswordVisibility,
  onChange,
}) {
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      <label htmlFor={`${className}Label`} className={`${styles.label}`}>
        {children}
      </label>
      <div className={styles.inputContainer}>
        <input
          name={name}
          value={value}
          id={`${className}Label`}
          type={inputType}
          className={`${styles.input}`}
          placeholder={placeholder}
          autoComplete='off'
          onChange={onChange}
        />
        {type === 'password' && (
          <span
            className={styles.toggleIcon}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <Image
                src={pwdVisibilityOnBtn}
                width={24}
                height={24}
                alt='Show password'
              />
            ) : (
              <Image
                src={pwdVisibilityOffBtn}
                width={24}
                height={24}
                alt='Hide password'
              />
            )}
          </span>
        )}
      </div>
    </div>
  );
}
