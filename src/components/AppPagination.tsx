import { Pagination } from "react-bootstrap";

interface AppPaginationProps {
  total: number,
  current: number,
  onChangePage: (page: number) => void
  page: number
}

const AppPagination = (props: AppPaginationProps) => {
  let items = [];

  if (props.current > 1) {
    items.push(<Pagination.Prev key={ "prev" } onClick={ () => props.onChangePage(props.page - 1) } />);
  }

  for (let page = 1; page <= props.total; page++) {
    items.push(
      <Pagination.Item
        key={ page }
        active={ page === props.current }
        onClick={ () => props.onChangePage(page) } >
        { page }
      </Pagination.Item >
    )
  }

  if (props.current < props.total) {
    items.push(<Pagination.Next key={ "next" } onClick={ () => props.onChangePage(props.page + 1) } />);
  }

  return <Pagination >{ items }</Pagination >
}

export default AppPagination;