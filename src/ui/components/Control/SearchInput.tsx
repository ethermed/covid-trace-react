import * as React from "react";
import styles from "./Control.module.scss";

export const SearchInput = ({ searchTerm, onChange }: SearchProps) => {
  return (
    <input
      type="text"
      onChange={onChange}
      value={searchTerm}
      className={styles.search}
    />
  );
};

interface SearchProps {
  searchTerm: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
