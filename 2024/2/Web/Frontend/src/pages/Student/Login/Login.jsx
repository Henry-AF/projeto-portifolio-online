import styles from './Login.module.css'; // Atualizado para usar CSS Modules
import useAuthStore from '../../../store/useAuthStore';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import logos from '../../../assets/images/logos/logos';
import icons from '../../../assets/images/icons/icons';

const schema = z.object({
  email: z.string().email('Invalid Email').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const Login = () => {
  const login = useAuthStore((state) => state.login);
  const error = useAuthStore((state) => state.error);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    login(data.email, data.password);
  };

  return (
    <div className={styles.loginContainer}>
      <img src={logos.blueBig.src} alt={logos.blueBig.alt} id={styles.backgroundLogo} />
      <div className={styles.login}>
        <img src={logos.blue.src} alt={logos.blue.alt} id={styles.logo} />
        <div className={styles.content}>
          <div className={styles.loginTitle}>
            <h1>Portal do Aluno</h1>
            <p>Faça o login para acessar a sua conta</p>
          </div>
          <div className={styles.loginOption}>
            <div className={styles.option}>
              <input type="radio" name="option" value="student" />
              <span>Aluno</span>
            </div>
            <div className={styles.option}>
              <input type="radio" name="option" value="employee" />
              <span>Funcionário</span>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputGroup}>
              {errors.email && errors.password && (
                <p style={{ color: 'red', whiteSpace: 'nowrap' }}>Email ou senha incorreto. Tente novamente!</p>
              )}
              <img
                src={errors.email ? icons.emailRed.src : icons.email.src}
                alt={icons.email.alt}
                className={styles.imgInputs}
              />
              <input
                type="text"
                {...register('email')}
                className={errors.email ? styles.inputError : styles.inputFormStudent}
                placeholder="E-mail Institucional"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <img src={errors.password ? icons.lockRed.src : icons.lock.src} className={styles.imgInputs} />
              <input
                type="password"
                {...register('password')}
                className={errors.password ? styles.inputError : styles.inputFormStudent}
                placeholder="Senha"
                required
              />
            </div>

            <button type="submit" className={styles.loginButtonStudent}>
              Entrar
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
