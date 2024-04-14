import React, { useState } from "react";
import { Box, Container, Typography, Pagination } from "@mui/material";

const Paginationn = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;
  const totalItems = 8;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const renderItems = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const items = [];

    for (let i = startIndex; i < endIndex; i++) {
      items.push(
        <Typography key={i} variant="body1">
          Item {i + 1}
        </Typography>
      );
    }

    return items;
  };

  return (
    <Container>
      <Box my={4}>{renderItems()}</Box>
      <Box display="flex" justifyContent="center">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default Paginationn;
