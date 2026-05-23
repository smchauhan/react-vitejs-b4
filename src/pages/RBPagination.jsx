import React, { useState } from 'react'
import { Pagination } from 'react-bootstrap'

const RBPagination = () => {
    const [currentPage, setCurrentPage] = useState(1)
    return (
        <div>
            <h4>RB Pagination</h4>
            <Pagination>
                <Pagination.First onClick={() => setCurrentPage(1)} />
                <Pagination.Prev />
                {[1, 2, 3, 4, 5, 6].map((page) => {
                    return (
                        <Pagination.Item key={page}
                            active={currentPage === page}
                            onClick={() => setCurrentPage(page)}
                        >{page}</Pagination.Item>
                    )
                })}
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>


            Current page : {currentPage}
        </div>
    )
}

export default RBPagination