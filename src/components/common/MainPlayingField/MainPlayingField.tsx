import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../store/store.types';
import { tableData } from '../../../helpers/tableData';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import FieldCell from './FieldCell';
import { useStyles } from './MainPlayingField.styles';

export const MainPlayingField = () => {
  const classes = useStyles();

  const { columns, lines } = useSelector(
    (store: RootState) => store.controlBlock,
  );

  const [body, setBody] = useState([]);

  useEffect(() => {
    setBody(() => tableData(Number(lines), Number(columns)));
  }, [columns, lines]);

  return (
    <Table className={classes.table}>
      <TableBody>
        {body.map((row, idxRow) => (
          <TableRow key={idxRow}>
            {row.map((cell, idxCell) => (
              <TableCell key={idxCell}>
                <FieldCell col={cell[0]} row={cell[0]} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
