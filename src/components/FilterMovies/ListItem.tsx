import { ChangeEventHandler } from 'react';
import { IGenre } from '../../typings';
import Form from 'react-bootstrap/Form';
import './FilterMovies.scss';

interface Props {
  genre: IGenre;
  selected: boolean;
  handleOnChange: ChangeEventHandler;
}

function ListItem({ genre, selected, handleOnChange }: Props) {
  return (
    <div className="mb-1">
      <Form.Check
        checked={selected}
        onChange={handleOnChange}
        type="checkbox"
        label={genre.name}
        id={genre.id.toString()}
      />
    </div>
  );
}

export default ListItem;
