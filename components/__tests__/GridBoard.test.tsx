import { render, fireEvent } from '@testing-library/react-native';
import GridBoard from '../GridBoard';
import { Player } from '../../types/game';

describe('GridBoard', () => {
  it('renders 9 cells', () => {
    const board: (Player | null)[] = Array(9).fill(null);
    const { getAllByText } = render(<GridBoard board={board} onCellPress={() => {}} />);
    const cellTexts = getAllByText('');
    expect(cellTexts.length).toBe(9);
  });

  it('fires onCellPress with correct index', () => {
    const mock = jest.fn();
    const board: (Player | null)[] = Array(9).fill(null);
    const { getAllByRole } = render(<GridBoard board={board} onCellPress={mock} />);

    const cells = getAllByRole('button');
    fireEvent.press(cells[4]); // center cell
    expect(mock).toHaveBeenCalledWith(4);
  });
});
