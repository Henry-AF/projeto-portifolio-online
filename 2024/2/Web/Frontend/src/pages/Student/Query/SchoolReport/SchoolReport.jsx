import styles from './SchoolReports.module.css';
import Menu from '../../../../components/Student/Menu/Menu';
import Panel from '../../../../components/Panel/Panel';

const SchoolReports = () => {
  return (
    <div className={styles.reportsContainer}>
      <Menu studentName={'Ana Clara'} />
      <div className={styles.reportsMainContent}>
        <Panel pageName="Painel do Aluno" section="Consultas/Histórico" color="#F66B0E" />

        <div className={styles.reportsInfo}>
          <div className={styles.reportsCard}>
            <div className={styles.reportsCardTitle}>
              <p>Histórico</p>
              <hr />
            </div>

            <div className={styles.reportsCardSemester}>
              <span>Semestre:</span>
              <select name="semester">
                <option>SEMESTRE</option>
                <option value="1">1° SEMESTRE</option>
                <option value="2">2° SEMESTRE</option>
                <option value="3">3° SEMESTRE</option>
                <option value="4">SEM. ATUAL</option>
              </select>
            </div>

            <div className={styles.reportsCardContent}>
              <div className={styles.semesterContentCard}>
                <div>
                  <span>Semestre 1</span>
                  <span>Nota geral</span>
                  <span>Quantidade aulas</span>
                  <span>Quantidade faltas</span>
                </div>

                <hr />
              </div>

              <div className={styles.semesterContentCard}>
                <div>
                  <span>Semestre 1</span>
                  <span>Nota geral</span>
                  <span>Quantidade aulas</span>
                  <span>Quantidade faltas</span>
                </div>

                <hr />
              </div>

              <div className={styles.semesterContentCard}>
                <div>
                  <span>Semestre 1</span>
                  <span>Nota geral</span>
                  <span>Quantidade aulas</span>
                  <span>Quantidade faltas</span>
                </div>

                <hr />
              </div>

              <div className={styles.semesterContentCard}>
                <div>
                  <span>Atual Sem.</span>
                  <span>Indisponível</span>
                  <span>Indisponível</span>
                  <span>Indisponível</span>
                </div>

                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolReports;
