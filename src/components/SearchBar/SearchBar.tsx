import { Field, Form, Formik } from 'formik';
import s from './SearchBar.module.css';
import { MdImageSearch } from 'react-icons/md';
import { FC } from 'react';

interface SearchBarProps {
  onChangeQuery: (inputValue: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onChangeQuery }) => {
  const initValues = {
    search: '',
  };
  const handleSubmit = (values: { search: string }, options: { resetForm: () => void }) => {
    onChangeQuery(values.search);
    options.resetForm();
  };

  return (
    <header className={s.header}>
      <Formik initialValues={initValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <div className={s.inputWrapper}>
            <button type="submit" className={s.btn}>
              <MdImageSearch className={s.icon} />
            </button>
            <Field
              name="search"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              className={s.input}
            />
          </div>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
