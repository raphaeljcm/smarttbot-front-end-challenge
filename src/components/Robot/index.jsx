import { Pagination } from '@mui/material';
import { usePagination } from '../../hooks/usePagination';
import styles from './robot.module.scss';
import { RobotBox } from './RobotBox';

export function Robot() {
  const { totalPages, currentPage, onChange } = usePagination();

  return (
    <>
      <section className={styles.robot_container}>
      <RobotBox />
      </section>
      <Pagination count={totalPages} page={currentPage} onChange={onChange} />
    </>
  );
}