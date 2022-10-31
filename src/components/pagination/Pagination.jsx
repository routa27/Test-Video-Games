import React from 'react';
import { gamesPerPage } from '../../config/config';
import { PaginationBtn, PaginationContainer } from './style';

const Pagination = ({ page, setPage, totalResults }) => {
	const maxPage = Math.ceil(totalResults / gamesPerPage);
	return (
		<PaginationContainer>
			{page > 1 && (
				<PaginationBtn onClick={() => setPage(page - 1)}>
					Previous
				</PaginationBtn>
			)}
			{`${page} / ${maxPage}`}
			{page < maxPage && (
				<PaginationBtn onClick={() => setPage(page + 1)}>Next</PaginationBtn>
			)}
		</PaginationContainer>
	);
};

export default Pagination;
