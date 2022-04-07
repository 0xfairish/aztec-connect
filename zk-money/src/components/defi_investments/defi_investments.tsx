import type { DefiRecipe } from 'alt-model/defi/types';
import { useState } from 'react';
import { Pagination } from '..';
import { DefiInvestmentRow } from './defi_investment_row';
import { useOpenPositions } from 'alt-model/defi/open_position_hooks';

const INVESTMENTS_PER_PAGE = 5;

interface DefiInvestmentsProps {
  onOpenDefiExitModal: (recipe: DefiRecipe) => void;
}

export function DefiInvestments(props: DefiInvestmentsProps) {
  const [page, setPage] = useState(1);
  const positions = useOpenPositions();

  if (!positions) return <></>;
  if (!positions.length) return <div>You haven't made any investments yet</div>;

  return (
    <>
      {positions?.slice((page - 1) * INVESTMENTS_PER_PAGE, page * INVESTMENTS_PER_PAGE).map((position, idx) => (
        <DefiInvestmentRow key={idx} position={position} onOpenDefiExitModal={props.onOpenDefiExitModal} />
      ))}
      <Pagination
        totalItems={positions.length}
        itemsPerPage={INVESTMENTS_PER_PAGE}
        page={page}
        onChangePage={setPage}
      />
    </>
  );
}
