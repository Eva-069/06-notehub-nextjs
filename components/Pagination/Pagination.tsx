import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
}

export default function Pagination({
  totalPages,
  page,
  setPage,
}: PaginationProps) {
  if (totalPages <= 1) return null;
  
  const validCurrentPage = Math.max(1, Math.min(page, totalPages));

  function handlePageChange(selectedItem: { selected: number }) {
    const newPage = selectedItem.selected + 1;
    setPage(newPage);
  }

  return (
    <nav aria-label="Notes pagination" className={styles.wrapper}>
      <ReactPaginate
        pageCount={totalPages}
        onPageChange={handlePageChange}
        forcePage={validCurrentPage - 1}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        previousLabel="←"
        nextLabel="→"
        breakLabel="…"
        containerClassName={styles.pagination}
        pageClassName={styles.page}
        pageLinkClassName={styles.link}
        previousClassName={styles.page}
        nextClassName={styles.page}
        previousLinkClassName={styles.link}
        nextLinkClassName={styles.link}
        breakClassName={styles.page}
        breakLinkClassName={styles.link}
        activeClassName={styles.active}
        disabledClassName={styles.disabled}
      />
    </nav>
  );
}